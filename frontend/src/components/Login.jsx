import React, { useState } from "react";
import { Button, Label, TextInput, Checkbox } from "flowbite-react";
import { fe_assets } from "@/assets/frontend_assets/assets";
import "./Login.css";

const Login = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Signup");

  return (
    <div className="login-popup">
      
      <form className="py-8 px-8 login-popup-container flex max-w-md flex-col gap-4">
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
              className="cursor-pointer  w-6 h-6"
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
            <div className="login-popup-inputs mb-4 block">
              <Label htmlFor="name" />
              <TextInput
                id="name"
                type="text"
                placeholder="Your Name"
                required
              />
            </div>
          )}

          <div className="login-popup-inputs mb-4 block">
            <Label htmlFor="email1" />
            <TextInput
              id="email1"
              type="email"
              className=""
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-4 block">
            <Label htmlFor="password1" />
            <TextInput
              id="password1"
              type="password"
              placeholder="Your password"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-red-500  text-white hover:bg-red-600 rounded-lg"
          >
            {currentState === "Signup" ? "Create Account" : "Login"}
          </Button>
          <div className="mt-4 login-popup-condition flex items-center gap-2">
            <Checkbox id="checkbox" className="rounded-full " />
            <Label
              htmlFor="checkbox"
              className="text-[#808080]  font-curs text-xs"
            >
              I FULLY AGREE TO TERMS & CONDITION
            </Label>
          </div>
        </div>
        {currentState === "Login" ? (
          <p className="cursor-pointer text-center  ">
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
          <p className="cursor-pointer text-center ">
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
