import React from "react";
import logo from "../assets/logoNew.png";
import { Carousel } from "flowbite-react";
import CoomonUser from "../components/CoomonUser";

const PublicHome = () => {
  const eachCaorsel=()=>{
    return "p-10 rounded-2xl w-[85%] text-center shadow-xl bg-gradient-to-br from-emerald-800 to-green-900 hover:shadow-2xl hover:scale-[1.05] transition-all duration-300"
  }
  return (
    <>
<div className="fixed top-0 left-0 w-full z-50">
  <CoomonUser/>
</div>

      {/*sec1 homefirst */}
      <section
        id="home"
        className="bg-cover h-[90vh] bg-center flex items-center justify-center px-6 relative mt-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/sharecare/image/upload/f_auto/v1493136385/slideshows/stress-relief-tricks-er-doctor-01')",
        }}
      >
        <div className="absolute"></div>

        <div className="relative w-[90%] md:w-[60%] lg:w-[45%] bg-white/90 backdrop-blur-lg px-10 py-12 rounded-2xl shadow-2xl text-center space-y-5 border border-white/30">
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
              className="w-8 sm:w-10"
            />
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-800">
            Find Peace Within Yourself
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Track your mood, reduce stress, build positive habits, and live a calmer, balanced life with MindScape.
          </p>

          <button className="mt-4 px-10 py-3 bg-emerald-700 text-white rounded-full text-lg shadow-lg hover:bg-emerald-800 transition">
            Start Your Journey
          </button>
        </div>
      </section>


      {/*sec2 abt stress*/}
      <section id="stress" className="bg-green-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold text-emerald-900 text-center mb-10 flex items-center justify-center gap-3">
            What is Stress?
            <img
              src="https://cdnl.iconscout.com/lottie/premium/thumb/angry-emoji-4751204-3950995.gif"
              className="w-10 h-10"
            />
          </h1>

          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center mb-14 leading-relaxed">
            Stress is the mind and body's response to overwhelming situations.
            It affects mood, sleep, focus, and emotional balance.
            Understanding stress is the first step toward managing it better — and MindScape is here to guide you.
          </p>

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


      {/* sec3 mindscape intro */}
      <section className="py-20 px-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">

          <div className="flex justify-center">
            <img
              src="https://s.yimg.com/ny/api/res/1.2/pL77zGPjqOUAyCkzYRZmXg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/the_bolde_articles_237/513181827b56a85f96f987ce8ea90ff0"
              className="w-full md:w-[85%] rounded-b-[4rem] shadow-xl object-cover"
            />
          </div>

          <div className="text-center md:text-left space-y-6">

            <h2 className="text-4xl font-bold text-emerald-900">
              About MindScape
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              MindScape is your personal mental wellness companion — created to help you track emotions, reduce stress, and grow emotionally.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With mood tracking, insights, journaling, and guided exercises, MindScape helps you stay balanced in a busy world.
            </p>

            <button className="px-8 py-3 bg-emerald-700 text-white rounded-full text-lg shadow-md hover:bg-emerald-800 transition">
              Get Started
            </button>

          </div>
        </div>
      </section>


      {/* 
          Sect 4 features
      */}
      <section id="features" className="py-20 px-6 bg-green-50">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-emerald-900 text-center mb-12">
            What We Provide
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616489.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Mood Tracker
              </h3>
              <p className="text-gray-600">
                Track your emotions and understand your daily patterns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9906/9906747.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Stress Level Monitor
              </h3>
              <p className="text-gray-600">
                Monitor stress and receive calming suggestions instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/6194/6194748.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Habit Builder
              </h3>
              <p className="text-gray-600">
                Build healthy routines with consistency and follow-through.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2847/2847709.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Daily Journal
              </h3>
              <p className="text-gray-600">
                Write privately and reflect on your emotional journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4144/4144449.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Personalized Insights
              </h3>
              <p className="text-gray-600">
                Weekly insights that help you understand emotional trends.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md text-center border border-emerald-100 hover:shadow-2xl hover:scale-[1.04] transition-all duration-300">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4144/4144792.png"
                className="w-20 mx-auto mb-4 drop-shadow-sm"
              />
              <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                Analytics Dashboard
              </h3>
              <p className="text-gray-600">
                View your graphs, mood stats, and progress in one place.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* sec5 reviews */}
