import {
  divider,
  errorClass,
  formCard,
  formGroup,
  formTitle,
  inputClass,
  labelClass,
  pageBackground,
  submitBtn,
  mutedText,
} from "../styles/common";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function Register() {
  let navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  //When user registration submitted
  const onUserRegister = async (userObj) => {
    try {
      //start loading
      setLoading(true)
      console.log(userObj)
      //make http request to create user
      let res = await axios.post(
        `https://atp-24eg106d12.onrender.com/common-api/users`,
        userObj
      );
      
      if(res.status==201)
        //navigate to  login
      navigate("/Login")
      }
    catch (err) {
      console.log("err in registration", err);
      setApiError(err.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
    
  };
  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (apiError) {
    return <p className="text-red-500 text-center text-3xl">{errors.message}</p>;
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 px-4">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Create Account
        </h2>

        <p className="text-gray-500 mt-2">
          Join BlogSphere today ✨
        </p>
      </div>

      {/* ERROR */}
      {apiError && (
        <p className="bg-red-100 text-red-500 p-3 rounded-xl mb-5 text-center">
          {apiError}
        </p>
      )}

      <form onSubmit={handleSubmit(onUserRegister)}>

        {/* ROLE */}
        <div className="mb-5">
          <p className="font-semibold text-gray-700 mb-3">
            Register as
          </p>

          <div className="flex gap-4">

            <label className="flex items-center gap-2 border border-gray-300 px-4 py-3 rounded-xl cursor-pointer hover:border-blue-500 transition w-full justify-center">
              <input
                type="radio"
                value="USER"
                {...register("role", {
                  required: "Please select a role",
                })}
                className="accent-blue-600"
              />
              <span>User</span>
            </label>

            <label className="flex items-center gap-2 border border-gray-300 px-4 py-3 rounded-xl cursor-pointer hover:border-blue-500 transition w-full justify-center">
              <input
                type="radio"
                value="AUTHOR"
                {...register("role", {
                  required: "Please select a role",
                })}
                className="accent-blue-600"
              />
              <span>Author</span>
            </label>

          </div>

          {errors.role && (
            <p className="text-red-500 mt-2">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* FIRST NAME */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstName", {
              required: "First name is required",
            })}
          />

          {errors.firstName && (
            <p className="text-red-500 mt-2">
              {errors.firstName.message}
            </p>
          )}
        </div>

        {/* LAST NAME */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastName")}
          />
        </div>

        {/* EMAIL */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (
            <p className="text-red-500 mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
            })}
          />

          {errors.password && (
            <p className="text-red-500 mt-2">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* PROFILE IMAGE */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Profile Image URL"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("profileImageUrl")}
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
        >
          Create Account
        </button>

      </form>

      {/* FOOTER */}
      <p className="text-center text-gray-500 mt-6">
        Already have an account?{" "}
        <NavLink
          to="/Login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Sign In
        </NavLink>
      </p>

    </div>
  </div>
);
}

export default Register;