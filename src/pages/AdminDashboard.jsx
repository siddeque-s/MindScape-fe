import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import AdminHeader from "../components/AdminHeader";

const AdminDashboard = () => {


  const userGrowth = [
    { month: "Jan", users: 40 },
    { month: "Feb", users: 65 },
    { month: "Mar", users: 80 },
    { month: "Apr", users: 120 },
    { month: "May", users: 150 },
  ];

  const categoryData = [
    { name: "Stress", count: 45 },
    { name: "Anxiety", count: 30 },
    { name: "Sleep", count: 20 },
    { name: "Depression", count: 15 },
  ];
  const styleAdminDash=()=>{
return "min-h-screen mt-13 bg-gradient-to-b from-emerald-200 via-white to-emerald-100 px-6 py-10"
  }
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <AdminHeader/>
      </div>
       <div className={styleAdminDash()}>
      <h1 className="text-4xl font-bold text-center text-emerald-900 mb-8 flex items-center gap-3">
        Admin Dashboard
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
          alt="dashboard icon"
          className="w-9 h-9"
        />
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <div className="p-5 bg-white rounded-2xl shadow-md border border-emerald-50">
          <p className="text-sm text-gray-500">Total Users</p>
          <p className="text-2xl font-bold text-emerald-800 mt-1">120</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border border-emerald-50">
          <p className="text-sm text-gray-500">Total Doctors</p>
          <p className="text-2xl font-bold text-emerald-800 mt-1">18</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border border-orange-100">
          <p className="text-sm text-gray-500">Pending Requests</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">7</p>
        </div>

        <div className="p-5 bg-white rounded-2xl shadow-md border border-sky-100">
          <p className="text-sm text-gray-500">Active Patients</p>
          <p className="text-2xl font-bold text-sky-700 mt-1">35</p>
        </div>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* growthy of users */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">
            User Growth
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userGrowth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* problems users*/}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">
            Issue Distribution
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={categoryData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#34d399" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminDashboard