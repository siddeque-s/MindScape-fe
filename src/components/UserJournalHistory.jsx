import React from 'react'

const UserJournalHistory = () => {


  const styleParaHistory = () => {
    return "text-gray-700 break-words";
  };
  return (
    
    <>
     

        <div className="max-w-4xl mx-auto">
       
          <div>
            <div
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl
                             hover:scale-[1.02] transition-all mt-6 
                             border border-emerald-100"
            >
              <p className={styleParaHistory()}>
                Had a productive day! Feeling grateful.
              </p>

              <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                <img
                  src="https://image.emojipng.com/209/8614209.jpg"
                  className="w-4 h-4"
                  alt=""
                />
                12-10-2025
              </p>

             
            </div>
          </div>
        </div>
      
    </>
  )
}

export default UserJournalHistory