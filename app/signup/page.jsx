"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: null,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAgencyChange = (value) => {
    setFormData((prev) => ({ ...prev, isAgency: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid = Object.values(formData).every((val) => val && val !== "");

  const handleSubmit = () => {
    if (isFormValid) {
      localStorage.setItem("user", JSON.stringify(formData));
      console.log("User Registered:", formData);
      router.push("/profile");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-5">
      <div className="w-full max-w-sm space-y-4 bg-white border border-gray-300 py-6 px-5 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900">
          Create your PopX account
        </h2>

        {["name", "phone", "email", "company"].map((field) => (
          <div key={field}>
            <label className="text-sm text-[#6C25FF] font-medium">
              {field === "email"
                ? "Email address"
                : field.charAt(0).toUpperCase() + field.slice(1)}{" "}
              *
            </label>
            <input
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm text-black"
              name={field}
              placeholder={`Enter ${field}`}
              type="text"
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div>
          <label className="text-sm text-[#6C25FF] font-medium">
            Password *
          </label>
          <div className="relative">
            <input
              required
              className="w-full border rounded-md px-3 py-2 mt-1 text-sm text-black pr-10"
              name="password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
        </div>

        <div>
          <p className="text-sm text-[#6C25FF] font-medium mb-1">
            Are you an Agency? *
          </p>
          <div className="flex space-x-4">
            {["Yes", "No"].map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  required
                  type="radio"
                  name="isAgency"
                  checked={formData.isAgency === option}
                  onChange={() => handleAgencyChange(option)}
                  className="accent-[#6C25FF]"
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-3">
          <button
            onClick={handleSubmit}
            disabled={!isFormValid}
            className={`w-full font-semibold py-2 rounded-md transition active:scale-95 focus:outline-none focus:ring-2 ${
              isFormValid
                ? "bg-[#6C25FF] text-white hover:bg-[#4e1cbf] focus:ring-[#6C25FF]/50"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
