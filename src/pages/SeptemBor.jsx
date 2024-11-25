import React, { useEffect, useState } from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
// import adStart from "../assets/adstarts.png";
// import adAfter from "../assets/adAfter.jpg";
// import adEnd from "../assets/adEnds.jpg";
import adStart from "../assets/adstarts.png";
import cover_two from "../assets/cover-2.jpg";
import cover_one from "../assets/cover-1.jpg";

import cover_three from "../assets/cover-4.jpg";
import cover_four from "../assets/cover-5.jpg";
import cover_five from "../assets/cover-6.png";
import cover_six from "../assets/cover_oct_24.jpg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiCustomink } from "react-icons/si";
import CustomBanner from "../components/shared/CustomBanner";
import CustomArticle from "../components/shared/CustomArticle";

// Helper function to truncate content
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ...";
  }
  return text;
};

// Helper function to truncate description at 18 words
const truncateDescription = (text, wordLimit = 13) => {
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

const SeptemBor = () => {
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
      subtitle: "দ্বিতীয় স্বাধীনতা ॥ এটিকে সুসংহত করতে হবে",
      content:
        "অন্তর্বর্তীকালীন সরকারের জন্য শুভ কামনা দীর্ঘ স্বৈরশাসন, গুম-খুন-হত্যা, জুলুম-নির্যাতনের পর, দেশকে শিক্ষা, সংস্কৃতি, অর্থনীতি সকল ক্ষেত্রে ধ্বংসের দ্বারপ্রান্তে পৌঁছে দেওয়ার পর অবশেষে বিদায় নিয়েছেন শেখ হাসিনা ও তার …",
      hasButton: true, // Indicate that this article should have a button
      path: "/reform",
    },
    {
      subtitle:
        "দীর্ঘ স্বৈরশাসনের পতন ॥ এ যে সর্বশক্তিমান আল্লাহ তাআলার পাকড়াও",
      content:
        "ভদ্রলোক একটু দ্রুতই হেঁটে যাচ্ছিলেন। পেছন থেকে ‘হাই’ ডাক শুনে ঘুরে দাঁড়ালেন। দেখলেনÑ স্মার্ট এক যুবক রাস্তার পাশে দাঁড়িয়ে কিছু বিক্রি করছেন। মুখ ফেরাতেই বলে উঠলেন, হাসিনা বাই (বিদায় হাসিনা)। লোকটির মুখ দিয়ে…",
      author: "মুফতি আবুল হাসান মুহাম্মাদ আব্দুল্লাহ",
      path: "/dictator",
    },
    {
      title: "সাহসী তারুণ্য স্পর্শ করুক নেকীর আসমান",
      content:
        "সময় ও পরিস্থিতির পালাবদল আল্লাহ তাআলার একটি শাশ্বত নীতি। ইতিহাসের শুরু থেকেই এই ধারার উজ্জ্বল উপস্থিতি পাওয়া যায়। বর্তমান ও ভবিষ্যতেও এর নজীর ফুটে উঠবে। অনেক সময় এমন হয় যে, জুলুম ও উৎপীড়নের দমবন্ধ অন্ধকার চারদ…",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
      path: "/brave",
    },
    {
      title: "হেরার আলো॥ এ আলোয় আবার উদ্ভাসিত হোক পৃথিবী",
      content:
        "যখন জাবালে নূরে চড়লাম তখন সেই গুহার পাশে দাঁড়ালাম, গারে হেরা নামে যা সমধিক প্রসিদ্ধ। মনে মনে বললাম, এটা তো সেই পবিত্র স্থান, যেখানে প্রিয় নবী হযরত মুহাম্মাদ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম সর্বপ্রথম ওহী লাভ করেছ…",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
      path: "/hera",
    },
  ];
  const anotherArticles = [
    {
      title:
        "হযরত মাওলানা আবদুল হাই পাহাড়পুরী হুজুর রাহ. ॥সংক্ষিপ্ত জীবনালেখ্য",
      description:
        "(পূর্ব প্রকাশিতের পর) হযরত পাহাড়পুরী হুজুর রাহ. ‘হাফেজ্জী হুজুর স্মারকগ্রন্থে’ তাঁর নূরিয়া-জীবনের একটি গ…",
      path: "/biography",
    },
    {
      title: "বণিক বার্তার প্রতিবেদন",
      description:
        "১৫ বছরে আওয়ামী সরকার ঋণ করেছে সাড়ে ১৫ লাখ কোটি টাকার বেশি এ সময়ে দেশ থেকে পাচার হয়েছে প্রায় ১৫০ বিল",
      path: "/sahadat",
    },
    {
      title: "মজলুম হওয়ার সুফল ধরে রাখি",
      description:
        "জুলুম আল্লাহ তাআলার নিকট অত্যন্ত ঘৃণিত হারাম কাজ। আল্লাহ তাআলা জুলুম করেন না এবং তিনি জুলুম ও জুলুমকারী",
      path: "/modern",
    },
    {
      title: "মজলুম ফিলিস্তিনীদের কথা যেন ভুলে না যাই",
      description:
        "এই লেখাটি যখন প্রস্তুত হচ্ছে, তখন ফিলিস্তিনের গাজা উপত্যকায় ইসরাইলের বিরামহীন ও পৈশাচিক গণহত্যার ১১তম মাস",
      path: "/modern",
    },
    {
      title: "গাজার হালহাকীকত নিয়ে দুটি লেখা",
      description:
        "[ওয়াসআতুল্লাহ খান। সিনিয়র সাংবাদিক এবং বিবিসি উর্দূ ও এক্সপ্রেস নিউজ নেটওয়ার্ক-এর নিয়মিত কলাম লেখক। তূফ",
      path: "/gaza",
    },
  ];
  const articlesTwo = [
    {
      title: "আল্লাহর অনুগত শাসকের করণীয় ॥ কুরআনের দুটি নির্দেশনা",
      path: "/ruler",
    },
    {
      title: "কুরআনের বার্তা ॥ নিরাপদ সমাজ গড়তে আল্লাহমুখিতা কাম্য",
      path: "/hera",
    },
    // Add more items if necessary
  ];
  const articlesThree = [];
  const articlesFour = [
    {
      title: "আকলে আম কীভাবে হাসিল করব?",
      path: "/akol",
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
  const bannerData = {
    title: "বর্ষ: ২০,",
    sideTitle: "সংখ্যা: ০৯",
    subTitle: " রবিউল আউয়াল ১৪৪৬   ||   সেপ্টেম্বর ২০২৪",
    bannerRightSide: {
      subTitle: "গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান ",
      title: " মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা",
      personTitle: "এর মুখপাত্র",
    },
  };
  const height = "h-40 md:h-52";

  return (
    <div className="pt-24">
      {/* Banner Section */}
     
      {/* Custom banner section */}
      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      {/* Additional Content Below Banner */}
      <div className=" font-bengali">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 py-0 font-bengali">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white space-y-6 hover:bg-gray-50 border-l border-b border-gray-200 p-6"
            >
              {article.hasButton && (
                <Link to={"/anwarul-quran"}>
                  <button className="mb-3 px-2 py-1 bg-[#D2973B] text-white font-semibold  hover:bg-yellow-700">
                    সম্পাদকীয়
                  </button>
                </Link>
              )}
              <div>
                <Link
                  to={article.path}
                  className="text-xl hover:text-yellow-700 font-medium text-black mb-2"
                >
                  {article.title}
                </Link>
              </div>

              <Link
                to={article.path}
                className="text-xl font-medium mb-4 hover:text-yellow-700"
              >
                {article.subtitle}
              </Link>
              <p className="text-gray-700 mb-4">
                {truncateText(article.content, 35)}
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
        <div className="container mx-auto mt-10 px-3 md:px-12 py-3   font-bengali">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 md:gap-3 ">
            <div className="col-span-2">
              <div className="grid  space-x-6 md:grid-cols-1 lg:grid-cols-2">
                {/* First Column - Other Articles */}
                <div className="  py-6">
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
                    <div className="item-map1">
                      {anotherArticles.map((article, index) => (
                        <Link to={article.path}>
                          <div
                            key={index}
                            className="pb-4 pt-4 border-b border-dashed border-gray-300"
                          >
                            <div className="flex items-start space-x-2">
                              <FaChevronRight className="text-yellow-500 mt-1" />
                              <div>
                                <h3 className="hover:text-green-600 text-lg text-gray-800">
                                  {article.title}
                                </h3>
                                <p className="text-gray-600">
                                  {truncateDescription(article.description)}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Column - Quran Section */}
                <div className=" py-6">
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
                      <Link to={article.path}>
                        <div
                          key={index}
                          className="pb-4 border-b border-dashed border-gray-300"
                        >
                          <div className="flex  space-x-2">
                            <FaChevronRight className="text-yellow-500 mt-1" />
                            <h3 className="hover:text-green-600  text-lg text-gray-800">
                              {article.title}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    ))}
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
                  {/* chuasxihccihsacijicsnjxi */}
                  <div className="item-map3 space-y-4">
                    {articlesThree.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <div className="flex items-start space-x-2">
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <div>
                            <h3 className="hover:text-green-600 text-lg text-gray-800">
                              {article.title}
                            </h3>
                            <p className="text-gray-800 text-xl">
                              {truncateDescriptionTwo(article.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="flex items-center">
                      <Link
                        to={"/student-page"}
                        className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
                      >
                        শিক্ষার্থীদের পাতা »
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
                            <h3 className=" text-lg hover:text-green-600 text-gray-800">
                              {article.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Add section starts */}
              <div className="mt-8">
                <img
                  src={adStart}
                  alt="adstart"
                  className="w-full bg-contain"
                />
              </div>
            </div>

            {/* Third Column - Images, Ads, and Hajj Articles */}
            <div className="space-y-6 border-l border-gray-200  p-3">
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
                    src={cover_two} // replace with your image path
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
                        src={cover_two} // replace with your image path
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
                    <button className="px-4 py-3 mt-5 bg-green-600 hover:bg-green-700 text-white ">
                      আরও »
                    </button>
                  </div>
                </div>
              </div>
              {/* simple image grid section */}
              <div>
                {/* importent */}
                <div className="flex items-center">
                  <h2 className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
                    সাম্প্রতিক সংখ্যা »
                  </h2>
                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-8 h-auto -ml-[30px]"
                  />
                </div>
                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { img: cover_one, alt: "image1", path: "/allIssues" },
                    { img: cover_two, alt: "cover_two", path: "/allIssues" },
                    {
                      img: cover_three,
                      alt: "cover_three",
                      path: "/path-three",
                    },
                    { img: cover_four, alt: "cover_four", path: "/allIssues" },
                    { img: cover_five, alt: "cover_five", path: "/allIssues" },
                    { img: cover_six, alt: "cover_six", path: "/allIssues" },
                  ].map((cover, index) => (
                    <div key={index} className="relative">
                      <Link to={cover.path}>
                        <img
                          src={cover.img}
                          alt={cover.alt}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 top-0 right-0 left-0 hover:bg-white opacity-20"></div>
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

export default SeptemBor;
