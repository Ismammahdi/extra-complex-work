import React, { useState } from "react";

import mosque from "../assets/mosque.svg";
import adStart from "../assets/adstarts.png";
import adAfter from "../assets/adAfter.jpg";
import adEnd from "../assets/adEnds.jpg";
import cover from "../assets/cover_oct_24.jpg";
import sishuad from "../assets/sishu.jpg";
import nari from "../assets/nari.png";
import sample from "../assets/sample.png";
import cover_one from "../assets/cover-1.jpg";
import cover_two from "../assets/cover-2.jpg";
import cover_three from "../assets/cover-3.jpg";
import cover_four from "../assets/cover-4.jpg";
import cover_five from "../assets/cover-5.jpg";
import cover_six from "../assets/cover-6.png";
import { Link } from "react-router-dom";

const OtherArticles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles = [
    {
      title:
        "আলজাজিরার প্রতিবেদন সংগ্রামী বীর মুজাহিদ ইয়াহইয়া সিনওয়ার রাহ. শেষ রক্তবিন্দু পর্যন্ত লড়ে গেছেন যিনি",
      description: "এই প্রবন্ধে ২০২৩ এর বাংলাদেশ ঐতিহাসিক পর্যালোচনায়...",
      path: "/alzajira",
    },
    {
      title: "জর্জ বার্নার্ড শ’র ভবিষ্যদ্বাণী",
      description:
        "শেরাশিয়ারের পর জর্জ বার্নার্ড শ-কে (George Bernard Shaw)...",
      path: "/sahadat",
    },
  ];
  // student page
  const studentArticles = [
    {
      title: "ইলম ও আমলে নূরানিয়াত ও গভীরতা আনার চেষ্টা করি",
      path: "/anwarul-quran",
    },
  ];

  const alQuran = [
    { title: "কুরআনের ভাষায় মানবহত্যার ভয়াবহতা", path: "/spatialedition" },
    { title: "বান্দা জানে নাকীসে তার কল্যাণ", path: "/spatialedition" },
  ];
  const Quran = [{ title: "খবর ... অতঃপর ...", path: "/spatialedition" }];

  const hajjArticles = [
    {
      number: "১  ",
      month: "মুহাররম ১৪৪০",
      title: "হজ্বের পর : হজ্ব-পরবর্তী জীবনের আলোক-প্রদীপ",
      path: "/hera",
    },
    {
      number: "২",
      month: "মুহাররম ১৪৩৭",
      title: "হজ্বের পরে নতুন জীবন",
      path: "/hera",
    },
    {
      number: "৩",
      month: "শাওয়াল ১৪৩০",
      title: "হজ্ব : যা দান করে আত্মত্যাগ ও আত্মনিবেদনের শিক্ষা",
      path: "/hera",
    },
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

  return (
    <div className="container mt-10  mx-auto px-3 py-3 md:py-8 md:px-16  font-bengali">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-3 ">
        <div className="col-span-2">
          <div className="grid  space-x-0 md:grid-cols-1 lg:grid-cols-2">
            <div className=" py-6">
              <div className="flex items-center">
                <h2 className="text-xl hover:text-green-600 text-gray-700  font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                  অন্যান্য প্রবন্ধসমূহ »
                </h2>
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>

              <div className="item-section space-y-4">
                {articles.map((article, index) => (
                  <Link
                    to={article.path}
                    key={index}
                    className="border-b border-gray-200 py-6 pb-4 flex items-start"
                  >
                    <span className="mr-2 mt-1 text-yellow-700">&gt;</span>
                    <div>
                      <a
                        href="#"
                        className="font-medium text-lg hover:text-green-600"
                      >
                        {article.title}
                      </a>
                      <p className="text-gray-700">{article.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className=" p-6">
              <div className="flex items-center">
                <Link
                  to={"/anwarul-quran"}
                  className="text-xl hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]"
                >
                  আনওয়ারুল কুরআন »
                </Link>
                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>
              <div className="item-map space-y-4">
                {alQuran.map((quran, index) => (
                  <Link
                    to={quran.path}
                    key={index}
                    className="border-b hover:text-green-600 border-gray-200 py-0 pb-4 flex items-start"
                  >
                    <span className="mr-2 mt-1 text-yellow-700">&gt;</span>
                    <div className="text-xl">{quran.title}</div>
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
              {/* student page */}
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
                <div className="item-map space-y-2">
                  {studentArticles.map((articel, index) => (
                    <Link
                      to={articel.path}
                      key={index}
                      className="border-b hover:text-green-600 border-gray-200  pb-4 flex items-start"
                    >
                      <span className="mr-2 mt-1 text-yellow-700">&gt;</span>
                      <div className="text-xl">{articel.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <Link
                    to={"/common-mistakes"}
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
                <div className="item-map space-y-4">
                  {Quran.map((article, index) => (
                    <Link
                      to={article.path}
                      key={index}
                      className="pt-4 text-base border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-start">
                        <span className="mr-2 text-yellow-700">&gt;</span>
                        <div>
                          <a href="#" className="hover:text-green-600">
                            {article.title}
                          </a>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="add-section mt-8">
            <img src={adStart} alt="adstart" className="w-full bg-contain" />
            <div className="mt-8">
              <img src={adAfter} alt="adAfter" className="w-full bg-contain" />
            </div>
            <img src={adEnd} alt="adEnd" className="w-full bg-contain" />
          </div>
        </div>

        <div className="item  space-y-6 border-l border-gray-200 p-3">
          <div className="flex items-center">
            <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
              প্রচ্ছদ
            </h2>
            <img src={mosque} alt="mosque" className="w-8 h-auto -ml-[30px]" />
          </div>
          <div className="cover">
            <img
              src={cover}
              alt="Cover"
              className=" w-full md:w-3/4 lg:w-1/2   h-auto object-cover border mx-auto cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          <img
            src={sishuad}
            alt="Second Ad"
            className="w-full h-auto object-cover border"
          />
          <img
            src={nari}
            alt="Third Ad"
            className="w-full h-auto object-cover border"
          />

          <div className="">
            <div className="flex items-center">
              <Link
                to={"/anwarul-quran"}
                className="text-2xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
              >
                হজ্ব পরবর্তী জীবন »
              </Link>
              <img
                src={mosque}
                alt="mosque"
                className="w-8 h-auto -ml-[30px]"
              />
            </div>
            <div className="map-item space-y-6">
              {hajjArticles.map((article, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 border-b"
                >
                  <span className="text-2xl font-bold border-b-4 border-gray-400 text-gray-700 p-3">
                    {article.number}
                  </span>
                  <div className="flex flex-col space-y-1 py-4">
                    <Link to={"/allissues"}>
                      <div className="bg-[#D2973B] text-white px-3 py-2 text-xs w-24 text-center inline-block">
                        {article.month}
                      </div>
                    </Link>

                    <div>
                      <Link to={article.path}>
                        <a
                          href="#"
                          className="font-semibold text-lg text-gray-800 hover:text-green-600"
                        >
                          {article.title}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <Link to={"/anwarul-quran"}>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-3  mt-4">
                  আরও »
                </button>
              </Link>
            </div>
          </div>
          <div>
            <img src={sample} alt="sample" className="w-full" />
          </div>
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
              <div className=" flex flex-wrap gap-2 md:gap-3 border-b border-gray-200 pb-3">
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
            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-5">
              <Link to={"/allissues"}>
                <img
                  src={cover_one}
                  alt="image1"
                  className="w-full h-auto"
                ></img>
              </Link>
              <Link to={"/allissues"}>
                <img
                  src={cover_two}
                  alt="cover_two"
                  className="w-full h-auto"
                />
              </Link>
              <Link to={"/allissues"}>
                <img
                  src={cover_three}
                  alt="cover_three"
                  className="w-full h-auto"
                />
              </Link>
              <Link to={"/allissues"}>
                <img
                  src={cover_four}
                  alt="cover_three"
                  className="w-full h-auto"
                />
              </Link>
              <Link to={"/allissues"}>
                <img
                  src={cover_five}
                  alt="cover_three"
                  className="w-full h-auto"
                />
              </Link>
              <Link to={"/allissues"}>
                <img
                  src={cover_six}
                  alt="cover_three"
                  className="w-full h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={cover}
              alt="Cover Large"
              className="max-w-full max-h-screen"
            />
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherArticles;
