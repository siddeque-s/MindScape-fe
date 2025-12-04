import React from 'react'

const UserHabitsHistory = () => {
  return (
    <>
    

        {/* sec3 user habits */}
        

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

             
            </div>
          </div>
     
    
    </>
  )
}

export default UserHabitsHistory