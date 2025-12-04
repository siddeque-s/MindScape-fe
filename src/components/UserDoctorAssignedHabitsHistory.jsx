import React from "react";

const UserDoctorAssignedHabitsHistory = () => {
  return (
    <>
      {/* sec2 add hoctor habits */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* map doctporhabits */}
        <div
          className="bg-teal-50 p-6 rounded-2xl shadow-md hover:shadow-xl 
                         hover:scale-[1.04] transition-all border border-teal-200"
        >
          <div className="flex items-center gap-4">
            <div>
              <h3 className="text-xl font-semibold text-teal-900">Walking</h3>
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
        </div>
      </div>
    </>
  );
};

export default UserDoctorAssignedHabitsHistory;
