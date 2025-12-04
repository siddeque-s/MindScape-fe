import React from "react";
import AdminHeader from "../components/AdminHeader";

const AdminDoctorList = () => {
  const styleParent = () => {
    return "min-h-screen mt-13 bg-gradient-to-b from-white via-emerald-50 to-white px-6 py-10";
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <AdminHeader />
      </div>
      <div className={styleParent()}>
        <h1 className="text-3xl font-bold text-center text-emerald-900 mb-8">
          Doctor Management
        </h1>

        {/* Add Doctor Button */}
        <div className="mb-5 flex justify-end">
          <button className="px-5 py-2 bg-emerald-700 text-white rounded-xl shadow-md hover:bg-emerald-800 text-sm">
            + Add New Doctor
          </button>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b bg-emerald-50">
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Name
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Email
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Specialization
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Patients
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700">
                    Status
                  </th>
                  <th className="px-4 py-3 font-semibold text-gray-700 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                
                  className="border-b hover:bg-emerald-50/60 transition"
                >
                  <td className="px-4 py-3">Dr. Sidd</td>
                  <td className="px-4 py-3">Sidd123@</td>
                  <td className="px-4 py-3">Sleeping Specialist</td>
                  <td className="px-4 py-3">13</td>
                  <td className="px-4 py-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold 
                        
                           bg-emerald-100 text-emerald-800"
                    >
                      Active
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button className="px-3 py-1 text-xs rounded-lg bg-sky-100 text-sky-700 hover:bg-sky-200">
                      View
                    </button>
                    
                    <button className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                      Deactivate
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

export default AdminDoctorList;
