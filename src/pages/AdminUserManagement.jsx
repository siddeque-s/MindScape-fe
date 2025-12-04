import React from "react";
import { FaEye, FaPowerOff } from "react-icons/fa";
import AdminHeader from "../components/AdminHeader";

const AdminUserManagement = () => {

  const parentStyle = () => {
    return "min-h-screen mt-13 bg-gradient-to-b from-emerald-100 via-white to-emerald-200 px-6 py-10";
  };

  return (

    <>
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <AdminHeader/>
      </div>
    <div className={parentStyle()}>
      <h1 className="text-3xl font-extrabold text-emerald-900 mb-8 text-center">
        User Management 👥
      </h1>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="🔍 Search users by name or email..."
            className="w-full md:w-80 px-4 py-2 border rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <p className="text-sm text-gray-500">
            Total Users: <span className="font-semibold">10</span>
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-emerald-100 shadow-md">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="bg-emerald-100/70 text-emerald-900 border-b">
                <th className="px-6 py-4 font-semibold text-left">Name</th>
                <th className="px-6 py-4 font-semibold text-left">Email</th>
                <th className="px-6 py-4 font-semibold text-left">Joined</th>
                <th className="px-6 py-4 font-semibold text-left">Status</th>
                <th className="px-6 py-4 font-semibold text-left">Stress Level</th> {/* NEW */}
                <th className="px-6 py-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              <tr className="transition border-b bg-emerald-50/40">
                <td className="px-6 py-4 font-medium text-gray-800">
                  Siddeque
                </td>

                <td className="px-6 py-4 text-gray-600">siddeq@123</td>

                <td className="px-6 py-4 text-gray-600">2025-10-12</td>

                <td className="px-6 py-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold 
                          bg-emerald-200 text-emerald-800"
                  >
                    Active
                  </span>
                </td>

               
                <td className="px-6 py-4 text-gray-700 font-semibold">
                  4 / 10
                </td>

                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="px-3 py-2 rounded-lg bg-sky-100 text-sky-700 hover:bg-sky-200 shadow flex items-center gap-1 text-xs transition">
                    <FaEye /> View
                  </button>

                  <button
                    className="px-3 py-2 rounded-lg shadow flex items-center gap-1 text-xs transition                    
                           bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    <FaPowerOff />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AdminUserManagement;
