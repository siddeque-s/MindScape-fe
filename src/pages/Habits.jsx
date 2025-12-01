import React, { useState } from "react";

const Habits = () => {
  const sec1HabitsStyle = () => {
    return "min-h-screen px-6 py-10 bg-gradient-to-b from-white via-emerald-50 to-emerald-100";
  };
  return (
    <>
      <div className={sec1HabitsStyle()}>
        <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10">
          Habit Builder{" "}
          <img
            src="https://cdn-icons-png.flaticon.com/512/5998/5998948.png"
            className="w-12 h-12 inline-block"
          />
        </h1>

        {/* sec1 add habit */}
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg mb-14">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-5">
            Add a New Habit
          </h2>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter a habit…"
              className="flex-1 px-4 py-3 border rounded-xl outline-none 
                       focus:ring-2 focus:ring-emerald-500"
            />

            <button
              className="bg-emerald-700 text-white px-6 py-3 rounded-xl 
                       hover:bg-emerald-800 shadow-md active:scale-95 transition"
            >
              Add Habit
            </button>
          </div>
        </section>

        {/* sec2 add hoctor habits */}
        <section className="max-w-5xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-teal-900 mb-6 flex items-center gap-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/774/611/original/realistic-medical-stethoscope-on-transparent-background-free-png.png"
              className="w-12 h-12"
            />
            Habits Assigned by Your Doctor
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* map doctporhabits */}
            <div
              className="bg-teal-50 p-6 rounded-2xl shadow-md hover:shadow-xl 
                         hover:scale-[1.04] transition-all border border-teal-200"
            >
              <div className="flex items-center gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-teal-900">
                    Walking
                  </h3>
                  <p className="text-xs bg-teal-200 text-teal-800 px-2 py-1 rounded-full inline-block mt-1">
                    Assigned by Doctor
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>10%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-teal-600 h-3 rounded-full transition-all"
                    style={{ width: `10%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  className="px-4 py-2 bg-teal-300 text-teal-900 rounded-lg 
                             hover:bg-teal-400 transition"
                >
                  + Progress
                </button>

                <button
                  disabled
                  className="px-4 py-2 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                >
                  Doctor Only
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* sec3 user habits */}
        <section className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-emerald-900 mb-6">
            Your Habits
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* map user habits */}
            <div
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl 
                         hover:scale-[1.05] transition-all"
            >
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-semibold text-emerald-800">
                  Drinking Water
                </h3>
              </div>

              <div className="mt-5">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Progress</span>
                  <span>10%</span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-emerald-600 h-3 rounded-full transition-all"
                    style={{ width: `10%` }}
                  ></div>
                </div>
              </div>

              <div className="mt-6 flex justify-between">
                <button
                  className="px-4 py-2 bg-green-200 text-emerald-800 rounded-lg 
                             hover:bg-green-300 transition"
                >
                  + Progress
                </button>

                <button
                  className="px-4 py-2 bg-red-200 text-red-700 rounded-lg 
                             hover:bg-red-300 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Habits;
