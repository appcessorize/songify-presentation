"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Music,
  Rocket,
  Video,
  ChevronRight,
  Play,
} from "lucide-react";

function Presentation() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      type: "title",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <p className="text-7xl font-bold text-gray-800">TikTok</p>
          <p className="text-6xl font-bold text-gray-600">⬇️</p>
          <p className="text-7xl font-bold text-gray-800">Music Video</p>
          <p className="text-5xl text-red-500  mt-2">in one tap</p>
        </div>
      ),
    },
    // Description Slide (Why)
    {
      type: "description",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-20">
          <h2 className="text-5xl font-bold mb-8 text-black">
            {" "}
            ⚡ Instant Magic Moment
          </h2>
          <div className="max-w-5xl space-y-6">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-6 border-2 border-pink-200">
              <h3 className="text-3xl font-bold text-pink-600 mb-2">
                📈 Massive Growth Opportunity
              </h3>
              <p className="text-xl text-gray-700">
                TikTok powers App Discovery. Music remixes are a consistently
                popular content category.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                🌊 Riding the Wave
              </h3>
              <p className="text-xl text-gray-700">
                Users already love and share "songified" videos daily. Let's
                make that easier and available to people without editing skills.
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">
                🚀 Creator Flywheel
              </h3>
              <p className="text-xl text-gray-700">
                Built-in virality. Every share brings new creators. Every
                creator brings new users to Suno.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    // Demo Slide
    {
      type: "demo",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <Play className="w-20 h-20 text-pink-500 mb-8" />
          <h2 className="text-6xl font-bold mb-12 text-black">Live Demo</h2>
        </div>
      ),
    },
    // What's Next Slide
    {
      type: "next",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-20">
          <Rocket className="w-20 h-20 text-pink-500 mb-8 animate-bounce" />
          <h2 className="text-6xl font-bold mb-12 text-black">What's Next?</h2>
          <div className="max-w-4xl space-y-6 text-left">
            <div className="bg-pink-50 border-2 border-pink-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">⚡</span>
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                  UI/ UX improvements
                </h3>
                <p className="text-gray-600">
                  <ul>
                    <li>
                      There's some techinal thing we can do to speed things up
                    </li>
                    <li>
                      There's some design things that will make it{" "}
                      <span className="italic">feel</span> faster
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">✨</span>
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                  FX and filters
                </h3>
                <p className="text-gray-600">
                  Simple effects and filters are pretty easy to implement
                </p>
              </div>
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">💧</span>
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                  Watermarking
                </h3>
                <p className="text-gray-600">Add suno watermarks</p>
              </div>
            </div>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 flex items-center gap-4">
              <span className="text-3xl">🌐</span>
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-gray-800">
                  Social Integration
                </h3>
                <p className="text-gray-600">
                  One-click sharing back to TikTok with attribution
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    // Final Slide - Serving the Casual Creator
    {
      type: "casual-creator",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center px-12">
          <h2 className="text-4xl font-bold mb-4 text-black">
            Serving the Casual Creator
          </h2>
          {/* Barbell Image with Labels */}
          <div className="relative mb-4">
            <img
              src="/barbell.jpg"
              alt="Barbell strategy"
              className="w-[400px] h-auto mx-auto rounded-lg shadow-lg"
            />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-r-lg font-bold text-sm">
              ???
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-l-lg font-bold text-sm">
              Studio
            </div>
          </div>
          {/* Strategy Description */}
          <div className="mb-4 max-w-3xl">
            <p className="text-2xl font-bold text-gray-800 mb-2"></p>
            <p className="text-lg text-gray-600">
              Make it easy for the casual creator to ride trends and create fun
              musical things they want to dm their friends, share on socials or
              add to the groupchat
            </p>
          </div>
          {/* App Ecosystem */}
          <div className="flex gap-12 justify-center">
            {/* ChatMusical */}
            <div className="flex items-center gap-6">
              {/* iPhone Frame */}
              <div className="relative">
                <div className="w-[180px] h-[370px] bg-black rounded-[35px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[27px] overflow-hidden relative">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl"></div>
                    {/* Screen */}
                    <img
                      src="/chatmusical.jpeg"
                      alt="ChatMusical App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  ChatMusical
                </h3>
                <p className="text-lg text-gray-600 mb-1">Chats → Songs</p>
                <p className="text-sm text-pink-600 font-semibold">
                  Now on TestFlight
                </p>
              </div>
            </div>

            {/* Comments */}
            <div className="flex items-center gap-6">
              {/* iPhone Frame */}
              <div className="relative">
                <div className="w-[180px] h-[370px] bg-black rounded-[35px] p-2 shadow-2xl">
                  <div className="w-full h-full bg-black rounded-[27px] overflow-hidden relative">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-5 bg-black rounded-b-2xl"></div>
                    {/* Screen */}
                    <img
                      src="/commentsapp.jpeg"
                      alt="Comments App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Text */}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Comments
                </h3>
                <p className="text-lg text-gray-600 mb-1">Comments → Music</p>
                <p className="text-sm text-pink-600 font-semibold">
                  Now on TestFlight
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xl font-semibold text-gray-700">
            DM Matt for TestFlights
          </div>
        </div>
      ),
    },
    // Team Slide with Thanks
    {
      type: "team",
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-6xl font-bold mb-12 text-black">Thank You!</h2>

          <div className="mb-12">
            <h3 className="text-3xl font-semibold text-gray-700 mb-8">Team</h3>
            <div className="text-2xl text-gray-600 space-y-3">
              <p>Zoe Shleifer</p>
              <p>Jason (Chung-chun) Wang</p>
              <p>Matthew Gordon</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, slides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
          e.preventDefault();
          prevSlide();
          break;
        case "Escape":
          router.push("/");
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, router, nextSlide, prevSlide]);

  return (
    <div
      className="min-h-screen bg-white text-black overflow-hidden"
      style={{ fontFamily: "'TikTok Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-between items-center">
        <div>
          {currentSlide === 0 && (
            <div className="flex items-center flex-col gap-2 text-xl text-gray-600">
              <h1 className="text-3xl font-bold text-black">Songify</h1>
              <div className="flex flex-row">
                <span className="text-sm">Powered by Suno</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Slide Content */}
      <div className="h-screen flex items-center justify-center p-20">
        {slides[currentSlide].content}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className={`absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all ${
          currentSlide === 0 ? "opacity-0 pointer-events-none" : ""
        }`}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all ${
          currentSlide === slides.length - 1
            ? "opacity-0 pointer-events-none"
            : ""
        }`}
      >
        <ArrowRight size={24} />
      </button>
    </div>
  );
}

export default Presentation;