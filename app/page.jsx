"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { LogIn, UserPlus } from "lucide-react"; 

const Landing = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F4FF] to-[#ECE6FF] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200 transition-all duration-300">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-[#6C25FF]">Welcome to PopX</h1>
          <p className="text-sm text-gray-600">
            Manage your business like a pro. Join us and unlock your growth
            potential.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => router.push("/signup")}
            className="w-full flex items-center justify-center gap-2 bg-[#6C25FF] text-white font-semibold py-2 rounded-md hover:bg-[#5620d8] transition-all duration-200 active:scale-95 shadow"
          >
            <UserPlus size={18} />
            Create Account
          </button>

          <button
            onClick={() => router.push("/login")}
            className="w-full flex items-center justify-center gap-2 bg-[#ECE6FF] text-[#6C25FF] font-semibold py-2 rounded-md hover:bg-[#dbd1fa] transition-all duration-200 active:scale-95 shadow"
          >
            <LogIn size={18} />
            Already Registered? Login
          </button>
        </div>

        <div className="text-center pt-4 border-t text-xs text-gray-400">
          © 2025 PopX Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Landing;
