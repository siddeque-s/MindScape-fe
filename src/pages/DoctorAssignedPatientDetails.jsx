import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import UserJournalHistory from "../components/UserJournalHistory";
import UserHabitsHistory from "../components/UserHabitsHistory";
import UserDoctorChat from "../components/UserDoctorChat";
import DoctorHeader from "../components/DoctorHeader";

const DoctorAssignedPatientDetails = () => {
  const moodData = [
    { day: "Mon", mood: 3 },
    { day: "Tue", mood: 4 },
    { day: "Wed", mood: 2 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 4 },
  ];

  const stressData = [
    { day: "Mon", level: 2 },
    { day: "Tue", level: 3 },
    { day: "Wed", level: 4 },
    { day: "Thu", level: 3 },
    { day: "Fri", level: 4 },
  ];

  const tabs = ["overview", "journals", "notes", "habits", "chat"];
  const [activeTab, setActiveTab] = useState("overview");
  const styleDoctorAssignedPatientsdet = () => {
    return "min-h-screen mt-13 px-6 py-10 bg-gradient-to-b from-emerald-50 via-white to-emerald-100";
  };
  return (
    <>

     <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <DoctorHeader/>
      </div>
      <div className={styleDoctorAssignedPatientsdet()}>
        <h1 className="text-4xl font-bold text-emerald-900 mb-6">
          Patient Details
        </h1>

        <div className="flex gap-4 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              className={`px-5 py-2 rounded-xl font-semibold capitalize ${
                activeTab === t
                  ? "bg-emerald-700 text-white"
                  : "bg-emerald-100 text-emerald-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* graphsss */}
        {activeTab === "overview" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-bold text-emerald-900 mb-4">Mood Trend</h3>
                <LineChart width={300} height={200} data={moodData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="mood" stroke="#10b981" strokeWidth={3} />
                </LineChart>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-bold text-emerald-900 mb-4">
                  Stress Levels
                </h3>
                <BarChart width={300} height={200} data={stressData}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="level" fill="#34d399" />
                </BarChart>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">
                Set Follow-up Date
              </h2>

              <input type="date" className="px-4 py-3 border rounded-xl" />

              <p className="mt-4 text-emerald-700 font-medium">
                Next Check-In: 12-10-2025
              </p>
            </div>
          </>
        )}

        {activeTab === "journals" && <UserJournalHistory />}

        {/* doc notes */}
        {activeTab === "notes" && (
          <div>
            <h2 className="text-2xl font-bold text-emerald-900 mb-4">
              Doctor Notes
            </h2>

            <textarea
              className="w-full p-4 border rounded-xl mb-4"
              rows="4"
              placeholder="Write a note for the patient..."
            ></textarea>

            <button className="bg-emerald-700 text-white px-6 py-3 rounded-xl">
              Add Note
            </button>

            <div className="mt-8">
              <div className="bg-emerald-50 p-4 rounded-xl border mb-3">
                Continue mediatating
              </div>
            </div>
          </div>
        )}

        {/* habits */}
        {activeTab === "habits" && <UserHabitsHistory />}

        {/* chatting */}
        {activeTab === "chat" && <UserDoctorChat />}
      </div>
    </>
  );
};

export default DoctorAssignedPatientDetails;
