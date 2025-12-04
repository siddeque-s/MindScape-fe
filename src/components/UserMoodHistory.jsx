import React from 'react'

const UserMoodHistory = () => {
  return (
    <>
<section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-emerald-900 mb-6">
          Your Recent Mood History
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* map history */}
          <div
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 
              transition-all text-center"
          >
            <span className="text-5xl">😄</span>
            <h3 className="font-semibold text-emerald-800 mt-3">Monday</h3>
            <p className="text-gray-600">Happy</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default UserMoodHistory