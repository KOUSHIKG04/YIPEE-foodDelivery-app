import React, { useContext, useState } from "react";
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import "./Login.css";
import { StoreContext } from "@/context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = ({ setLogin }) => {
  const { URL, setToken } = useContext(StoreContext);

  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onLogin = async (e) => {
    e.preventDefault();
    let newURL = URL;
    if (currentState === "Login") {
      newURL += "/api/v1/user/login";
    } else {
      newURL += "/api/v1/user/signup";
    }

    const response = await axios.post(newURL, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setLogin(false);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="login-popup flex justify-center items-center fixed inset-0 bg-gray-800 bg-opacity-50">
      <form
        onSubmit={onLogin}
        className="py-8 px-8 login-popup-container flex max-w-md flex-col gap-4 bg-white rounded-lg shadow-lg"
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-black font-bold">
              {currentState === "Login" ? "LOGIN" : "SIGN-UP"}
            </h2>
            <svg
              onClick={() => setLogin(false)}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="cursor-pointer w-6 h-6"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f44336"
                d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
              ></path>
              <path
                fill="#fff"
                d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
              ></path>
              <path
                fill="#fff"
                d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
              ></path>
            </svg>
          </div>
          {currentState === "Signup" && (
            <div className="login-popup-inputs mb-4">
              <Label htmlFor="name" />
              <TextInput
                onChange={onChangeHandler}
                name="name"
                value={data.name}
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full border-gray-300 rounded-md"
              />
            </div>
          )}

          <div className="login-popup-inputs mb-4">
            <Label htmlFor="email1" />
            <TextInput
              onChange={onChangeHandler}
              name="email"
              value={data.email}
              id="email1"
              type="email"
              className="w-full border-gray-300 rounded-md"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password1" />
            <TextInput
              onChange={onChangeHandler}
              name="password"
              value={data.password}
              id="password1"
              type="password"
              placeholder="Your password"
              required
              className="w-full border-gray-300 rounded-md"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-500 text-white hover:bg-red-600 rounded-lg py-2"
          >
            {currentState === "Signup" ? "Create Account" : "Login"}
          </Button>
          <div className=" mt-4 flex justify-center items-center gap-2">
            <Checkbox id="checkbox" className="rounded-full border-gray-300" />
            <Label
              htmlFor="checkbox"
              className="text-gray-600 text-sm font-medium"
            >
              I AGREE TO TERMS & CONDITION
            </Label>
          </div>
        </div>
        {currentState === "Login" ? (
          <p className="cursor-pointer text-center mt-4">
            Create New Account?{" "}
            <span
              className="text-red-500 font-semibold"
              onClick={() => {
                setCurrentState("Signup");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="cursor-pointer text-center mt-4">
            Already Have an Account?{" "}
            <span
              className="text-red-500 font-semibold"
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