<section id="testimonials" className="py-20 px-6 bg-white">
  <h2 className="text-4xl font-bold text-emerald-900 text-center mb-12">
    Testimonials
  </h2>
 <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
    Hear from people who have transformed their daily lives with MindScape.  
    Real experiences, real change — because your mental well-being matters.
  </p>

  <div className="h-72 sm:h-80 xl:h-96 max-w-3xl mx-auto">
    <Carousel pauseOnHover slideInterval={4000} theme={{
    root: {
      leftControl:
        "absolute left-0 top-1/2 h-10 w-10 -translate-y-1/2 p-3 rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 transition",
      rightControl:
        "absolute right-0 top-1/2 h-10 w-10 -translate-y-1/2 p-3 rounded-full bg-emerald-700 text-white shadow-lg hover:bg-emerald-800 transition",
    },
    indicators: {
      active: {
        base: "w-3 h-3 bg-emerald-700 rounded-full",
      },
      inactive: {
        base: "w-3 h-3 bg-gray-300 rounded-full hover:bg-emerald-500",
      },
    },
  }}>

     
      <div className="flex items-center justify-center h-full">
        <div className={eachCaorsel()}>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed italic">
            “MindScape changed my routine completely. I started noticing patterns…”
          </p>
          <h3 className="text-teal-200 font-bold mt-5 text-lg">— Aisha K</h3>
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className={eachCaorsel()}>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed italic">
            “The UI is beautiful and calming…”
          </p>
          <h3 className="text-teal-200 font-bold mt-5 text-lg">— Rohan M</h3>
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className={eachCaorsel()}>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed italic">
            “The mood tracking graph opened my eyes…”
          </p>
          <h3 className="text-lime-200 font-bold mt-5 text-lg">— Maya V</h3>
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className={eachCaorsel()}>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed italic">
            “The breathing exercises…”          
          </p>
          <h3 className="text-lime-300 font-bold mt-5 text-lg">— Daniel R</h3>
        </div>
      </div>

      <div className="flex items-center justify-center h-full">
        <div className={eachCaorsel()}>
          <p className="text-lg sm:text-xl text-green-50 leading-relaxed italic">
            “Everything about this app feels premium…”          
          </p>
          <h3 className="text-emerald-200 font-bold mt-5 text-lg">— Aadhya S</h3>
        </div>
      </div>

    </Carousel>
  </div>
</section>





      {/*sec6 contact*/}
<section className="py-20 px-6 bg-emerald-100">
  <h2 className="text-4xl font-bold text-emerald-900 text-center mb-10">
    Contact Us
  </h2>

  <div className="max-w-xl mx-auto 
                  bg-emerald-700
                  p-10 rounded-3xl shadow-xl border border-emerald-900/30
                  text-white backdrop-blur-md
                  hover:shadow-2xl transition-all duration-300">

    <p className="text-emerald-100 text-center mb-6 text-lg">
      Have a question or need help? We're here for you.
    </p>

    <div className="flex flex-col gap-5">

      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-xl bg-white/90 text-emerald-900
                   border border-emerald-200 shadow-sm
                   focus:ring-2 focus:ring-emerald-400 outline-none"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-xl bg-white/90 text-emerald-900
                   border border-emerald-200 shadow-sm
                   focus:ring-2 focus:ring-emerald-400 outline-none"
      />

      <textarea
        placeholder="Message"
        rows="4"
        className="px-4 py-3 rounded-xl bg-white/90 text-emerald-900
                   border border-emerald-200 shadow-sm
                   focus:ring-2 focus:ring-emerald-400 outline-none"
      ></textarea>

      <button className="bg-emerald-400 text-white py-3 rounded-xl font-semibold
                         hover:bg-emerald-300 hover:text-emerald-900
                         active:scale-95 transition shadow-md">
        Send Message
      </button>

    </div>
  </div>
</section>




    </>
  );
};

export default PublicHome;
