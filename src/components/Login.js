import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const formikStep1 = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      setStep(2);
    },
  });

  const formikStep2 = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters.")
        .matches(/\d/, "Password must contain a number.")
        .matches(/[@$!%*?&#]/, "Password must contain a special character.")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("data", values);
      navigate("/home");
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex items-center justify-center py-16">
        {step === 1 ? (
          <div className="bg-white p-8 md:py-12 rounded-xl shadow-xl w-auto">
            <img src="images/LogoBlack.svg" alt="Logo" className="mb-8" />
            <div className="flex flex-col md:flex-row space-y-8 md:space-x-32 md:space-y-0 justify-between items-center">
              <div className="w-full">
                <h2 className="text-xl font-medium mb-4">STEP 1</h2>
                <h1 className="text-3xl font-extrabold leading-custom-50 text-left mt-4">
                  Enter your email
                </h1>
                <h1 className="text-3xl font-extrabold leading-custom-50 text-left mb-4">
                  address to continue
                </h1>
                <p className="text-base font-normal text-gray-600">
                  Log in to your account. If you don’t have
                </p>
                <p className="text-base font-normal text-gray-600">
                  one, you will be prompted to create one.
                </p>
              </div>
              <div className="w-full">
                <form
                  onSubmit={formikStep1.handleSubmit}
                  className="flex flex-col justify-end items-end space-y-4"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={formikStep1.handleChange}
                    onBlur={formikStep1.handleBlur}
                    value={formikStep1.values.email}
                    className="w-full md:w-[450px] p-3 border border-gray-300 rounded"
                  />
                  {formikStep1.touched.email && formikStep1.errors.email ? (
                    <div className="text-red-500 text-sm w-full pl-1">
                      {formikStep1.errors.email}
                    </div>
                  ) : null}
                  <button
                    type="submit"
                    className="w-full md:w-[150px] bg-black text-white p-3 text-center font-extrabold rounded"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 md:py-12 rounded-xl shadow-xl mx-8 w-auto">
            <img src="images/LogoBlack.svg" alt="Logo" className="mb-8" />
            <div className="flex flex-col md:flex-row space-y-8 md:space-x-32 md:space-y-0 justify-between items-center">
              <div className="w-full">
                <h2 className="text-xl font-medium mb-4">STEP 2</h2>
                <h1 className="text-3xl font-extrabold leading-custom-50 text-left mt-4">
                  Create an account to
                </h1>
                <h1 className="text-3xl font-extrabold leading-custom-50 text-left mb-4">
                  continue
                </h1>
                <p className="text-base font-normal text-gray-600">
                  You’ll be able to log in to Dingoo with this
                </p>
                <p className="text-base font-normal text-gray-600">
                  email address and password.
                </p>
              </div>
              <div className="w-full">
                <form
                  onSubmit={formikStep2.handleSubmit}
                  className="flex flex-col justify-end items-end space-y-4"
                >
                  <div className="relative w-full md:w-[450px]">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Choose a password"
                      onChange={formikStep2.handleChange}
                      onBlur={formikStep2.handleBlur}
                      value={formikStep2.values.password}
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                    <span
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-4 cursor-pointer"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  {formikStep2.touched.password &&
                  formikStep2.errors.password ? (
                    <div className="text-red-500 text-sm w-full pl-1">
                      {formikStep2.errors.password}
                    </div>
                  ) : null}
                  <div className="w-full flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:space-x-4">
                    <div>
                      <p className="text-xs font-normal text-gray-600 underline">
                        Use a minimum of 6 characters (case sensitive)
                      </p>
                      <p className="text-xs font-normal text-gray-600 underline">
                        with at least one number or special character.
                      </p>
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-[180px] bg-black text-white p-3 text-center font-extrabold rounded"
                    >
                      Agree & Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <p className="text-xs font-normal max-w-sm md:max-w-4xl text-gray-600 mt-8">
              Dingoo will use your data to personalise and improve your Dingoo
              experience and to send you information about Dingoo. You can
              change your communication preferences anytime. We may use your
              data as described in our Privacy Policy, including sharing it with
              The Test of Companies. By clicking "Agree & Continue", you agree
              to our Subscriber Agreement and acknowledge that you have read our
              Privacy Policy and Collection Statement.
            </p>
          </div>
        )}
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
