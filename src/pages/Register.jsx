import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Google from "../components/ui/Google";
import Facebook from "../components/ui/Facebook";
import * as Yup from "yup";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (values) => {
    if (values.password !== values.password_confirmation) {
      alert("no matching");
    } else {
      try {
        const res = await axios.post(
          "https://bookstore.eraasoft.pro/api/register",
          values,
        );
        navigate("/login");
        console.log(res);
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  const RegisterSchema = Yup.object({
    first_name: Yup.string().required(),
    last_name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    password_confirmation: Yup.string().required(),
  });

  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative w-full mb-20 max-h-70 overflow-hidden">
        <img className="w-full h-full object-cover" src="/Home.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center pt-5 pb-30">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
          }}
          onSubmit={(values) => {
            handleRegister(values);
          }}
          validationSchema={RegisterSchema}
        >
          <Form className="flex flex-col gap-3 mt-10 w-xl mb-96">
            <div className="flex gap-2">
              <div className="first-Name flex flex-col gap-2 w-full">
                <label className="font-medium" htmlFor="">
                  FirstName
                </label>
                <Field
                  className="bg-white border border-gray-200 p-4 rounded-lg"
                  name="first_name"
                  type="text"
                  placeholder="John"
                />
                <ErrorMessage
                  name="first_name"
                  component="p"
                  className="text-red-500"
                />
              </div>
              <div className="last-Name flex flex-col gap-2 w-full">
                <label className="font-medium" htmlFor="">
                  LastName
                </label>
                <Field
                  className="bg-white border border-gray-200 p-4 rounded-lg"
                  name="last_name"
                  type="text"
                  placeholder="Smith"
                />
                <ErrorMessage
                  name="last_name"
                  component="p"
                  className="text-red-500"
                />
              </div>
            </div>
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
            <label className="font-medium" htmlFor="confirm-password">
              Confirm Password
            </label>
            <Field
              className="bg-white border border-gray-200 p-4 rounded-lg"
              name="password_confirmation"
              type="password"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password_confirmation"
              component="p"
              className="text-red-500"
            />
            <div className="Agree flex items-center gap-2">
              <Field type="checkbox" name="remember" />
              <label htmlFor="">Agree with Terms & Conditions</label>
            </div>
            <button
              className="px-4 py-2.75 cursor-pointer bg-[#D9176C] text-white rounded-lg"
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link className="text-[#D9176C]" to="/Login">
                Login
              </Link>
            </p>
            <span className="text-center text-gray-400">or</span>
            <Google />
            <Facebook />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Register;
