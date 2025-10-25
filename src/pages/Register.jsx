import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert("Please enter credentials");

    setLoading(true);
    setTimeout(() => {
      alert("Registered successfully!");
      setLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6">
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-fadeIn">
        Create Your Account
      </h1>
      <p className="text-gray-600 mb-6 max-w-xl text-center animate-fadeIn">
        Sign up to start detecting deepfakes with ease and confidence.
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
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading ? "opacity-70 cursor-not-allowed" : ""
          } bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 rounded-lg hover:scale-105 transition-transform duration-300`}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <p className="text-center text-gray-700 mt-4 text-sm animate-fadeIn">
        Already have an account?{" "}
        <a href="/login" className="text-pink-500 hover:underline">Login here</a>
      </p>
    </section>
  );
}
