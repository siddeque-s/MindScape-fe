import React from 'react'
import AdminHeader from '../components/AdminHeader'

const AdminDoctorAssignment = () => {
      

 
  return (
    <>
<div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <AdminHeader/>
      </div>

    <div className="min-h-screen mt-13 bg-emerald-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-emerald-900 mb-8">
        Doctor Requests & Assignment
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-emerald-50">
                <th className="px-4 py-3 font-semibold text-gray-700">User</th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  Category
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  Issue Summary
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">Date</th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  Status
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700">
                  Doctor
                </th>
                <th className="px-4 py-3 font-semibold text-gray-700 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* mappin hereeeeeeeeeeee */}
                <tr
                  
                  className="border-b hover:bg-emerald-50/60 transition"
                >
                  <td className="px-4 py-3">Siddeque</td>
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs">
                     Over Sleeping
                    </span>
                  </td>
                  <td className="px-4 py-3 max-w-xs truncate">High stress and overthinking</td>
                  <td className="px-4 py-3">Sleep</td>
                  <td className="px-4 py-3">
                    <span
                      className= "px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">Dr Siddeque</td>
                  <td className="px-4 py-3 text-center space-x-2">
                    <button className="px-3 py-1 text-xs rounded-lg bg-sky-100 text-sky-700 hover:bg-sky-200">
                      View
                    </button>
                    <button className="px-3 py-1 text-xs rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
                      Assign
                    </button>
                    <button className="px-3 py-1 text-xs rounded-lg bg-red-100 text-red-700 hover:bg-red-200">
                      Reject
                    </button>
                  </td>
                </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminDoctorAssignment