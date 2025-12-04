import React, { useState } from "react";
import UserDoctorChat from "../components/UserDoctorChat";
import UserHeader from "../components/UserHeader";

const UserDoctorSupport = () => {
  const [showRequest, setShowRequest] = useState(true);
  const [showAssigned, setShowAssigned] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const handleTab = (section) => {
    setShowRequest(false);
    setShowAssigned(false);
    setShowChat(false);

    if (section === "request") setShowRequest(true);
    if (section === "assigned") setShowAssigned(true);
    if (section === "chat") setShowChat(true);
  };

  const styleDoctorSupportPArent = () => {
    return "min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 px-6 py-10 mt-13";
  };

  return (


    <>
      <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <UserHeader />
      </div>

       <div className={styleDoctorSupportPArent()}>
      <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10 flex justify-center items-center gap-3">
        Doctor Support
        <img
          src="https://i.pinimg.com/originals/22/f4/2c/22f42c11b612b041b4038573dca18a2d.gif"
          alt="gif"
          className="w-12 h-12 object-contain rounded-xl shadow-lg hover:scale-110 transition"
        />
      </h1>

     
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => handleTab("request")}
          className={`px-6 py-3 rounded-full font-semibold ${
            showRequest ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-700"
          }`}
        >
          Request Doctor
        </button>

        <button
          onClick={() => handleTab("assigned")}
          className={`px-6 py-3 rounded-full font-semibold ${
            showAssigned ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-700"
          }`}
        >
          Assigned Doctor
        </button>

        <button
          onClick={() => handleTab("chat")}
          className={`px-6 py-3 rounded-full font-semibold ${
            showChat ? "bg-emerald-700 text-white" : "bg-emerald-100 text-emerald-700"
          }`}
        >
          Chat
        </button>
      </div>

      {/* Sec1 req doc */}
      {showRequest && (
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            Request a Doctor
            <img
              src="https://static.vecteezy.com/system/resources/previews/016/637/809/non_2x/heart-shaped-stethoscope-png.png"
              alt="heart"
              className="w-10 h-10 object-contain hover:scale-110 transition drop-shadow-md"
            />
          </h2>

          <label className="font-semibold text-emerald-800">Select Issue</label>
          <select className="w-full mt-2 p-3 border rounded-xl">
            <option>Stress</option>
            <option>Anxiety</option>
            <option>Sleep Issues</option>
            <option>Relationship Issues</option>
          </select>

          <label className="font-semibold mt-6 block text-emerald-800">
            Additional Notes
          </label>
          <textarea
            rows="4"
            placeholder="Write about your problem..."
            className="w-full mt-2 p-4 border rounded-xl bg-emerald-50"
          ></textarea>

          <button className="mt-6 bg-emerald-700 text-white px-6 py-3 rounded-xl hover:bg-emerald-800">
            Send Request
          </button>

          <p className="text-gray-600 text-sm mt-4">
            Status: <span className="text-yellow-600 font-semibold">Pending</span>
          </p>
        </section>
      )}

   {/* sec2 assigned doctor */}
      {showAssigned && (
        <section className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
            Your Assigned Doctor
            <img
              src="https://imgproxy.attic.sh/vlKyCAbKSTNzz4tAif8ecqzQNbAF_4OOUvs25gM0HWE/rs:fit:768:768:1:1/t:1:FF00FF:false:false/pngo:false:true:256/aHR0cHM6Ly9hdHRp/Yy5zaC9iMGxxenFm/dnN2Zzk3YmM3Z3hu/YWF0dTlnZWdr.png"
              alt="doctor-icon"
              className="w-12 h-12 object-contain rounded-xl shadow-md hover:scale-110 transition"
            />
          </h2>

          <div className="flex flex-col items-center text-center">
           
            <div className="relative group">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                alt="doctor"
                className="
                  w-32 h-32 
                  rounded-full 
                  shadow-xl 
                  border-4 border-emerald-200
                  object-cover 
                  transition-all duration-300 
                  group-hover:scale-105 
                  group-hover:shadow-emerald-300/50
                "
              />

              <div
                className="
                  absolute inset-0 
                  rounded-full 
                  bg-emerald-300/20 
                  blur-xl 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-all
                "
              ></div>
            </div>
{/* doct name */}
            <h3 className="text-xl font-bold text-emerald-800 mt-3">
              Dr. John Smith
            </h3>
            {/* map doctor dectails */}
            <p className="text-gray-700">Mental Health Specialist</p>
            <p className="text-gray-500 text-sm">Qualification: MBBS, MD Psychiatry</p>

            <div className="mt-6 bg-emerald-50 p-5 rounded-xl w-full">
              <h4 className="font-bold text-emerald-800 mb-2">Doctor's Notes</h4>
{/* map the habits */}
              <p className="text-gray-700">
                 Breathing exercises twice daily. <br />
                Reduce screen time before sleep. <br />
                 Follow your habit log regularly.
              </p>
            </div>

            <button
              onClick={() => handleTab("chat")}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700"
            >
              Start Chat 💬
            </button>
          </div>
        </section>
      )}
{/* sec3 chat */}
      {showChat && (
       <UserDoctorChat/>
      )}
    </div>
    
    </>
   
  );
};

export default UserDoctorSupport;
