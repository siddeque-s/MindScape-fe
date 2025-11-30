import React from 'react'
import logo from "../src/assets/logoNew.png"

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/1127444.png')",
      }}
    >
      <div className="bg-white/85 backdrop-blur-md shadow-xl rounded-xl px-8 py-10 w-full max-w-md">
        <div className="flex justify-center mb-3">
          <img
            src={logo}
            alt="MindScape Logo"
            className="w-60 drop-shadow-md"
          />
        </div>

        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-400 outline-none"
          />
        </div>

        <button className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold shadow-md transition">
          Login
        </button>

        <div className="text-center text-gray-600 text-sm mt-4">OR</div>

        <div className="mt-3">
          {/* google set */}
        </div>

        <p className="text-center text-gray-700 mt-4">
          New User?{" "}
          <span className="text-green-700 font-semibold cursor-pointer hover:underline">
            Register Here
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login