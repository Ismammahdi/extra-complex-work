import React, { useState } from "react";
import mosque from "../../assets/mosque.svg";
import bannerImage from "../../assets/alkawsar-banner-230px.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomBanner from "../../components/shared/CustomBanner";

const articles = [
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "হযরত আশরাফ আলী থানভী রহ. গাউসুল উম্মাত",
    description:
      "হযরত থানভী রহ. এর পবিত্র জীবনের শিক্ষা এবং ত্যাগের কথা সবসময় স্মরণ রাখা উচিত। তিনি ছিলেন উম্মাহর একজন প্রকৃত দিশারী।",
    author: "মাওলানা আব্দুল্লাহ",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "সফর ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "হযরত মাওলানা আশরাফ আলী থানভী রহ. এর অবদান",
    description:
      "হযরত মাওলানা আশরাফ আলী থানভী রহ. এর পবিত্র জীবন এবং দিকনির্দেশনা নিয়ে বিস্তারিত আলোচনা। তিনি ছিলেন একজন মহান দায়ী।",
    author: "মাওলানা আবু বকর",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "জিলহজ্ব ১৪৪৪",
    title: "মহানবী হতে আমাদের জন্য",
    description:
      "মহানবী (সা.) এর জীবন থেকে আমাদের জীবনে প্রয়োজনীয় শিক্ষা অর্জন করা উচিত। তাঁর আদর্শ মানবিক গুণাবলীতে পূর্ণ।",
    author: "মাওলানা আব্দুল কাদের",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "মুহাররম ১৪৪৫",
    title: "প্রশংসা হচ্ছে এক পূর্ণিমা",
    description:
      "প্রশংসা হচ্ছে আল্লাহর পথে চলার একটি গুরুত্বপূর্ণ অংশ। এটি মানুষকে সঠিক পথে চলতে এবং আল্লাহর প্রতি কৃতজ্ঞ হতে শেখায়।",
    author: "মাওলানা মুহাম্মাদ হাসান",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "রজব ১৪৪৫",
    title: "ইসলাম: আল্লাহর বাণীকে যথাযথরূপে পালন",
    description:
      "ইসলাম আল্লাহর বাণী এবং মানবজীবনের পরিপূর্ণ আদর্শ। কুরআন এবং হাদিসের আলোকে ইসলামের শিক্ষাকে মেনে চলা অত্যন্ত গুরুত্বপূর্ণ।",
    author: "মাওলানা আব্দুল করিম",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "বিকান্দ ১৪৪৫",
    title: "সালাতুল মাগরিব : রাতের প্রথম নামাজ",
    description:
      "মাগরিবের সালাত হল রাতের প্রথম ইবাদত যা আল্লাহর সন্তুষ্টির জন্য নির্ধারিত। মুসলিমদের জন্য এই নামাজের গুরুত্ব অপরিসীম।",
    author: "মাওলানা আবু ইউসুফ",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "জুমাদাল আউয়াল ১৪৪৫",
    another: "দরসে কুরআন",
    title: "আমাদের বাচ্চাদের জন্য সংক্ষিপ্ত সুরা ও দোয়া",
    description:
      "আমাদের বাচ্চাদের ছোট ছোট সুরা এবং দোয়া শেখানো উচিত। এটি তাদের ইসলামি জ্ঞান বৃদ্ধিতে সহায়ক হবে।",
    author: "মাওলানা মুহাম্মাদ আলী",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "রবিউল আউয়াল ১৪৪৫",
    another: "আলজেরায় কুরআন",
    title: "কুরআনের শিক্ষা আমাদের জীবনের প্রতিটি ক্ষেত্রে",
    description:
      "কুরআনের শিক্ষাকে আমাদের জীবনের প্রতিটি ক্ষেত্রে বাস্তবায়িত করতে হবে। আল্লাহর নির্দেশ পালনেই মানবজীবনের প্রকৃত সফলতা।",
    author: "মাওলানা মুহাম্মাদুল্লাহ",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
  {
    date: "শাওয়াল ১৪৪৫",
    title: "প্রত্যেকের জন্য ইসলামের গুরুত্বপূর্ণ শিক্ষা",
    description:
      "ইসলামের শিক্ষাগুলি প্রতিটি মানুষের জন্য অত্যন্ত গুরুত্বপূর্ণ এবং তা আমাদের জীবনে সর্বক্ষেত্রে প্রয়োগ করা উচিত।",
    author: "মাওলানা আব্দুল মতিন",
    path1: "/dictator",
    path2: "/allissues",
    path3: "/anwarul-quran",
  },
];

