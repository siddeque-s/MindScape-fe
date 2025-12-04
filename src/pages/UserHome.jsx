import React from "react";
import logo from "../assets/logoNew.png";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import { TiTick } from "react-icons/ti";
import { RiPlantFill } from "react-icons/ri";
import UserHeader from "../components/UserHeader";

const UserHome = () => {
  const moodData = [
    { day: "Mon", value: 3 },
    { day: "Tue", value: 4 },
    { day: "Wed", value: 2 },
    { day: "Thu", value: 5 },
    { day: "Fri", value: 4 },
    { day: "Sat", value: 3 },
    { day: "Sun", value: 5 },
  ];

  const stressData = [
    { day: "Mon", level: 2 },
    { day: "Tue", level: 3 },
    { day: "Wed", level: 1 },
    { day: "Thu", level: 4 },
    { day: "Fri", level: 3 },
    { day: "Sat", level: 2 },
    { day: "Sun", level: 4 },
  ];

  const habitData = [
    { name: "Completed", value: 70 },
    { name: "Missed", value: 30 },
  ];

  return (

    <>


    <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
    <UserHeader/>
    </div>
    
    <div className="min-h-screen mt-10 bg-white">
      {/* sec1 top */}
      <section className="px-6 py-16 text-center bg-[#F1F9F1] shadow-inner">
        <div className="flex justify-center mb-5">
          <img
            src={logo}
            alt="logo"
            className="w-20 drop-shadow-md hover:scale-110 transition duration-300"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 flex items-center justify-center gap-3">
          Hello, Siddeque
          <img
            src="https://media.tenor.com/0CpFOKGVaeMAAAAm/hand-waving-hand.webp"
            className="w-10"
            alt=""
          />
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-emerald-700 mt-3 flex items-center justify-center gap-3">
          Welcome back to MindScape{" "}
          <span className="w-10 h-10 bg-emerald-600 text-white flex justify-center items-center rounded-full shadow-md">
            <RiPlantFill className="text-xl" />
          </span>
        </h2>

        <p className="text-gray-700 max-w-2xl mx-auto mt-4 text-lg">
          This is your personal wellness hub — track emotions, build habits,
          write journals, and grow every single day.
        </p>
      </section>

      {/*sec2 quick act */}
      <section className="px-6 py-16 bg-[#FAFAFA]">
        <h3 className="text-3xl font-bold text-emerald-900 text-center mb-10 flex items-center justify-center gap-2">
          Quick Actions
          <FontAwesomeIcon icon={faBolt} className="text-yellow-500" />
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center">
            <img
              src="https://png.pngtree.com/png-clipart/20240901/original/pngtree-smiling-face-with-sunglasses-emoji-png-image_15899828.png"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold text-emerald-800 mt-3">
              Update Mood
            </h3>
            <p className="text-gray-600 text-sm mt-2">Record today’s mood.</p>

            <button className="mt-4 bg-emerald-600 text-white px-4 py-2 rounded-xl shadow hover:bg-emerald-700 flex justify-center items-center gap-2 mx-auto">
              Update <FontAwesomeIcon icon={faArrowDown} rotation={270} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.LVH_EWZ667cQsYERDm4L8QHaHa?pid=Api&P=0&h=180"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold text-indigo-800 mt-3">
              Write Journal
            </h3>
            <p className="text-gray-600 text-sm mt-2">Express your thoughts.</p>

            <button className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 flex justify-center items-center gap-2 mx-auto">
              Write <FontAwesomeIcon icon={faArrowDown} rotation={270} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center">
            <img
              src="https://www.pngall.com/wp-content/uploads/15/Document-Transparent.png"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold text-yellow-700 mt-3">
              Track Habit
            </h3>
            <p className="text-gray-600 text-sm mt-2">Stay consistent daily.</p>

            <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded-xl shadow hover:bg-yellow-700 flex justify-center items-center gap-2 mx-auto">
              Track <FontAwesomeIcon icon={faArrowDown} rotation={270} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 text-center">
            <img
              src="https://e7.pngegg.com/pngimages/415/969/png-clipart-pie-chart-bar-chart-diagram-graph-of-a-function-accounting-presentation-toy-block.png"
              className="w-20 mx-auto"
            />
            <h3 className="text-xl font-semibold text-pink-700 mt-3">
              View Insights
            </h3>
            <p className="text-gray-600 text-sm mt-2">Understand trends.</p>

            <button className="mt-4 bg-pink-600 text-white px-4 py-2 rounded-xl shadow hover:bg-pink-700 flex justify-center items-center gap-2 mx-auto">
              View <FontAwesomeIcon icon={faArrowDown} rotation={270} />
            </button>
          </div>
        </div>
      </section>

      {/* sec3 weekly summary */}
      <section className="px-6 py-16 bg-[#EFFEF3] border-t border-emerald-200">
        <h2 className="text-4xl font-extrabold text-emerald-900 text-center mb-14 tracking-wide">
          Your Weekly Summary 📊
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-emerald-800 mb-5 flex items-center gap-2">
              Mood Trends
              <img
                src="https://www.pngarts.com/files/3/Smile-Emoji-Face-PNG-Image-Background.png"
                className="w-8"
              />
            </h3>

            <LineChart width={300} height={200} data={moodData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0f766e"
                strokeWidth={3}
              />
            </LineChart>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-emerald-800 mb-5 flex items-center gap-2">
              Stress Levels
              <img
                src="https://png.pngtree.com/png-clipart/20240927/original/pngtree-clipart-of-sad-emoji-png-image_16109981.png"
                className="w-8"
              />
            </h3>

            <BarChart width={300} height={200} data={stressData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="level" fill="#22c55e" />
            </BarChart>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl font-bold text-emerald-800 mb-5 flex items-center gap-3">
              Habit Completion
              <span className="w-10 h-10 bg-emerald-600 text-white rounded-full flex justify-center items-center shadow">
                <TiTick className="text-2xl" />
              </span>
            </h3>

            <PieChart width={300} height={200}>
              <Pie
                data={habitData}
                cx={150}
                cy={100}
                innerRadius={45}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                <Cell fill="#15803d" />
                <Cell fill="#dc2626" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </div>
      </section>
    </div>
    </>
    
  );
};

export default UserHome;
