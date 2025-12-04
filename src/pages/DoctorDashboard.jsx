import React from 'react'
import DoctorHeader from '../components/DoctorHeader'

const DoctorDashboard = () => {
    const styleDoctorDash = () => {
        return "min-h-screen px-6 py-10 mt-13 bg-gradient-to-b from-emerald-50 via-white to-emerald-100"
    }

    return (
        <>
         <div className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
        <DoctorHeader/>
      </div>
         <div className={styleDoctorDash()}>

            <h1 className="text-4xl font-bold text-emerald-900 mb-3 flex items-center gap-3">
                Doctor Dashboard
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                    className="w-12 h-12"
                />
            </h1>
            <p className="text-gray-700 mb-10">
                Overview of today's appointments and patient activity.
            </p>

        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">

            
                <div className="
                    bg-white p-6 rounded-2xl shadow-lg cursor-pointer
                    transition-all duration-300 
                    hover:-translate-y-2 hover:scale-[1.03] hover:shadow-emerald-300
                ">
                    <img src="https://cdn-icons-png.flaticon.com/512/1250/1250732.png" className="w-12 mb-3" />
                    <h3 className="text-emerald-800 font-semibold text-lg">Total Patients</h3>
                    <p className="text-4xl font-bold text-emerald-600">12</p>
                </div>

                <div className="
                    bg-white p-6 rounded-2xl shadow-lg cursor-pointer
                    transition-all duration-300 
                    hover:-translate-y-2 hover:scale-[1.03] hover:shadow-emerald-300
                ">
                    <img src="https://cdn-icons-png.flaticon.com/512/3501/3501241.png" className="w-12 mb-3" />
                    <h3 className="text-emerald-800 font-semibold text-lg">Today's Appointments</h3>
                    <p className="text-4xl font-bold text-emerald-600">2</p>
                </div>

                
                <div className="
                    bg-white p-6 rounded-2xl shadow-lg cursor-pointer
                    transition-all duration-300 
                    hover:-translate-y-2 hover:scale-[1.03] hover:shadow-emerald-300
                ">
                    <img src="https://cdn-icons-png.flaticon.com/512/595/595067.png" className="w-12 mb-3" />
                    <h3 className="text-emerald-800 font-semibold text-lg">Pending Requests</h3>
                    <p className="text-4xl font-bold text-red-500">3</p>
                </div>
            </div>

         
            <section className="mb-16">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">
                    Today's Appointments
                </h2>

                <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">

                    <div className="
                        flex justify-between items-center p-4 border rounded-xl 
                        transition-all duration-300 
                        hover:-translate-y-1 hover:shadow-md hover:bg-emerald-50
                    ">
                        <div>
                            <p className="font-semibold text-emerald-900">Asha Thomas</p>
                            <p className="text-gray-600 text-sm">Follow-up</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="font-medium text-emerald-700">11:30 AM</p>
                            <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-sm rounded-lg">
                                Pending
                            </span>
                        </div>
                    </div>

                    <div className="
                        flex justify-between items-center p-4 border rounded-xl 
                        transition-all duration-300 
                        hover:-translate-y-1 hover:shadow-md hover:bg-emerald-50
                    ">
                        <div>
                            <p className="font-semibold text-emerald-900">Riya Nair</p>
                            <p className="text-gray-600 text-sm">First Consultation</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <p className="font-medium text-emerald-700">2:00 PM</p>
                            <span className="px-3 py-1 bg-green-200 text-green-800 text-sm rounded-lg">
                                Confirmed
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            <section className="mb-20">
                <h2 className="text-2xl font-bold text-emerald-900 mb-6">
                    Recent Activity
                </h2>

                <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">

                    <div className="
                        p-4 border rounded-xl transition-all duration-300
                        hover:-translate-x-1 hover:bg-emerald-50 hover:shadow-md
                    ">
                        <p>
                            <span className="font-semibold text-emerald-900">Harsha</span> updated mood — 😊 Happy
                        </p>
                    </div>

                    <div className="
                        p-4 border rounded-xl transition-all duration-300
                        hover:-translate-x-1 hover:bg-emerald-50 hover:shadow-md
                    ">
                        <p>
                            <span className="font-semibold text-emerald-900">Alan</span> added Journal
                        </p>
                    </div>

                    <div className="
                        p-4 border rounded-xl transition-all duration-300
                        hover:-translate-x-1 hover:bg-emerald-50 hover:shadow-md
                    ">
                        <p>
                            <span className="font-semibold text-emerald-900">Sneha</span> completed habit — 💧 Drink Water
                        </p>
                    </div>

                </div>
            </section>
        </div>
        </>
       
    );
}

export default DoctorDashboard;
