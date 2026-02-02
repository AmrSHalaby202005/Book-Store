import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import Google from "../components/ui/Google";
import Facebook from "../components/ui/Facebook";
import * as Yup from "yup";
import axios from "axios";
import { useAuthStore } from "../store";

const Login = () => {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  async function handleLogin(values) {
    try {
      const res = await axios.post(
        "https://bookstore.eraasoft.pro/api/login",
        values,
      );

      console.log("Login response:", res.data);

      const useAuthStore = res?.data?.data?.token;
      const token = res?.data?.data?.token;

      if (!useAuthStore) {
        console.error("User data not found!");
        return;
      }

      login(useAuthStore);

      if (token) localStorage.setItem("token", token);

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  }

  const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <h3 className="text-[#D9176C] text-3xl font-medium text-center mt-10">
        Wellcome Back!
      </h3>
      <div className="flex flex-col items-center justify-center pt-5 pb-30">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => handleLogin(values)}
          validationSchema={loginSchema}
        >
          <Form className="flex flex-col gap-3 mt-10 w-xl mb-96">
            <label className="font-medium" htmlFor="email">
              Email
            </label>
            <Field
              className="bg-white border border-gray-200 p-4 rounded-lg"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
            <label className="font-medium" htmlFor="password">
              Password
            </label>
            <Field
              className="bg-white border border-gray-200 p-4 rounded-lg"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
            <div className="password-actions flex items-center justify-between">
              <div className="remember flex items-center gap-2">
                <Field type="checkbox" name="remember" />
                <label htmlFor="">Remember me</label>
              </div>
              <div className="forget-password text-[#D9176C]">
                <Link to={"/forgot-password"} href="">
                  Forget password?
                </Link>
              </div>
            </div>
            <button
              className="px-4 py-2.75 cursor-pointer bg-[#D9176C] text-white rounded-lg"
              type="submit"
            >
              Log in
            </button>
            <p className="text-center mt-5">
              Don’t have an account?{" "}
              <Link className="text-[#D9176C]" to="/register">
                Sign Up
              </Link>
            </p>
            <span className="text-center text-gray-500">or</span>
            <Google />
            <Facebook />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
