import React from "react";
import bannerImage from "../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../assets/mosque.svg";
import { Link } from "react-router-dom";
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

const Banner = () => {
  const articles = [
    {
      subtitle: "বিশেষ সম্পাদকীয়",
      content:
        "সংখ্যার। রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়া সাল্লামের সিরাত থেকে যুগের দ্র. মুহাম্মদ ইলিয়াসের দৃষ্টিতে ও তাঁরই দায়িত্বের দায়িত্ব নিবরনে দৃষ্টিগ্রহন করিতেন। ভেতো পাতা আইহ।",
      hasButton: true, // Indicate that this article should have a button
      path: "/blind",
    },
    {
      title: "মতান্দোলন",
      subtitle: "দ্বীন ও শরীয়তের আধুনিকীকরণের আলোকে বিকৃতিসাধন",
      content:
        "বিশ্ব খলিফার ইসলামী বিশ্ব নামা ফেকারা  ও আধুনিকতার প্রসারের সাথে ইসলামী পরিসরে যে সকল খারিজী ও ইসমায়েলের  কোরান। যে একলা ফেকারা বিদ্বেষের।",
      path: "/baitul",
    },
    {
      title: "নামাজের খুশু হাসিল হবে যেভাবে",
      content:
        "হাদার ও সালাতের পর... তো কোরক ফোকলিয়ে খুশু সংক্রান্ত আলোচনা হয়েছে। বলা হয়েছে, খুশু কেনের বিশেষ কোন আনলিক বৈশিষ্ট নয়, বরং খুশু মুসলিমের বৈশিষ্ট। rtyuxij xayuicbsnkc  cuascnka csaicnk cslhhcipocichuhacsiscn csoncjsaojc csaajcjasi",
      author: "মাওলানা মুহাম্মাদ আব্দুল মালেক",
      path: "/baitul",
    },
    {
      title: "কাদিয়ানী সম্প্রদায় অমুসলিম হওয়ার কারণ",
      content:
        "ভুমিকা আচার তওবহ লেনিক। একমাতর মসলীর জন্য। ইসলামী মদলিক্য কাফ্র। ইসলামী মুং আল্লাহ। অগার তারুরিক রনেপর।",
      author: "মাওলানা মুহাম্মাদ সাজিদুল ইসলাম",
      path: "/textbook",
    },
  ];

  const bannerData = {
    title: "বর্ষ: ২০,",
    sideTitle: "সংখ্যা: ১১",
    subTitle: " জুমাদাল উলা ১৪৪৬   ||   নভেম্বর ২০২৪",
    bannerRightSide: {
      subTitle: "গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান ",
      title: " মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা",
      personTitle: "এর মুখপাত্র",
    },
  };
  const height = "h-40 md:h-56";

  return (
    <div className=" ">
      {/* Banner Section */}

      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      {/* Additional Content Below Banner */}
      <div className="mt-0 md:mt-0 font-bengali">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-3 py-2 md:py-0 font-bengali">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-50 border-l border-b border-gray-200 p-6 space-y-5"
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
                  className="text-xl font-medium text-black mb-2 hover:text-yellow-600"
                >
                  {article.title}
                </Link>
              </div>

              <Link
                to={article.path}
                className="text-lg font-medium mb-4 hover:text-yellow-600"
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
    </div>
  );
};

export default Banner;
