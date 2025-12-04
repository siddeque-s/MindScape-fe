import React from 'react'

const UserDoctorChat = () => {
  return (
    <>
         <section className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6">Chat 💬</h2>
{/* map all chats */}
          <div className="h-80 bg-gray-50 border rounded-xl p-4 overflow-y-auto">
            <p className="text-gray-500">Chat will appear here...</p>
          </div>

          <div className="mt-4 flex gap-3">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 border px-4 py-3 rounded-xl"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
              Send
            </button>
          </div>
        </section>
    </>
  )
}

export default UserDoctorChat