// Helper function to truncate description
const truncateDescription = (text, wordLimit = 35) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};

// Helper function to limit title to 5 words with line break if needed
const formatTitle = (text, wordLimit = 5) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return (
      <>
        {words.slice(0, wordLimit).join(" ")}
        <br />
        {words.slice(wordLimit).join(" ")}
      </>
    );
  }
  return text;
};

const Tajib = () => {
  const [activePage, setActivePage] = useState(1); // Keep activePage as a number
  const totalPages = 9;

  const pages = [1, 2, 3, "...", 7, 8, 9]; // Page numbers with "..."

  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
  const toBengaliNumber = (num) => {
    const bengaliNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return String(num)
      .split("")
      .map((digit) => bengaliNumbers[Number(digit)])
      .join("");
  };

  const goToPreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  const goToNextPage = () => {
    if (activePage < totalPages) {
      setActivePage(activePage + 1);
    }
  };
  // data for custom banner
  const bannerData = {
    title: "লেখক",

    subTitle: " মাওলানা মুহাম্মাদ তাওহীদুল ইসলাম তায়্যিব",
  };
  const height = "h-44";

  return (
    <div className="font-bengali pt-24">
      {/* Banner Section */}
      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      {/* Main Content Grid */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0  md:gap-4 p-8">
          {/* Left Column with Articles and Right Border */}
          <div className="md:col-span-2 space-y-6 pr-4 relative">
            {/* Short right border */}
            <div className="absolute top-0 right-0 h-[474px] border-r-2 border-gray-200"></div>

            {/* Map through articles data */}
            {articles.map((article, index) => (
              <div key={index} className="border-b border-gray-300 pb-4 p-3">
                <div className="flex gap-0 md:gap-4 items-center">
                  <Link to={article.path2}>
                    <h3 className="text-white text-sm inline-block px-3 py-2 bg-yellow-600">
                      {article.date}
                    </h3>
                  </Link>

                  {article.another && (
                    <Link to={article.path3}>
                      <h3 className="text-sm text-white px-3 py-2 bg-yellow-600  hover:bg-yellow-700">
                        {article.another}
                      </h3>
                    </Link>
                  )}
                </div>
                <Link to={article.path1}>
                  <h4 className="text-xl my-5 hover:text-green-600">
                    {typeof formatTitle(article.title) === "string" ? (
                      formatTitle(article.title)
                    ) : (
                      <span>{formatTitle(article.title)}</span>
                    )}
                  </h4>
                </Link>

                <p className="text-gray-700 ">
                  {truncateDescription(article.description)}
                </p>
                <p className="text-gray-600 text-sm pt-3">{article.author}</p>
              </div>
            ))}
          </div>

          {/* Right Column with Recent Covers */}
          <div>
            <div className="flex items-center">
              <Link
                to={"/more"}
                className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
              >
                সাম্প্রতিক সংখ্যা »
              </Link>
              <img
                src={mosque}
                alt="mosque"
                className="w-8 h-auto -ml-[30px]"
              />
            </div>

            <div className="">
              <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 ">
                {[
                  coverOne,
                  coverTwo,
                  coverThree,
                  coverFour,
                  coverFive,
                  coverSix,
                ].map((cover, index) => (
                  <div key={index} className="relative group">
                    {/* Image */}
                    <img
                      src={cover}
                      alt={`Cover ${index + 1}`}
                      className="w-full h-auto"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div>
          <div className="flex gap-2 p-5 md:px-14">
            {/* Previous Button */}
            <button
              onClick={goToPreviousPage}
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === 1
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
              disabled={activePage === 1}
            >
              <FaChevronLeft />
            </button>

            {/* Page Numbers */}
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(page)}
                className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                  activePage === page
                    ? "bg-yellow-600 text-white"
                    : "text-black hover:bg-yellow-600 hover:text-white"
                }`}
              >
                {page === "..." ? "..." : toBengaliNumber(page)}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={goToNextPage}
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === totalPages
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
              disabled={activePage === totalPages}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tajib;
