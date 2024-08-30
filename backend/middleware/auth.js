import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not authorized, Login again",
    });
  }
  try {
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body.user) {
      req.body.user = {};
    }
    req.body.user._id = tokenDecode.id;
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error during authentication",
    });
  }
};

export default authMiddleware;
