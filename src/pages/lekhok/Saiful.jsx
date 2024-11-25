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
    date: "রজব ১৪৪৫",
    another: "",
    title: "দিনের শেষে হিসাব-১",
    description:
      "দিনের শেষে হিসাব-১। প্রতিটি দিনের শেষে একটু হিসাব নেওয়ার চেষ্টা করা উচিত। এতে আমরা আল্লাহর কাছে কতটা খালেস থাকতে পেরেছি এবং কোথায় আমাদের উন্নতি করতে হবে তা জানা যায়।",
    author: "মাওলানা আরিফুল ইসলাম",
    path1: "/dictator",
    path2: "/allissues",
  },
  {
    date: "রজব ১৪৪৫",
    title: "নবীর সুন্নাত",
    description:
      "নবীর সুন্নাত এক মহান অনুগ্রহ। মুসলমানরা নিজেদের প্রতিদিনের জীবনে নবীর সুন্নাতের আলোকে চললে আখিরাতে কল্যাণ লাভ করবে।",
    author: "মাওলানা যাকারিয়া হোসাইন",
    path2: "/allissues",
  },
  {
    date: "রজব ১৪৪৫",
    title: "কুরআন : মুসলিমদের জন্য দিশারী",
    description:
      "কুরআন মুসলিমদের জন্য একটি মহান দিশারী। এটি মানুষের ইহকাল এবং পরকালের কল্যাণের জন্য পাথেয় হিসেবে কাজ করে।",
    author: "মাওলানা আব্দুল করিম",
    path2: "/allissues",
  },
  {
    date: "রজব ১৪৪৫",
    title: "ইসলামের আদর্শ পরিপালন করতে হবে",
    description:
      "ইসলামের আদর্শ জীবনের প্রতিটি ক্ষেত্রে প্রযোজ্য। আল্লাহর পথে চলতে হলে ইসলামের প্রতিটি আদেশ পালনের চেষ্টা করতে হবে।",
    author: "মাওলানা মুহাম্মাদ আব্দুল্লাহ",
    path2: "/allissues",
  },
  {
    date: "রজব ১৪৪৫",
    another: "",
    title: "হযরত আলীর উপদেশাবলী",
    description:
      "হযরত আলীর উপদেশাবলী মুসলিমদের জন্য অত্যন্ত মূল্যবান। এতে এমন সব নসীহত রয়েছে যা মানুষকে আল্লাহর পথে চলতে সাহায্য করে।",
    author: "মাওলানা আব্দুল মালেক",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "তাকওয়া : আল্লাহর সন্তুষ্টি অর্জনের মাধ্যম",
    description:
      "তাকওয়া হল আল্লাহর সন্তুষ্টি অর্জনের মাধ্যম। আল্লাহর সন্তুষ্টির জন্য কুরআন এবং হাদিসের আলোকে জীবন পরিচালিত করতে হবে।",
    author: "মাওলানা শফিকুল ইসলাম",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "নবীর সুন্নাতে কল্যাণ : প্রিয় দুনিয়া",
    description:
      "নবীর সুন্নাতে কল্যাণ নিহিত। দুনিয়াকে প্রিয় করে নেওয়া এবং এর আসক্তি থেকে বেঁচে থাকা জরুরি। আল্লাহ ও তাঁর রাসূলের পথ অনুসরণই আমাদের সফলতার কারণ।",
    author: "মাওলানা সাইফুল্লাহ",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    another: "",
    title: "ইসলামের প্রতি আন্তরিকতা : কিছু কথা",
    description:
      "ইসলামের প্রতি আন্তরিকতা থাকা খুবই গুরুত্বপূর্ণ। আল্লাহর পথে চলতে হলে ইসলামের প্রতি আন্তরিকভাবে নিবেদিত থাকতে হবে।",
    author: "মাওলানা আবুল হাসান",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "ঈমানদারদের জীবন যাপন",
    description:
      "ঈমানদারদের জীবন যাপন কুরআন এবং হাদিসের আলোকে পরিচালিত হওয়া উচিত। ইসলামের শিক্ষাগুলো জীবনের প্রতিটি ক্ষেত্রে প্রয়োগ করতে হবে।",
    author: "মাওলানা মুহাম্মাদুল্লাহ",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "সর্বোত্তম আমল : নামাজের গুরুত্ব",
    description:
      "নামাজ ইসলামের অন্যতম স্তম্ভ এবং সর্বোত্তম আমল। নিয়মিত নামাজ আদায়ের মাধ্যমে আল্লাহর সন্তুষ্টি অর্জিত হয়।",
    author: "মাওলানা আব্দুল মতিন",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",

    title: "জুমার দিনে সুন্নাত পালন",
    description:
      "জুমার দিনে সুন্নাত পালন অত্যন্ত গুরুত্বপূর্ণ। আল্লাহর প্রিয় বান্দা হতে হলে নবীর সুন্নাতের প্রতি মনোযোগী হতে হবে।",
    author: "মাওলানা ইবরাহীম",
    path2: "/allissues",
  },
  {
    date: "শাবান ১৪৪৫",
    title: "বিশ্ব মানবতার উন্নতির পথে : দাওয়াত মিশনের অপরিহার্যতা",
    description:
      "বিশ্ব মানবতার উন্নতির জন্য দাওয়াত মিশনের প্রয়োজন। ইসলামের দাওয়াত বিশ্বমানবতার জন্য আল্লাহর এক মহান দান।",
    author: "মাওলানা মুহাম্মাদ আবু বকর",
    path2: "/allissues",
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

const Saiful = () => {
  const [activePage, setActivePage] = useState(1);
  const pages = [1, 2, 3, "...", 7, 8, 9];

  const handlePageClick = (page) => {
    if (page !== "...") {
      setActivePage(page);
    }
  };
  // data for custom component
  const bannerData = {
    title: "লেখক",

    subTitle: " মুফতি আবুল হাসান মুহাম্মাদ আব্দুল্লাহ",
  };
  const height = "h-44";

  return (
    <div className="font-bengali pt-24">
      {/*Custom Banner Section */}
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
                <div className="flex gap-4 items-center">
                  <Link to={article.path2}>
                    <h3 className="text-white text-sm inline-block px-3 py-2 bg-yellow-600">
                      {article.date}
                    </h3>
                  </Link>

                  {article.another && (
                    <h3 className="text-sm text-white px-3 py-2 bg-yellow-600  hover:bg-yellow-700">
                      {article.another}
                    </h3>
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
              onClick={() =>
                handlePageClick(activePage > 1 ? activePage - 1 : 1)
              }
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === 1
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
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
                {page}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() =>
                handlePageClick(activePage < 9 ? activePage + 1 : 9)
              }
              className={`w-10 h-10 border border-yellow-600 flex items-center justify-center ${
                activePage === 9
                  ? "text-gray-400"
                  : "text-black hover:bg-yellow-600 hover:text-white"
              }`}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saiful;
