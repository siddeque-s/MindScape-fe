import React, { useState } from "react";

const Journal = () => {
  const styleSection1 = () => {
    return "px-6 py-16 bg-gradient-to-b from-emerald-100 to-white";
  };

  const styleSection2 = () => {
    return "px-6 py-16 bg-gradient-to-b from-white to-emerald-100";
  };

  const styleParaHistory = () => {
    return "text-gray-700 break-words";
  };

  return (
    <div className="min-h-screen">
      {/* sec1 wiriting journal */}
      <section className={styleSection1()}>
        <h1 className="text-4xl font-bold text-emerald-900 text-center mb-8 flex justify-center items-center gap-3">
          Daily Journal
          <img
            src="https://www.vhv.rs/dpng/d/553-5536743_paper-and-pencil-icon-hd-png-download.png"
            className="w-10 h-10"
            alt=""
          />
        </h1>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-emerald-100">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-4">
            Write Your Thoughts
          </h2>

          <textarea
            rows="6"
            placeholder="How are you feeling today?"
            className="w-full px-4 py-3 border rounded-xl outline-none 
                       focus:ring-2 focus:ring-emerald-500 bg-emerald-50"
          ></textarea>

          <button
            className="mt-4 bg-emerald-700 text-white px-6 py-3 rounded-xl
                       hover:bg-emerald-800 active:scale-95 transition shadow-md"
          >
            Save Entry
          </button>
        </div>
      </section>

      {/* sec2 history jounal */}
      <section className={styleSection2()}>
        <h2 className="text-3xl font-bold text-emerald-900 text-center mb-10 flex justify-center items-center gap-3">
          Previous Entries
          <img
            src="https://cdn.shopify.com/s/files/1/1061/1924/files/Open_Book_Emoji.png?9898922749706957214"
            className="w-10 h-10"
            alt=""
          />
        </h2>

        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 text-center">No journal entries yet.</p>

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

              <button
                className="mt-4 bg-red-200 text-red-700 px-4 py-2 rounded-lg
                               hover:bg-red-300 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journal;
