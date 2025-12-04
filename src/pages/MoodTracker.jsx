import React from "react";
import UserMoodHistory from "../components/UserMoodHistory";
import UserHeader from "../components/UserHeader";

const MoodTracker = () => {
  const moods = [
    { emoji: "😄", label: "Happy", color: "bg-yellow-100" },
    { emoji: "😊", label: "Calm", color: "bg-green-100" },
    { emoji: "😐", label: "Neutral", color: "bg-gray-100" },
    { emoji: "😟", label: "Stressed", color: "bg-orange-100" },
    { emoji: "😢", label: "Sad", color: "bg-blue-100" },
  ];

  const sec1MoodTrackerStyle = () => {
    return "min-h-screen bg-gradient-to-b mt-10 from-emerald-100 via-white to-emerald-200 px-6 py-10";
  };

  return (

    <>
     <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <UserHeader />
      </div>
    <div className={sec1MoodTrackerStyle()}>
      <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10">
        Mood Tracker <span className="text-3xl">🧠</span>
      </h1>

      {/* sec1 moodSelection */}

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 mb-16">
        <h2 className="text-2xl font-semibold text-emerald-800 mb-6 text-center">
          How are you feeling today?
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          {moods.map((m, i) => (
            <button
              key={i}
              className={`${m.color} px-6 py-4 rounded-2xl shadow-md hover:shadow-xl 
                hover:scale-105 transition-all flex flex-col items-center`}
            >
              <span className="text-4xl">{m.emoji}</span>
              <p className="mt-1 font-medium text-emerald-800">{m.label}</p>
            </button>
          ))}
        </div>

        {/* mood intensity */}
        <div className="mt-10">
          <label className="text-lg font-medium text-emerald-800">
            Mood Intensity: <span className="text-emerald-600">1 - 10</span>
          </label>
          <input
            type="range"
            min="1"
            max="10"
            className="w-full mt-3 accent-emerald-600"
          />
        </div>

        <div className="mt-8">
          <label className="text-lg font-medium text-emerald-800">
            Notes / Thoughts
          </label>
          <textarea
            rows="4"
            placeholder="Write how you feel..."
            className="w-full p-4 mt-3 border rounded-xl focus:ring-2 
            focus:ring-emerald-500 outline-none"
          ></textarea>
        </div>

        <button
          className="mt-8 bg-emerald-700 text-white px-6 py-3 rounded-xl 
        font-semibold shadow-md hover:bg-emerald-800 transition"
        >
          Save Mood
        </button>
      </section>

      {/* sect 2 mood History */}
      <UserMoodHistory/>
    </div>
    </>
    
  );
};

export default MoodTracker;
