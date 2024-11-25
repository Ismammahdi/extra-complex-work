import React from "react";
import mosque from "../assets/mosque.svg";
import bannerImage from "../assets/alkawsar-banner-230px.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomBanner from "../components/shared/CustomBanner";

const BivagMore = () => {
  const items = [
    { text: "সম্পাদকীয়", path: "/ismam" },
    { text: "আনওয়ারুল কুরআন", path: "/anwarul-quran" },
    { text: "প্রচলিত ভুল", path: "/common-mistakes" },
    { text: "আপনি যা জানতে চেয়েছেন", path: "/faq" },
    { text: "শিক্ষার্থীদের পাতাঃ", path: "/student-page" },
    { text: "শিক্ষা পরামর্শ", path: "/education-advice" },
    { text: "শিশু-কিশোর", path: "/youth" },
    { text: "পর্দানশীন", path: "/women" },
    { text: "ফিলহাল", path: "/current" },
    { text: "মারকাযের দিনরাত", path: "/center-day-night" },
    { text: "পাঠকের পাতা", path: "/reader-page" },
    { text: "খবর ... অতঃপর ...", path: "/news" },
  ];

  const bannerData = {
    title: "বিভাগ",
  };
  const height = "h-32";
  return (
    <div className="pt-24 font-bengali ">
      {/* Custom banner */}
      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      <div className="container mx-auto px-3 md:px-12 py-6 mt-8   font-bengali">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="item col-span-2 space-y-4 ">
            {items.map((item, index) => (
              <Link
                to={item.path}
                key={index}
                className="py-4 flex items-center border-b border-gray-300  px-4 hover:bg-gray-100"
              >
                <FaArrowRight className="text-yellow-600 mr-3 text-3xl font-bold" />
                <span className="text-gray-800 text-xl hover:text-green-600 ">
                  {item.text}
                </span>
              </Link>
            ))}
          </div>
          <div>{/* Right column content can go here */}</div>
        </div>
      </div>
    </div>
  );
};

export default BivagMore;
