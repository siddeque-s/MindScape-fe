import React from "react";
import DoctorHeader from "../components/DoctorHeader";
import { Link } from "react-router-dom";

const DoctorAssignedPatients = () => {
  const sec1ParentStyle = () => {
    return "min-h-screen px-6 py-10 bg-gradient-to-b mt-13 from-emerald-100 via-white to-emerald-100";
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <DoctorHeader />
      </div>
      <div className={sec1ParentStyle()}>
        <h1 className="text-4xl font-bold text-emerald-900 mb-8 text-center">
          Assigned Patients
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-emerald-700 text-white text-left">
              <tr>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Mood</th>
                <th className="px-6 py-4 font-semibold">Stress</th>
                <th className="px-6 py-4 font-semibold">Habits</th>
                <th className="px-6 py-4 font-semibold">Journal</th>
                <th className="px-6 py-4 font-semibold text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr
                className={`
                hover:bg-emerald-100 transition`}
              >
                <td className="px-6 py-4 font-semibold text-emerald-900">
                  Siddeque
                </td>

                <td className="px-6 py-4">
                  <span className="text-xl mr-2">😊</span>
                  <span className="text-gray-700"> Happy</span>
                </td>

                <td className="px-6 py-4 text-gray-800">0/10</td>

                <td className="px-6 py-4 text-gray-800">100%</td>

                <td className="px-6 py-4 text-gray-600 truncate max-w-[150px]">
                  Feeling better today
                </td>

                <td className="px-6 py-4 text-center">
                  <Link to="/assignedPatientDetails">
                    <button
                      className="
                    bg-emerald-700 text-white px-4 py-2 rounded-lg 
                    hover:bg-emerald-800 text-sm shadow-md transition
                  "
                    >
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DoctorAssignedPatients;
