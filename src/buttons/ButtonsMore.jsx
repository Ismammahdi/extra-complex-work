import React from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
import { Link } from "react-router-dom";

const ButtonsMore = () => {
  const items = [
    { name: "ঈমান-আকাইদ", path: "/anwarul-quran" },
    { name: "একটি ভুল নাম", path: "/common-mistakes" },
    { name: "শিক্ষা/সিলেবাস", path: "/student-page" },
    { name: "আলকুদস সংখ্যা", path: "/reader-page" },
    { name: "নামায-সালাত", path: "/education-advice" },
    { name: "তাহারাত", path: "/education-advice" },
    { name: "রমযান প্রসঙ্গ", path: "/education-advice" },
    { name: "হজ্জ্ব", path: "/education-advice" },
    { name: "যাকাত", path: "/education-advice" },
    { name: "মুয়ামালাত-লেনদেন", path: "/education-advice" },
    { name: "তাসাওউফ-আত্মশুদ্ধি", path: "/education-advice" },
    { name: "ইসলামী অর্থনীতি", path: "/education-advice" },
    { name: "দাওয়াত ও তাবলীগ", path: "/education-advice" },
    { name: "শেয়ার ব্যবসা", path: "/education-advice" },
    { name: "শবে বরাত", path: "/education-advice" },
    { name: "শবে মিরাজ", path: "/education-advice" },
    { name: "ঈদ", path: "/education-advice" },
    { name: "নারী অধিকার", path: "/education-advice" },
    { name: "বিদআত", path: "/education-advice" },
    { name: "সীরাত", path: "/education-advice" },
    { name: "সফরনামা", path: "/education-advice" },
    { name: "পর্দা ও হিজাব", path: "/education-advice" },
    { name: "যিকির", path: "/education-advice" },
    { name: "দ্বীনিয়াত", path: "/education-advice" },
    { name: "মুনাজাতে মাকবুল", path: "/education-advice" },
    { name: "একটি ভুল ধারণা", path: "/education-advice" },
    { name: "এটি হাদীস নয়", path: "/education-advice" },
    { name: "বিসমিল্লাহ", path: "/education-advice" },
    { name: "তলবে ইলম", path: "/education-advice" },
  ];
  return (
    <div className="font-bengali">
      <div
        className="relative  bg-cover bg-top h-60 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col md:flex-row items-center md:space-y-0 justify-between md:space-x-4">
              {/* Left Section with text and border */}

              <div className="w-full md:w-[40%] md:text-left text-center font-bengali">
                <div className="flex items-center">
                  <h2 className="text-xl mt-24 md:text-3xl flex-grow text-white font-bold pb-[10px] border-b border-yellow-500">
                    বর্ষ: ২০,<span className="ml-4"></span> সংখ্যা: ১০
                  </h2>
                  {/* Mosque Icon */}
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto mt-24 -ml-[44px] hidden md:block"
                  />
                </div>
                {/* Subtitle Text */}
              </div>

              {/* Right Section with institution text */}
              <div className="w-[50%] font-bengali hidden md:block">
                <p className=" text-2xl mt-24 font-semibold text-right">
                  জুমাদাল উলা ১৪৪৬ || অক্টোবর ২০২৪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 md:px-12 py-6 mt-10   font-bengali">
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block p-4 border-b border-gray-200 text-xl hover:text-green-600"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsMore;
