"use client";

import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-sm rounded-xl shadow-lg bg-white border border-gray-200 overflow-hidden transition-all">
        <h2 className="text-xl font-semibold text-gray-800 px-6 pt-6 pb-3 border-b border-gray-100">
          Account Settings
        </h2>

        <div className="px-6 py-6 bg-gray-50 space-y-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src="ppic.png"
                alt="User"
                className="w-16 h-16 rounded-full object-cover border-2 border-white shadow"
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/64")
                }
              />
              <div className="absolute -bottom-1 -right-1 bg-[#6C25FF] hover:bg-[#5620d3] text-white text-xs p-1 rounded-full shadow-md cursor-pointer transition">
                📷
              </div>
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                {user?.name || "Marry Doe"}
              </p>
              <p className="text-sm text-gray-500">
                {user?.email || "marry@email.com"}
              </p>
            </div>
          </div>

          <p className="text-sm text-gray-600">
            Welcome to PopX! Your profile is set up. You can update details
            later in settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
