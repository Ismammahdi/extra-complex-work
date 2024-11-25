import { useState } from "react";

// import mosque from "../../assets/mosque.svg";

import adStart from "../../assets/adstarts.png";
import cover_two from "../../assets/cover-2.jpg";
import cover_one from "../../assets/cover-1.jpg";
import cover_three from "../../assets/cover-3.jpg";

import cover_four from "../../assets/cover-5.jpg";
import cover_five from "../../assets/cover-6.png";
import cover_six from "../../assets/cover_oct_24.jpg";
import { useParams } from "react-router-dom";
import CustomBanner from "../../components/shared/CustomBanner";
import CustomAnowarulQuran from "../../components/shared/issues/CustomAnowarulQuran";
import OthersEssays from "../../components/shared/issues/OthersEssays";
import CustomParagraph from "../../components/shared/issues/CustomParagraph";
import CustomArticle from "../../components/shared/CustomArticle";

const MonthlyIssues = () => {
  const { month } = useParams();

  // baner data
  const bannerData = {
    title: "বর্ষ: ২০,",
    sideTitle: "সংখ্যা: ০৮",
    subTitle: " সফর ১৪৪৬   ||   আগস্ট ২০২৪",
    bannerRightSide: {
      subTitle: "গবেষণামূলক উচ্চতর শিক্ষা প্রতিষ্ঠান ",
      title: " মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা",
      personTitle: "এর মুখপাত্র",
    },
  };
  const height = "h-40 md:h-52";

  // four articles
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

  const othersEssays = [
    {
      title:
        "হযরত মাওলানা আবদুল হাই পাহাড়পুরী হুজুর রাহ. ॥ সংক্ষিপ্ত জীবনালেখ্য",
      description:
        "[সুফিয়ান ইবনে উয়াইনা রাহ. বলেছেন- عِنْدَ ذِكْرِ الصَّالِحِيْنَ تَنْزِلُ الرَّحْمَةُ সালিহীনের আলোচনায় রহমত নাযিল হয়। -হ",
      path: "/modern",
    },
    {
      title:
        "জাতীয় জাদুঘরে কাদিয়ানীদের কুরআন প্রদর্শনী ॥ এটি কি কুরআন-প্রেম, নাকি মুসলমানদের কুরআনের বিকৃতি?",
      description:
        "গত ২৮ জুন ২০২৪ বাংলাদেশের আহমদীয়া জামাত তথা কাদিয়ানী সম্প্রদায় শাহবাগ জাদুঘরের শেখ ফজিলাতুন্নিসা মুজিব",
      path: "/modern",
    },
    {
      title: "এক টুকরো জমি",
      description:
        "সে রাতে আকাশে চাঁদ ছিল। স্নিগ্ধ আলোয় গোটা কুরাইশ নগর যেন ভেসে যাচ্ছিল। এই গ্রামের এত সুন্দর নাম কীভাবে হ",
      path: "/modern",
    },
    {
      title:
        "আলওয়ারা‘সন্দেহপূর্ণ বিষয় থেকে বেঁচে থাকা ॥ মুত্তাকীদের বিশেষ গুণ",
      description:
        "আতিয়্যা সা‘দী রা. বলেন, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন- لَا يَبْلُغُ العَبْدُ أَنْ يَكُوْنَ مِنَ المُ",
      path: "/modern",
    },
    {
      title: "দাঈদের প্রতি, সকলের প্রতি পুনর্যাত্রার প্রস্তুতি এখনই শুরু হোক",
      description:
        "চারদিকে অনাচার-অবিচার দেখতে দেখতে আমরা হাঁপিয়ে উঠেছি। মানুষের মনুষ্যত্ব আজ কোথায় গিয়ে পৌঁছেছে! নিয়ম-ন",
      path: "/modern",
    },
  ];
  const anowarulQuran = [
    {
      title:
        "হযরত মাওলানা আবদুল হাই পাহাড়পুরী হুজুর রাহ. ॥ সংক্ষিপ্ত জীবনালেখ্য",
      path: "/modern",
    },
    {
      title:
        "জাতীয় জাদুঘরে কাদিয়ানীদের কুরআন প্রদর্শনী ॥ এটি কি কুরআন-প্রেম, নাকি মুসলমানদের কুরআনের বিকৃতি?",
      path: "/modern",
    },
  ];

  const allIssues = [
    {
      title: "আপনি যা জানতে চেয়েছেন",
      path: "/answer",
      issues: [
        {
          title:
            "আলওয়ারা‘সন্দেহপূর্ণ বিষয় থেকে বেঁচে থাকা ॥ মুত্তাকীদের বিশেষ গুণ",
          description:
            "আতিয়্যা সা‘দী রা. বলেন, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন- لَا يَبْلُغُ العَبْدُ أَنْ يَكُوْنَ مِنَ المُ",
          path: "/modern",
        },
        {
          title:
            "দাঈদের প্রতি, সকলের প্রতি পুনর্যাত্রার প্রস্তুতি এখনই শুরু হোক",
          description:
            "চারদিকে অনাচার-অবিচার দেখতে দেখতে আমরা হাঁপিয়ে উঠেছি। মানুষের মনুষ্যত্ব আজ কোথায় গিয়ে পৌঁছেছে! নিয়ম-ন",
          path: "/modern",
        },
      ],
    },
    {
      title: "শিক্ষার্থীদের পাতা",
      path: "/student-page",
      issues: [
        {
          title:
            "আলওয়ারা‘সন্দেহপূর্ণ বিষয় থেকে বেঁচে থাকা ॥ মুত্তাকীদের বিশেষ গুণ",
          description:
            "আতিয়্যা সা‘দী রা. বলেন, রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেছেন- لَا يَبْلُغُ العَبْدُ أَنْ يَكُوْنَ مِنَ المُ",
          path: "/modern",
        },
        {
          title:
            "দাঈদের প্রতি, সকলের প্রতি পুনর্যাত্রার প্রস্তুতি এখনই শুরু হোক",
          description:
            "চারদিকে অনাচার-অবিচার দেখতে দেখতে আমরা হাঁপিয়ে উঠেছি। মানুষের মনুষ্যত্ব আজ কোথায় গিয়ে পৌঁছেছে! নিয়ম-ন",
          path: "/modern",
        },
      ],
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

  const covers = [
    { img: cover_one, alt: "image1", path: "/allIssues" },
    { img: cover_two, alt: "cover_two", path: "/allIssues" },
    { img: cover_three, alt: "cover_three", path: "/allIssues" },
    { img: cover_four, alt: "cover_four", path: "/allIssues" },
    { img: cover_five, alt: "cover_five", path: "/allIssues" },
    { img: cover_six, alt: "cover_six", path: "/allIssues" },
  ];

  return (
    <div className="pt-24">
      <CustomBanner bannerData={bannerData} height={height}></CustomBanner>

      {/* top four article */}
      <CustomArticle articles={articles}></CustomArticle>

      <div className="">
        <div className="container mx-auto px-3 md:px-12 py-6 mt-10   font-bengali">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5  md:gap-3  ">
            <div className="col-span-2">
              <div className="grid space-x-0 md:space-x-3 md:grid-cols-1 lg:grid-cols-2">
                {/* others essays */}
                <OthersEssays othersEssays={othersEssays} />

                {/* no problem */}
                <CustomAnowarulQuran
                  anowarulQuran={anowarulQuran}
                  allIssues={allIssues}
                />
              </div>

              {/* no problem */}
              <div className="mt-8">
                <img
                  src={adStart}
                  alt="adstart"
                  className="w-full bg-contain"
                />
              </div>
            </div>

            {/* paragraphs, procched, samprotik songkha */}
            <CustomParagraph
              bookImg={cover_three}
              topics={topics}
              covers={covers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyIssues;
