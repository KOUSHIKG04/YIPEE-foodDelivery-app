import paypal from "@paypal/checkout-server-sdk";
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import dotenv from "dotenv";
dotenv.config();

const environment = new paypal.core.SandboxEnvironment(
  process.env.PP_CLIENT_ID,
  process.env.PP_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

export const placeOrder = async (req, res) => {
  const frontendURL = "http://localhost:5173";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const purchase_units = [
      {
        amount: {
          currency_code: "INR",
          value: (req.body.amount * 85).toFixed(2),
          breakdown: {
            item_total: {
              currency_code: "INR",
              value: (
                req.body.items.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  2
                ) * 85
              ).toFixed(2),
            },
          },
        },
        items: req.body.items.map((item) => ({
          name: item.name,
          unit_amount: {
            currency_code: "INR",
            value: (item.price * 85).toFixed(2),
          },
          quantity: item.quantity,
        })),
      },
    ];

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: purchase_units,
      application_context: {
        return_url: `${frontendURL}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${frontendURL}/verify?success=false&orderId=${newOrder._id}`,
      },
    });

    const order = await client.execute(request);

    res.json({
      success: true,
      approvalUrl: order.result.links.find((link) => link.rel === "approve")
        .href,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};


// verifyOrder


