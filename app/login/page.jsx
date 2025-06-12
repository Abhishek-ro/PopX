"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email, password }));
      router.push("/profile");
    }
  };

  const isDisabled = !email || !password;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5F8FF] to-[#ECE6FF] px-4 py-5">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#6C25FF]">Sign in to PopX</h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your account efficiently and securely.
          </p>
        </div>

      
        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">
            Email Address
          </label>
          <input
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#6C25FF]/50"
            placeholder="Enter email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6C25FF] mb-1">
            Password
          </label>
          <div className="relative">
            <input
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-black pr-10 focus:outline-none focus:ring-2 focus:ring-[#6C25FF]/50"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

   
        <button
          onClick={handleLogin}
          disabled={isDisabled}
          className={`w-full py-2 rounded-md font-semibold transition duration-300 shadow-md focus:outline-none focus:ring-2 ${
            isDisabled
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-[#6C25FF] text-white hover:bg-[#4e1cbf] active:scale-95 focus:ring-[#6C25FF]/50"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
