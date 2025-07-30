import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import Doctor from "../assets/Doctor.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please enter both email and password.");
      setLoading(false);
      return;
    }

    // Simulate login delay (replace with real API call)
    setTimeout(() => {
      if (email === "test@example.com" && password === "password") {
        alert("Login successful!");
      } else {
        setError("Invalid email or password.");
      }
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    alert("Google login not implemented.");
  };

  const handleFacebookLogin = () => {
    alert("Facebook login not implemented.");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email to reset password.");
      return;
    }
    alert("Password reset link sent to " + email);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    window.location.href = "/signup";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row max-w-4xl w-full overflow-hidden">
        {/* Left: Image */}
        <div className="hidden md:block md:w-1/2">
          <img src={Doctor} alt="Doctor" className="object-cover w-full h-full" />
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Log in</h2>
          <p className="text-sm text-gray-600 mb-6">Welcome back. Log into your account</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div className="text-right">
              <button
                onClick={handleForgotPassword}
                className="text-sm text-green-700 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {error && <div className="text-red-600 text-sm mt-2 text-center">{error}</div>}

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-400">Or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          {/* Social buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100"
              onClick={handleGoogleLogin}
            >
              <FaGoogle className="text-red-500 mr-2" />
              Google
            </button>
            <button
              className="flex-1 flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100"
              onClick={handleFacebookLogin}
            >
              <FaFacebookF className="text-blue-600 mr-2" />
              Facebook
            </button>
          </div>

          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <button onClick={handleSignUp} className="text-green-700 font-medium hover:underline">
              SIGN UP
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
