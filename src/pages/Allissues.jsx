import React, { useEffect, useState } from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
import adStart from "../assets/adstarts.png";

import cover from "../assets/cover-1.jpg";
import cover_one from "../assets/cover-2.jpg";
import cover_two from "../assets/cover-3.jpg";
import cover_three from "../assets/cover-4.jpg";
import cover_four from "../assets/cover-5.jpg";
import cover_five from "../assets/cover-6.png";
import cover_six from "../assets/cover_oct_24.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CustomBanner from "../components/shared/CustomBanner";
import CustomArticle from "../components/shared/CustomArticle";
import Procolitovulcustom from "../components/shared/Procolitovulcustom";

// Helper function to truncate content
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

// Helper function to truncate description at 18 words
const truncateDescription = (text, wordLimit = 15) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};
const truncateDescriptionTwo = (text, wordLimit = 9) => {
  const words = text.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + " ..."
    : text;
};

const Allissues = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10); // Small delay to allow adding the class for animation
  };

  const handleModalClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 300); // Duration of animation to smoothly close the modal
  };

  useEffect(() => {
    if (!isModalOpen) {
      setIsAnimating(false);
    }
  }, [isModalOpen]);
  const articles = [
    {
      subtitle: "বিশেষ সম্পাদকীয়",
      content:
        "সংখ্যার। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের সিরাত থেকে যুগের দ্র. মুহাম্মদ ইলিয়াসের দৃষ্টিতে ও তাঁরই দায়িত্বের দায়িত্ব নিবরনে দৃষ্টিগ্রহন করিতেন। ভেতো পাতা আইহ।",
      hasButton: true, // Indicate that this article should have a button
      path: "/reform",
    },
    {
      subtitle: "দ্বীন ও শরীয়তের আধুনিকীকরণের আলোকে বিকৃতিসাধন",
      content:
        "বিশ্ব খলিফার ইসলামী বিশ্ব নামা ফেকারা  ও আধুনিকতার প্রসারের সাথে ইসলামী পরিসরে যে সকল খারিজী ও ইসমায়েলের  কোরান। যে একলা ফেকারা বিদ্বেষের।",
      path: "/modern",
    },
    {
      title: "নামাজের খুশু হাসিল হবে যেভাবে",
      content:
        "হাদার ও সালাতের পর... তো কোরক ফোকলিয়ে খুশু সংক্রান্ত আলোচনা হয়েছে। বলা হয়েছে, খুশু কেনের বিশেষ কোন আনলিক বৈশিষ্ট নয়, বরং খুশু মুসলিমের বৈশিষ্ট। ",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
      path: "/modern",
    },
    {
      title: "কাদিয়ানী সম্প্রদায় অমুসলিম হওয়ার কারণ",
      content:
        "ভুমিকা আচার তওবহ লেনিক। একমাতর মসলীর জন্য। ইসলামী মদলিক্য কাফ্র। ইসলামী মুং আল্লাহ। অগার তারুরিক রনেপর।",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
      path: "/modern",
    },
  ];
  const anotherArticles = [
    {
      title: "শৈরাতন্ত্রের পতন জাতিকে যে বার্তা দিল",
      description:
        "৫ই আগস্ট ২০২৪ বাংলাদেশের ইতিহাসে সংযোজিত হয় এক নতুন অধ্যায়। ছাত্র-জনতার অভ্যুত্থান অব্যাহত এবং তাদের ব",
      path: "/modern",
    },
    {
      title: "জর্জ বার্নার্ড শ’র ভবিষ্যদ্রষ্টা",
      description:
        "শিল্পপতির পর জর্জ বার্নার্ড শ-কে (George Bernard Shaw) ইংরেজির দ্বিতীয় বড় উপন্যাসিক ও সাহিত্যিক মনে করা",
      path: "/sahadat",
    },
  ];
  const articlesTwo = [
    {
      title: "অন্ধ ও চক্ষুষ্মান বরাবর নয়",
      path: "/servent",
    },
    // Add more items if necessary
  ];
  const articlesThree = [
    {
      title: "একটি বিদ্বেষহীন বর্ণনা",
      description:
        "জামাতের নামাযে সুরা ফাতেহাহ শুরু থেকে শরীক হওয়ার নির্দেশ ফযীলত",
      path: "/modern",
    },
    {
      title: "একটি বিদ্বেষহীন কাহিনী",
      description:
        "বেলাল রা.-কে মেরে আল্লাহর পরীক্ষা নিয়েছেন, যেমন হাঁড়ি কেমন সময়...",
      path: "/modern",
    },
    {
      title: "একটি বিদ্বেষহীন দুআ",
      description: "খাওয়ার শুরুতে লবণ মুখে দেওয়ার দুআ",
      path: "/fault",
    },
  ];
  const articlesFour = [
    {
      title: "খবর ... অতঃপর ...",
      path: "/afternews",
    },
    // Add more items if necessary
  ];

  const topics = [
    { name: "ঈমান-আকাইদ", path: "/akaid" },
    { name: "একটি ভুল নাম", path: "/akaid" },
    { name: "শিক্ষা/সিলেবাস", path: "/akaid" },
    { name: "আল-কুদস সংখ্যা", path: "/akaid" },
    { name: "নামাজ-সালাত", path: "/akaid" },
    { name: "তাহারাত", path: "/akaid" },
    { name: "রমযান প্রস্তাব", path: "/akaid" },
    { name: "হজ্জ", path: "/akaid" },
    { name: "যাকাত", path: "/akaid" },
    { name: "মুয়ামালাত-লেনদেন", path: "/akaid" },
    { name: "তাসাউফ-আধ্যাত্মিকতা", path: "/akaid" },
    { name: "ইসলামী অর্থনীতি", path: "/akaid" },
    { name: "দাওয়াত ও তাবলীগ", path: "/akaid" },
    { name: "শেয়ার ব্যবসা", path: "/akaid" },
    { name: "শবে বরাত", path: "/akaid" },
    { name: "শবে মিরাজ", path: "/akaid" },
    { name: "ঈদ", path: "/akaid" },
    { name: "নারী অধিকার", path: "/akaid" },
    { name: "বিদআত", path: "/akaid" },
    { name: "সীরাত", path: "/akaid" },
  ];

  const covers = [
    { img: cover_one, alt: "image1", path: "/" },
    { img: cover_two, alt: "cover_two", path: "/" },
    { img: cover_three, alt: "cover_three", path: "/" },
    { img: cover_four, alt: "cover_four", path: "/" },
    { img: cover_five, alt: "cover_five", path: "/" },
    { img: cover_six, alt: "cover_six", path: "/" },
  ];
  const bannerData = {
    title: "বর্ষ: ২০,  ",
    sideTitle: " সংখ্যা: ১০",
    subTitle: "রবিউল আখির ১৪৪৬   ||   অক্টোবর ২০২৪",
    bannerRightSide: {
      subTitle: "গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান ",
      title: " মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা",
      personTitle: "এর মুখপাত্র",
    },
  };

  const height = "h-40 md:h-52";
  return (
    <div className="pt-24 ">
      {/* Banner Section */}

      {/* <div
        className="relative min-w-full bg-cover bg-top w-full h-56 flex items-center font-bengali "
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-16 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-4">
              <div className="w-full md:w-[40%] font-bengali text-center md:text-left">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <h2 className="text-xl md:text-3xl text-white font-medium pb-1 md:pb-[10px] flex-grow border-b border-yellow-500">
                    বর্ষ: ২০, <span className="ml-1 md:ml-4">সংখ্যা: ১০</span>
                  </h2>

                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-6 h-auto mt-2 md:mt-0 md:w-12 md:-ml-4 hidden md:block"
                  />
                </div>

                <p className="mt-2 md:mt-4 text-2xl md:text-2xl">
                  রবিউল আউয়াল ১৪৪৬ || অক্টোবর ২০২৪
                </p>
              </div>

              <div className="w-full md:w-[50%] font-bengali hidden md:block text-white text-center md:text-left">
                <p className=" text-center text-xl font-medium">
                  গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান
                </p>
                <h2 className="text-center text-4xl font-medium">
                  মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা
                </h2>
                <p className="text-center text-lg">এর মুখপত্র</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Custom banner */}
      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      {/* Additional Content Below Banner */}
      <div className="mt-0 font-bengali">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-0 py-0 font-bengali">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-50 border-l border-b space-y-5 border-gray-200 p-6"
            >
              {article.hasButton && (
                <Link to={"/anwarul-quran"}>
                  {" "}
                  <button className="mb-3 px-2 py-1 bg-[#D2973B] text-white font-semibold  hover:bg-yellow-700">
                    সম্পাদকীয়
                  </button>
                </Link>
              )}
              <Link to={article.path}>
                <h2 className="text-xl hover:text-[#D2973B] font-medium text-black mb-2">
                  {article.title}
                </h2>
              </Link>

              <Link
                to={article.path}
                className="text-lg hover:text-[#D2973B] font-medium mb-4"
              >
                {article.subtitle}
              </Link>
              <p className="text-gray-700 mb-4">
                {truncateText(article.content, 20)}
              </p>
              {article.author && (
                <p className="text-gray-500 text-sm font-medium">
                  {article.author}
                </p>
              )}
             
            </div>
          ))}
        </div> */}
        <CustomArticle articles={articles}></CustomArticle>
      </div>

      <div className="">
        <div className="container mx-auto px-3 md:px-12 py-6 mt-10   font-bengali">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 md:gap-3 ">
            <div className="col-span-2">
              <div className="grid  md:space-x-3 md:grid-cols-1 lg:grid-cols-2">
                {/* First Column - Other Articles */}
                <div className=" py-6">
                  <div className="flex items-center">
                    <h2 className="text-xl hover:text-green-600 text-gray-700  font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      অন্যান্য প্রবন্ধসমূহ »
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  {/* ycsagcuahdeuchudevhuhuvhushsu */}
                  <div className="item-section space-y-4">
                    <div className="item-map1 ">
                      {anotherArticles.map((article, index) => (
                        <div
                          key={index}
                          className="border-b border-dashed border-gray-300 pb-4 pt-4"
                        >
                          <div className="flex items-start space-x-2">
                            <Link to={article.path}>
                              <FaChevronRight className="text-yellow-500 mt-1" />
                            </Link>
                            <div>
                              <Link to={article.path}>
                                <h3 className="hover:text-green-600 text-lg text-gray-800">
                                  {article.title}
                                </h3>
                              </Link>

                              <p className="text-gray-600">
                                {truncateDescription(article.description)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Column - Quran Section */}
                <div className=" p-6">
                  <div className="flex items-center">
                    <Link
                      to={"/anwarul-quran"}
                      className="text-xl hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]"
                    >
                      আনওয়ারুল কুরআন »
                    </Link>

                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  {/* bcjsaiscijaejeicjic */}
                  <div className="item-map2 space-y-4">
                    {articlesTwo.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <Link
                          to={article.path}
                          className="flex items-center space-x-2"
                        >
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <h3 className="hover:text-green-600  text-lg text-gray-800">
                            {article.title}
                          </h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div>
                    {articlesThree && articlesThree.length > 0 && (
                      <Procolitovulcustom
                        articles={articlesThree}
                        title="প্রচলিত ভুল »"
                        linkPath="/common-mistakes"
                        icon={mosque}
                      />
                    )}
                  </div>

                  <div className="flex items-center">
                    <Link
                      to={"/answer"}
                      className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
                    >
                      আপনি যা জানতে চেয়েছেন »
                    </Link>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-[30px]"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Link
                        to={"/anwarul-quran"}
                        className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
                      >
                        খবর ... অতঃপর ... »
                      </Link>
                      <img
                        src={mosque}
                        alt="mosque"
                        className="w-8 h-auto -ml-[30px]"
                      />
                    </div>
                    {/* mascnacmcqeimvrembemgmmmmmm */}
                    <div className="item-map4 space-y-4">
                      {articlesFour.map((article, index) => (
                        <Link
                          to={article.path}
                          key={index}
                          className="pb-4 border-b border-dashed border-gray-300"
                        >
                          <div className="flex items-center space-x-2">
                            <FaChevronRight className="text-orange-500 mt-1" />
                            <h3 className="font-bold text-lg hover:text-green-600 text-gray-800">
                              {article.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* img */}
              <div className="mt-6">
                <img src={adStart} alt="adsection" className="w-full" />
              </div>
              {/* Add section starts */}
            </div>

            {/* Third Column - Images, Ads, and Hajj Articles */}
            <div className="w-full space-y-3 sm:space-y-4 md:space-y-6 border-l border-gray-200 px-2 sm:px-3 md:px-4">
              <div className="flex items-center">
                <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                  প্রচ্ছদ
                </h2>
                <img
                  src={mosque}
                  alt="mosque"
                  className="w-8 h-auto -ml-[30px]"
                />
              </div>
              <div>
                {/* Image Thumbnail */}
                <div className="cover">
                  <img
                    src={cover} // replace with your image path
                    alt="Cover"
                    className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover border mx-auto cursor-pointer  "
                    onClick={handleModalOpen}
                  />
                </div>

                {/* Modal */}
                {isModalOpen && (
                  <div
                    className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300 ${
                      isModalOpen ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={handleModalClose} // Close modal on background click
                  >
                    <div
                      className={`relative w-full max-w-sm bg-white p-4 transform transition-transform duration-300 ease-in-out ${
                        isAnimating
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0"
                      }`}
                      onClick={(e) => e.stopPropagation()} // Prevent background click when clicking on content
                    >
                      {/* Close button */}
                      <button
                        onClick={handleModalClose}
                        className="absolute top-2 right-2 text-black text-xl font-bold"
                      >
                        &times;
                      </button>
                      {/* Large image in modal */}
                      <img
                        src={cover} // replace with your image path
                        alt="Cover Large"
                        className="w-full h-auto object-contain mx-auto"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Hajj Articles */}

              {/* topic section */}
              <div>
                <div className="flex items-center">
                  <Link
                    to={"/buttons"}
                    className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
                  >
                    প্রসঙ্গসমূহ »
                  </Link>
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-8 h-auto -ml-[30px]"
                  />
                </div>
                <div className="item">
                  {/* zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz */}
                  <div className="item-map5 flex flex-wrap gap-3 border-b border-gray-200 pb-3">
                    {topics.map((topic, index) => (
                      <Link
                        to={topic.path}
                        key={index}
                        className="px-3 py-1 text-gray-800 hover:bg-gray-500 hover:text-white  bg-gray-200  text-center"
                      >
                        {topic.name}
                      </Link>
                    ))}
                  </div>
                  <div>
                    <Link to={"/buttons"}>
                      <button className="px-4 py-3 mt-5 bg-green-600 hover:bg-green-700 text-white ">
                        আরও »
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* simple image grid section */}
              <div>
                {/* importent */}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {covers.map((cover, index) => (
                    <div key={index} className="relative">
                      <Link to={cover.path}>
                        <img
                          src={cover.img}
                          alt={cover.alt}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 hover:bg-white opacity-20"></div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal for cover image */}
        </div>
      </div>
    </div>
  );
};

export default Allissues;
