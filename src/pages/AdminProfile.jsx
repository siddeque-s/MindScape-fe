import React from 'react'
import AdminHeader from '../components/AdminHeader'

const AdminProfile = () => {
    const sec1Style = () => {
    return "min-h-screen bg-gradient-to-b from-emerald-100 via-white to-emerald-100 mt-13 px-6 py-10";
  };
  return (
    <>
    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <AdminHeader/>
      </div>


     <div className={sec1Style()}>
      <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10 mt-13">
        Your Profile{" "}
        <img
          className="inline w-10"
          src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          alt="profile"
        />
      </h1>

      <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-emerald-100 text-center">
        {/* map all the followinf det: name,gmail,age,joineddate,doct ass */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
          alt="User"
          className="w-32 h-32 mx-auto rounded-full shadow-xl border-4 border-emerald-200 hover:scale-105 transition"
        />

        <h2 className="text-2xl font-bold text-emerald-900 mt-3">
          Siddeque Sajeev
        </h2>

        <p className="text-gray-700">siddeque@e.com</p>

        <p className="text-sm text-gray-500 mt-1">Age: 22</p>

        <p className="text-sm text-gray-500">Joined: 2025-02-01</p>

        
      </section>

     

      {/* sec3 sett */}
      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
          Settings ⚙️
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer hover:shadow-xl transition hover:-translate-y-1">
            <img
              className="w-12 mx-auto mb-3"
              src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png"
              alt=""
            />
            <h3 className="font-semibold text-emerald-800">Edit Profile</h3>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer hover:shadow-xl transition hover:-translate-y-1">
            <img
              className="w-12 mx-auto mb-3"
              src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png"
              alt=""
            />
            <h3 className="font-semibold text-emerald-800">Change Password</h3>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-md text-center cursor-pointer hover:shadow-xl transition hover:-translate-y-1">
            <img
              className="w-12 mx-auto mb-3"
              src="https://cdn-icons-png.flaticon.com/512/484/484662.png"
              alt=""
            />
            <h3 className="font-semibold text-red-600">Delete Account</h3>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AdminProfile