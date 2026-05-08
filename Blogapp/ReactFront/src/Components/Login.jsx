import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
} from "../styles/common";

import { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { login, currentUser, loading, isAuthenticated, error } = useAuth(
    (state) => state,
  );

  //CLEAN INPUT BEFORE SENDING
  const onUserLogin = (userCredObj) => {
    login({
      email: userCredObj.email.trim().toLowerCase(),
      password: userCredObj.password.trim(),
    });
  };

  const hasToasted = useRef(false);

  useEffect(() => {
    if (isAuthenticated && !hasToasted.current) {
      hasToasted.current = true;

      if (currentUser?.role === "USER") {
        toast.success("Login successful, redirecting to user profile");
        navigate("/UserProfile");
      } else if (currentUser?.role === "AUTHOR") {
        toast.success("Login successful, redirecting to author profile");
        navigate("/Author");
      } else if (currentUser?.role === "ADMIN") {
        toast.success("Login successful, redirecting to admin profile");
        navigate("/AdminProfile");
      }
    }
  }, [currentUser, isAuthenticated, navigate]);

  if (loading) {
    return <p className="loadingclass">Loading...</p>;
  }

  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-700 to-cyan-500 px-4">

    <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Welcome Back
        </h2>

        <p className="text-gray-500 mt-2">
          Sign in to continue ✨
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <p className="bg-red-100 text-red-500 p-3 rounded-xl mb-5 text-center">
          {typeof error === "string"
            ? error
            : error?.message || "Login failed"}
        </p>
      )}

      <form onSubmit={handleSubmit(onUserLogin)}>

        {/* EMAIL */}
        <div className="mb-4">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", {
              required: "Email is required",
              validate: (value) =>
                value.trim().length > 0 || "Email cannot be empty",
            })}
          />

          {errors.email && (
            <p className="text-red-500 mt-2">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* PASSWORD */}
        <div className="mb-3">

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", {
              required: "Password is required",
              validate: (value) =>
                value.trim().length > 0 || "Password cannot be empty",
            })}
          />

          {errors.password && (
            <p className="text-red-500 mt-2">
              {errors.password.message}
            </p>
          )}

        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right mb-6">
          <a
            href="/forgot-password"
            className="text-blue-600 text-sm hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-bold text-lg hover:scale-105 transition duration-300 shadow-lg"
        >
          Sign In
        </button>

      </form>

      {/* FOOTER */}
      <p className="text-center text-gray-500 mt-6">
        Don't have an account?{" "}
        <NavLink
          to="/register"
          className="text-blue-600 font-semibold hover:underline"
        >
          Create one
        </NavLink>
      </p>

    </div>
  </div>
);
}

export default Login;