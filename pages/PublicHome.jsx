import React from "react";
import logo from "../src/assets/logoNew.png";
import { Carousel } from "flowbite-react";

const PublicHome = () => {
  return (
    <>
      {/* ---------------------------
          Section 1: Hero Intro
      ---------------------------- */}
      <section
        id="home"
        className="bg-cover h-[90vh] bg-center flex items-center justify-center px-6 relative"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/sharecare/image/upload/f_auto/v1493136385/slideshows/stress-relief-tricks-er-doctor-01')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative w-[90%] md:w-[60%] lg:w-[45%] bg-white/60 backdrop-blur-md px-10 py-12 rounded-2xl shadow-xl text-center space-y-5">
          <div className="flex justify-center mb-3">
            <img
              src={logo}
              alt="MindScape Logo"
              className="w-32 drop-shadow-md hover:scale-110 transition-transform duration-300"
            />
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 flex justify-center items-center gap-2">
            Welcome to MindScape!
            <img
              src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/263a.gif"
              alt="smile"
              className="w-8 sm:w-10"
            />
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800">
            Find Peace Within Yourself
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Track your mood, reduce stress, build positive habits, and live a
            calmer, balanced life with MindScape.
          </p>

          <button className="mt-4 px-10 py-3 bg-emerald-700 text-white rounded-full text-lg shadow-lg hover:bg-emerald-800 transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* ---------------------------
          Section 2: About Stress
      ---------------------------- */}
      <section className="bg-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10 flex items-center justify-center gap-3">
            What is Stress?
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/angry-emoji-4751204-3950995.gif"
              alt="stress emoji"
              className="w-10 h-10"
            />
          </h1>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-14 leading-relaxed">
            Stress is the mind and body’s response to overwhelming situations.
            It can affect your mood, sleep, focus, and overall emotional
            balance. Understanding stress is the first step toward managing it
            better — and MindScape is here to support you through that journey.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://greetingideas.com/wp-content/uploads/2021/03/Stress-Quotes-Images-Greeting-Ideas-2-1024x1024.png"
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://wisdomquotes.b-cdn.net/wp-content/uploads/stress-quotes-ignorant-state-believes-natalie-goldberg-wisdom-quotes.webp"
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.W4D5nfV_BqLVlKpJjt9sRwHaEc?pid=Api&P=0&h=180"
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------
          Section 3: About MindScape
      ---------------------------- */}
      <section className="py-20 px-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/pL77zGPjqOUAyCkzYRZmXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/the_bolde_articles_237/513181827b56a85f96f987ce8ea90ff0"
              alt="mindscape"
              className="w-full md:w-[85%] rounded-b-[4rem] shadow-xl object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-4xl font-bold text-emerald-900">
              About MindScape !!!
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              MindScape is your personal emotional companion — built to help you
              understand your feelings, track your daily habits, reduce stress,
              and build mental strength. In a world full of pressure and
              distractions, MindScape brings calm, clarity, and balance to your
              daily life.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're stressed, overwhelmed, or simply improving
              yourself, MindScape provides guided tools, mood tracking,
              mindfulness exercises, and personalized insights to help you find
              inner peace. Your journey to a healthier mind starts here.
            </p>

            <button className="px-8 py-3 bg-emerald-700 text-white rounded-full text-lg shadow-md hover:bg-emerald-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </section>


      {/* scetion3 features */}
     <section id="features" className="py-20 px-6 bg-green-50">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl font-bold text-emerald-900 text-center mb-12">
      What We Provide
    </h2>

    {/* Features Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Feature 1 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/616/616489.png" 
          alt="mood tracker"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Mood Tracker
        </h3>
        <p className="text-gray-600">
          Track your emotions daily and understand your emotional patterns.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/9906/9906747.png" 
          alt="stress"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Stress Level Monitor
        </h3>
        <p className="text-gray-600">
          Record your stress levels and receive calming suggestions instantly.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/6194/6194748.png"
          alt="habit"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Habit Builder
        </h3>
        <p className="text-gray-600">
          Build healthy routines with habit tracking and daily progress stats.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2847/2847709.png"
          alt="journal"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Daily Journal
        </h3>
        <p className="text-gray-600">
          Write your thoughts privately and reflect on your emotional growth.
        </p>
      </div>

      {/* Feature 5 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4144/4144449.png"
          alt="insights"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Personalized Insights
        </h3>
        <p className="text-gray-600">
          Get weekly emotional insights to help you understand your trends.
        </p>
      </div>

      {/* Feature 6 */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center 
                      transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/4144/4144792.png"
          alt="analytics"
          className="w-20 mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
          Analytics Dashboard
        </h3>
        <p className="text-gray-600">
          View mood graphs, stress charts, and habit trends in one place.
        </p>
      </div>

    </div>

  </div>
</section>


{/* testimoniaals */}
<section id="testimonials" className="py-20 px-6 bg-green-50">
  <h2 className="text-4xl font-bold text-emerald-900 text-center mb-12">
    Testimonials
  </h2>

  {/* HERO WRAPPER TO PREVENT OVERFLOW */}
    {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
      </Carousel>
    </div> */}
</section>

{/* contact sect6 */}
<section className="py-20 px-6 bg-white">
  <h2 className="text-4xl font-bold text-emerald-900 text-center mb-10">
    Contact Us
  </h2>

  <div className="max-w-xl mx-auto bg-emerald-50/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
    <p className="text-gray-700 text-center mb-6 text-lg">
      Have a question or need help? We’re here for you.
    </p>

    <div className="flex flex-col gap-5">

      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-xl border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-xl border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none"
      />

      <textarea
        placeholder="Message"
        rows="4"
        className="px-4 py-3 rounded-xl border border-emerald-300 focus:ring-2 focus:ring-emerald-500 outline-none"
      ></textarea>

      <button className="bg-emerald-700 text-white py-3 rounded-xl font-semibold hover:bg-emerald-800 transition shadow-md">
        Send Message
      </button>
    </div>
  </div>
</section>





    </>
  );
};

export default PublicHome;
