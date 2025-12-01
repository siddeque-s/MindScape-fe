import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Insights = () => {
  const weeklyMoodData = [
    { label: "Mon", mood: 3 },
    { label: "Tue", mood: 4 },
    { label: "Wed", mood: 2 },
    { label: "Thu", mood: 5 },
    { label: "Fri", mood: 4 },
    { label: "Sat", mood: 3 },
    { label: "Sun", mood: 5 },
  ];

  const weeklyStressData = [
    { label: "Mon", level: 2 },
    { label: "Tue", level: 3 },
    { label: "Wed", level: 1 },
    { label: "Thu", level: 4 },
    { label: "Fri", level: 3 },
    { label: "Sat", level: 2 },
    { label: "Sun", level: 4 },
  ];

  const weeklyHabitData = [
    { name: "Completed", value: 70 },
    { name: "Missed", value: 30 },
  ];

  const monthlyMoodData = [
    { label: "W1", mood: 3 },
    { label: "W2", mood: 4 },
    { label: "W3", mood: 5 },
    { label: "W4", mood: 4 },
  ];

  const monthlyStressData = [
    { label: "W1", level: 2 },
    { label: "W2", level: 3 },
    { label: "W3", level: 2 },
    { label: "W4", level: 4 },
  ];

  const monthlyHabitData = [
    { name: "Completed", value: 260 },
    { name: "Missed", value: 40 },
  ];

  const allTimeMoodData = [
    { label: "2022", mood: 3 },
    { label: "2023", mood: 4 },
    { label: "2024", mood: 5 },
    { label: "2025", mood: 4 },
  ];

  const allTimeStressData = [
    { label: "2022", level: 3 },
    { label: "2023", level: 4 },
    { label: "2024", level: 2 },
    { label: "2025", level: 4 },
  ];

  const allTimeHabitData = [
    { name: "Completed", value: 7800 },
    { name: "Missed", value: 1200 },
  ];

  const [mode, setMode] = useState("weekly");

  const moodData =
    mode == "weekly"
      ? weeklyMoodData
      : mode == "monthly"
      ? monthlyMoodData
      : allTimeMoodData;

  const stressData =
    mode == "weekly"
      ? weeklyStressData
      : mode == "monthly"
      ? monthlyStressData
      : allTimeStressData;

  const pieData =
    mode == "weekly"
      ? weeklyHabitData
      : mode == "monthly"
      ? monthlyHabitData
      : allTimeHabitData;

  const colors = ["#059669", "#ef4444"];
  const sec1InsightsStyle = () => {
    return "min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 px-6 py-10";
  };

  return (
    <>
      <div className={sec1InsightsStyle()}>
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10 flex items-center justify-center gap-3">
          Insights & Analytics
          <img
            src="https://cdn3.emoji.gg/emojis/4639_up_graph.png"
            alt=""
            className="w-10 inline-block object-contain drop-shadow"
          />
        </h1>

        {/* MODE BUTTONS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["weekly", "monthly", "all"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-6 py-3 rounded-xl font-semibold capitalize flex items-center gap-2 ${
                mode === m
                  ? "bg-emerald-700 text-white shadow-md"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {m === "weekly" && (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/71/71422.png"
                  className="w-6 object-contain"
                />
              )}
              {m === "monthly" && (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/747/747310.png"
                  className="w-6 object-contain"
                />
              )}
              {m === "all" && (
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
                  className="w-6 object-contain"
                />
              )}
              {m === "all" ? "All Time" : m}
            </button>
          ))}
        </div>

        {/* CHARTS */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
          {/* Mood Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              Mood Trends ({mode})
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                className="w-6 object-contain"
              />
            </h3>

            <LineChart width={300} height={200} data={moodData}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line dataKey="mood" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </div>

          {/* Stress Chart */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              Stress Levels ({mode})
              <img
                src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                className="w-7 object-contain"
              />
            </h3>

            <BarChart width={300} height={200} data={stressData}>
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="level" fill="#34d399" />
            </BarChart>
          </div>

          {/* Habit Pie */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold text-emerald-800 mb-4 flex items-center gap-2">
              Habit Completion
              <img
                src="https://www.pngplay.com/wp-content/uploads/2/Tick-PNG-Free-File-Download.png"
                className="w-7 object-contain"
              />
            </h3>

            <PieChart width={300} height={200}>
              <Pie
                data={pieData}
                cx={150}
                cy={100}
                innerRadius={40}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </section>

        {/* Smart AI Insights */}
        <section className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
            Smart Insights
            <img
              src="https://www.pngall.com/wp-content/uploads/15/Artificial-Intelligence-AI-PNG-Pic.png"
              className="w-8 object-contain drop-shadow"
            />
          </h2>

          <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
            <li>Your mood shows improvement during weekends.</li>
            <li>Mid-week stress peaks — consider relaxation techniques.</li>
            <li>Your habit completion rate is increasing. Good job!</li>
            <li>All-time consistency trend is strong — keep going!</li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Insights;
