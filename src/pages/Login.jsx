import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter credentials");

    // Demo: Replace with backend API
    alert("Login successful!");
    if (rememberMe) localStorage.setItem("isLoggedIn", "true");
    else sessionStorage.setItem("isLoggedIn", "true");
    navigate("/upload");
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
        Welcome to <span className="text-pink-500">DeepVerify</span>
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl text-center animate-fadeIn">
        Securely analyze images and videos to detect deepfakes quickly and reliably.
      </p>
      <form
        className="bg-gradient-to-br from-purple-200 via-pink-200 to-green-200 p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-4 animate-fadeIn hover:scale-105 transition-transform duration-300"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
          required
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            id="remember"
            className="accent-pink-500"
          />
          <label htmlFor="remember" className="text-gray-700">Remember me</label>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Login
        </button>
      </form>

      <p className="text-center text-gray-700 mt-4 text-sm animate-fadeIn">
        Don’t have an account?{" "}
        <a href="/register" className="text-pink-500 hover:underline">Register here</a>
      </p>
    </section>
  );
}
