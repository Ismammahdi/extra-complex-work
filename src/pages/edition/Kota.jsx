import React from "react";
import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";
import adStart from "../../assets/adstarts.png";
import coverOne from "../../assets/cover-1.jpg";
import coverTwo from "../../assets/cover-2.jpg";
import coverThree from "../../assets/cover-3.jpg";
import coverFour from "../../assets/cover-4.jpg";
import coverFive from "../../assets/cover-5.jpg";
import coverSix from "../../assets/cover-6.png";
import { Link } from "react-router-dom";

const Kota = () => {
  const tags = [
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
    { img: coverOne, alt: "image1", path: "/allIssues" },
    { img: coverTwo, alt: "cover_two", path: "/allIssues" },
    { img: coverThree, alt: "cover_three", path: "/allIssues" },
    { img: coverFour, alt: "cover_four", path: "/allIssues" },
    { img: coverFive, alt: "cover_five", path: "/allIssues" },
    { img: coverSix, alt: "cover_six", path: "/allIssues" },
  ];

  const headings = [{ name: "প্রসঙ্গসমূহ »", path: "/buttons" }];
  const current = [{ name: "সাম্প্রতিক সংখ্যা »", path: "/more" }];
  return (
    <div className=" font-bengali ">
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
                  জুমাদাল উলা ১৪৪৬ || নভেম্বর ২০২৪
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto p-0 md:p-6 mt-5 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-2 px-4 relative">
              <div className="absolute top-0 right-0 h-[890px] border-r-2 border-gray-200"></div>
              <Link to={"/anwarul-quran"}>
                <p className="px-3 py-2 bg-yellow-600 text-white inline-block">
                  আনওয়ারুল কুরআন
                </p>
              </Link>

              <p className="mt-6   text-3xl font-bold border-b-2 pb-3 border-gray-300">
                <span className="">
                  কোটা বিরোধী আন্দোলনে ব্যাপক হতাহতের ঘটনা
                </span>
                <br />
                <span>
                  এজাতীয় বিপর্যয়ে প্রয়োজন ধৈর্যধারণ ও আল্লাহমুখী হওয়া
                </span>
                <br />
                <span className="text-sm text-gray-500">
                  মাওলানা মুহাম্মাদ আনোয়ার হুসাইন
                </span>
                <br />
              </p>
              <p className="pt-4">
                <p className=" text-xl mb-5 leading-relaxed ">
                  আল্লাহ তাআলা কুরআন কারীমে ইরশাদ করেছেনÑ
                </p>
                <br />

                <br />
                <p className=" text-xl  mb-5  leading-relaxed">
                  অন্ধ ও চক্ষুষ্মান সমান হতে পারে না, এবং অন্ধকার ও আলোও নয়। আর
                  না ছায়া ও রোদ। এবং সমান হতে পারে না জীবিত ও মৃত। Ñসূরা ফাতির
                  (৩৫) : ১৯-২১
                </p>
                <br />

                <div className="text-lg leading-relaxed text-justify">
                  ইতিমধ্যে ইসরাইল তার তথাকথিত বাহাদুরি দেখিয়েছে হামাস প্রধান বীর
                  মুজাহিদ ইয়াহইয়া সিনওয়ারকে হত্যার মাধ্যমে। আমেরিকার বয়োবৃদ্ধ
                  প্রেসিডেন্ট জো বাইডেন খুব খুশি প্রকাশ করেছেন যে, ইয়াহইয়া
                  সিনওয়ারকে হত্যার মাধ্যমে ওই অঞ্চলে শান্তি আসবে। এমন কথা
                  ইসরাইলও বলেছে। এবারই প্রথম না, এর আগেও ইসরাইল যখন বড় কোনো
                  মুজাহিদকে শহীদ করতে পেরেছে, তখনই দাবি করেছে, ওই অঞ্চলে শান্তি
                  চলে আসবে। কিন্তু যতই তারা এমন হিংস্র আচরণ করেছে, ততই তারা
                  অনিরাপদ হয়েছে। তাদের জনগণের নিরাপত্তাহীনতা বেড়েছে। কারণ
                  মুজাহিদরা দমে যায়নি। নতুন করে উজ্জীবিত হয়েছে। এবারও সে ভুল
                  কথাই প্রচার করা হচ্ছে। তারা খুশিতে লাফাচ্ছে।
                </div>
                <br />

                <br />
                <div className="text-lg leading-relaxed text-justify">
                  <p>
                    প্রকৃতপক্ষে চোখ অন্ধ হয় না, বরং অন্ধ হয় বক্ষস্থিত হৃদয়।
                    Ñসূরা হজ¦ (২২) : ৪৬ <br /> <br />
                    আল্লাহ তাআলা সূরা রা‘দের শুরুতে মুমিন ও কাফেরের কর্ম, অবস্থা
                    ও পরিণতি উল্লেখ করেছেন। তারপরে তিনি উভয় দলের উপমা দিয়ে
                    বলেছেনÑ <br /> <br />
                    َ<br />এ দলদুটির উপমা অন্ধ ও বধির এবং চক্ষুষ্মান ও
                    শ্রবণশক্তিসম্পন্নের মতো। তুলনায় এরা উভয়ে কি সমান হতে পারে?
                    তথাপি কি তোমরা শিক্ষা গ্রহণ করবে না? Ñসুরা হূদ (১১) : ২৪{" "}
                    <br /> <br />
                    এ মর্মে আল্লাহ তাআলা আরো ইরশাদ করেছেনÑ
                    <br /> <br />
                    যে ব্যক্তি নিশ্চিত বিশ্বাস রাখে যে, আপনার প্রতিপালকের পক্ষ
                    থেকে আপনার প্রতি যা নাযিল হয়েছে তা সত্য, সে কি ওই ব্যক্তির
                    মতো হতে পারে, যে অন্ধ? বস্তুত উপদেশ কেবল তারাই গ্রহণ করে,
                    যারা বোধ-বুদ্ধির অধিকারী। Ñসূরা রা‘দ (১৩) : ১৯ <br /> <br />
                    আল্লাহ তাআলা এ কথা আরো স্পষ্ট করে অন্যত্র এভাবে বলেছেনÑ{" "}
                    <br /> <br />
                    <br /> <br />
                    বল তো, যে ব্যক্তি ছিল মৃত, অতঃপর আমি তাকে জীবন দিয়েছি এবং
                    তার জন্য এক আলোর ব্যবস্থা করেছি, যার সাহায্যে সে মানুষের
                    মধ্যে চলাফেরা করে, সে কি ওই ব্যক্তির মতো হতে পারে, যার
                    অবস্থা এই যে, সে অন্ধকার দ্বারা পরিবেষ্টিত, যা থেকে সে কখনো
                    বের হতে পারবে না? এভাবেই কাফেরদের দৃষ্টিতে তাদের কৃতকর্মকে
                    আকর্ষণীয় করে তোলা হয়েছে। Ñসূরা আনআম (৬) : ১২
                    <br /> <br />
                    উল্লিখিত আয়াতগুলো থেকে এ কথা স্পষ্ট যে, আল্লাহ তাআলার প্রতি
                    যে ব্যক্তি ঈমান রাখে, তার হৃদয় আলোকিত এবং সে-ই প্রকৃত
                    চক্ষুষ্মান। আর যে আল্লাহর প্রতি ঈমান রাখে না, তার হৃদয়
                    অন্ধকার এবং সেই প্রকৃত অন্ধ।
                    <br /> <br />
                    প্রথমোক্ত আয়াতে আল্লাহ তাআলা বলেছেন, ‘অন্ধ ও চক্ষুষ্মান সমান
                    হতে পারে না’। যে ব্যক্তি আল্লাহ তাআলার প্রতি ঈমান এনেছে, আর
                    যে তাঁর প্রতি ঈমান আনেনি, উভয়ে একরকম নয়। যে তার
                    সৃষ্টিকর্তাকে চিনেছে, তাঁর আদেশ-নিষেধ মেনে চলে, আর যে তার
                    সৃষ্টিকর্তার অবাধ্যতা করে, দুজনে একই স্তরের নয়। যে আলোর পথ
                    চলে আর যে অন্ধকারে পথ হারিয়ে বসেছে, তারা কি বরাবর হতে পারে?
                    <br /> <br />
                    যারা জিদ ও হঠকারিতাবশত সত্য গ্রহণ করছে না, তাদেরকে উক্ত
                    আয়াতগুলোতে অন্ধ ও মৃততুল্য বলা হয়েছে এবং তাদের কুফরী ও
                    অবাধ্যতাকে অন্ধকারের সাথে তুলনা করা হয়েছে। সত্য স্পষ্ট, তবুও
                    তারা দেখছে না। ইসলাম দিবালোকের মতো উজ্জ্বল, কিন্তু তারা
                    ইসলামের পথে না চলে অন্ধকার কুফরীতে হোঁচট খেয়ে চলছে। ঈমানের
                    আলো গ্রহণ না করে শয়তানের অনুসরণে পথহারা হয়ে ঘুরছে। এ
                    পথভ্রষ্ট অবস্থায় তারা কখনো গন্তব্যে পৌঁছতে পারবে না। কোন্
                    পথে প্রকৃত সফলতাÑ তা খুঁজে পাবে না; তারা অন্ধ এবং পথও চলছে
                    অন্ধকারে। যে হৃদয় ঈমানের প্রাণপ্রাচুর্যে সজীব হয়নি, সে হৃদয়
                    প্রাণহীন, মৃততুল্য। তারা মৃত ব্যক্তির মতো কিছু দেখে না, শোনে
                    না। মৃত মানুষের মতো তাদেরও ভালোমন্দ বোধ নেই।
                    <br />
                    <br />
                    এর বিপরীতে সত্যের অনুসারীদেরকে চক্ষুষ্মান ও জীবন্ত বলা হয়েছে
                    এবং দ্বীন-ইসলামকে আলোর সাথে তুলনা করা হয়েছে। ঈমান হল
                    আলোকবর্তিকা। আল্লাহ তাআলার দেওয়া এ আলোকবর্তিকা সঙ্গে নিয়ে যে
                    রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের অনুসরণ করে
                    আলোকোজ্জ্বল ইসলামের পথে চলে, সে তো ভালো-মন্দ সবকিছু
                    স্পষ্টভাবে দেখছে। এ আলোয় পথ চলতে থাকলে সে পথ হারাবে না। সে
                    নিশ্চয়ই গন্তব্য ও সফলতা খুঁজে পাবে। এ আলোয় পথ চললে সে তার
                    আসল গন্তব্য জান্নাতে পৌঁছে যাবে। ঈমানের আলো গ্রহণ করে সে যে
                    সত্য-সঠিক ইসলামের পথে চলছে, তাই সে চক্ষুষ্মান, আলোকিত ও
                    জীবন্ত।
                    <br /> <br />
                    যারা সঠিকভাবে দ্বীন-ইসলাম মেনে চলে, আজকাল তাদেরকে অনেকে বলে
                    ‘ধর্মান্ধ’। অর্থাৎ তারা বলতে চায়, ‘দ্বীনের অনুসারীরা অন্ধ ও
                    গোঁড়া, তারা অন্ধের মতো ধর্মের অনুসরণ করে, বাছবিচার করে না।
                    আর আমরা চক্ষুষ্মান ও আলোকিত, কারণ আমরা ধর্মের কিছু জিনিস
                    মানি, আর কিছু জিনিস মানি না।’ অথবা হয়তো তারা ‘ধর্মান্ধ’ বলে
                    বোঝাতে চায়, ‘যারা ধর্মের অনুসরণ করে তারা অন্ধ। কারণ ধর্ম
                    অন্ধকার ও পশ্চাৎপদ। আর যারা ধর্ম মানে না, তারা চক্ষুষ্মান!’
                    <br />
                    <br />
                    অথচ যারা ইসলামের অনুশাসন মেনে চলে, আল্লাহ তাআলা তাদেরকেই
                    উপরিউক্ত আয়াতগুলোতে চক্ষুষ্মান ও আলোকিত বলেছেন। আল্লাহ তাআলা
                    কুরআনে আরো বলেছেন, ‘তোমরা পুরোপুরি ইসলাম ধর্মের অনুসরণ কর।
                    ইসলাম ধর্ম ছাড়া অন্য কিছু আল্লাহর কাছে গ্রহণীয় নয়’।
                    <br /> <br />
                    ইসলাম ধর্ম হল সুস্পষ্ট ও আলোকিত একটা পথ। যারা জীবনের
                    সর্বক্ষেত্রে ঈমানের আলোয় ইসলামের পথে চলবে, তারা পুরোপুরি
                    আলোকিত মানুষ। তারা ধর্মান্ধ নয়; বরং ধর্মপ্রাণ। চোখ আছে,
                    ভালো-মন্দ দেখতে ও বুঝতে পারে এবং আলো ও সত্যকে মনেপ্রাণে ধারণ
                    করতে চায় বলেই তারা দ্বীনের অনুশাসন মেনে চলে। গোমরাহীর
                    অন্ধকারে পথ হারায় না।
                    <br /> <br />
                    অন্যদিকে যারা ধর্মপ্রাণ মানুষকে ‘ধর্মান্ধ’ বলে, তাদের অনেকে
                    প্রবৃত্তিপূজারী, আবার অনেকে ধর্মবিদ্বেষী। তাদের চর্মচক্ষু
                    আছে বটে, কিন্তু তাদের হৃদয় অন্ধকার। তাই তারা অধর্ম ও
                    গোমরাহীর অন্ধকারে নিমজ্জিত। সে অন্ধকারকে তারা আবার আলো ও
                    প্রগতি বলে বিভ্রমে পড়ে আছে। আল্লাহ তাআলা উপরোক্ত আয়াতসমূহে
                    তাদেরকেই লক্ষ করে বলেছেন ‘অন্ধ ও বধির’ এবং তারা ‘অন্ধকার
                    দ্বারা পরিবেষ্টিত’। তারা যা কিছুকে আলো বলছে এবং যে আলোর দিকে
                    মানুষকে ডাকছে, আল্লাহ তাআলা সেগুলোকে অন্ধকার বলেছেন। তারা
                    যাদেরকে অন্ধ বলছে, আল্লাহ তাদেরকেই চক্ষুষ্মান বলেছেন। আর কে
                    না জানে, আল্লাহ তাআলার কথাই চিরন্তন সত্য। <br />
                    <br />
                    এই প্রকৃত অন্ধরা কিয়ামতের দিন কবর থেকে চোখেরও অন্ধত্ব নিয়ে
                    পুনরুত্থিত হবে। তখন তারা বলবে, আল্লাহ! আমি দুনিয়ায় থাকতে
                    দেখতে পেতাম। আজ আপনি আমাকে অন্ধ করে ওঠালেন কেন? এ কথা আল্লাহ
                    তাআলা কুরআন কারীমে এভাবে বলেছেনÑ <br /> <br />
                    <p className="text-center text-lg">
                      وَ مَنْ اَعْرَضَ عَنْ ذِكْرِیْ فَاِنَّ لَهٗ مَعِیْشَةً
                      ضَنْكًا وَّ نَحْشُرُهٗ یَوْمَ الْقِیٰمَةِ اَعْمٰی، قَالَ
                      رَبِّ لِمَ حَشَرْتَنِیْۤ اَعْمٰی وَ قَدْ كُنْتُ بَصِیْرًا،
                      قَالَ كَذٰلِكَ اَتَتْكَ اٰیٰتُنَا فَنَسِیْتَهَا وَ
                      كَذٰلِكَ الْیَوْمَ تُنْسٰی.
                    </p>
                    <br /> <br />
                    আর যে আমার উপদেশ থেকে মুখ ফিরিয়ে নেবে, তার জীবন হবে বড়
                    সংকটময়। আর কিয়ামতের দিন আমি তাকে অন্ধ করে ওঠাব। সে বলবে, হে
                    রব! আপনি আমাকে অন্ধ করে ওঠালেন কেন? আমি তো চক্ষুষ্মান ছিলাম!
                    আল্লাহ বলবেন, এভাবেই তোমার কাছে আমার আয়াতসমূহ এসেছিল, কিন্তু
                    তুমি তা ভুলে গিয়েছিলে। আজ সেভাবেই তোমাকে ভুলে যাওয়া হবে।
                    Ñসূরা ত্বহা (২০) ১২৪-১২৬ <br /> <br />
                    অন্যত্র ইরশাদ হয়েছেÑ <br /> <br />
                    <p className="text-center text-lg">
                      {" "}
                      مَنْ كَانَ فِیْ هٰذِهٖۤ اَعْمٰی فَهُوَ فِی الْاٰخِرَةِ
                      اَعْمٰی وَ اَضَلُّ سَبِیْلًا.
                    </p>
                    আর যে ব্যক্তি দুনিয়ায় অন্ধ হয়ে থেকেছে সে আখেরাতেও অন্ধ এবং
                    অধিকতর পথভ্রষ্ট থাকবে। Ñসূরা বনী ইসরাঈল (১৫) : ৭২ <br />{" "}
                    <br />
                    আর যারা দুনিয়ায় প্রকৃত চক্ষুষ্মান, তারা আখেরাতেও আল্লাহর
                    পক্ষ থেকে আলোপ্রাপ্ত হবে। তাদের কাছে সেদিন ওই অন্ধরাও আলো
                    চাইবে। আল্লাহ তাআলা কুরআন কারীমে বলেনÑ
                    <br /> <br />
                    <p className="text-center text-lg">
                      وْمَ تَرَی الْمُؤْمِنِیْنَ وَ الْمُؤْمِنٰتِ یَسْعٰی
                      نُوْرُهُمْ بَیْنَ اَیْدِیْهِمْ وَ بِاَیْمَانِهِمْ
                      بُشْرٰىكُمُ الْیَوْمَ جَنّٰتٌ تَجْرِیْ مِنْ تَحْتِهَا
                      الْاَنْهٰرُ خٰلِدِیْنَ فِیْهَا ذٰلِكَ هُوَ الْفَوْزُ
                      الْعَظِیْمُ، یَوْمَ یَقُوْلُ الْمُنٰفِقُوْنَ وَ
                      الْمُنٰفِقٰتُ لِلَّذِیْنَ اٰمَنُوا انْظُرُوْنَا نَقْتَبِسْ
                      مِنْ نُّوْرِكُمْ قِیْلَ ارْجِعُوْا وَرَآءَكُمْ
                      فَالْتَمِسُوْا نُوْرًا فَضُرِبَ بَیْنَهُمْ بِسُوْرٍ لَّهٗ
                      بَابٌ بَاطِنُهٗ فِیْهِ الرَّحْمَةُ وَ ظَاهِرُهٗ مِنْ
                      قِبَلِهِ الْعَذَابُ، یُنَادُوْنَهُمْ اَلَمْ نَكُنْ
                      مَّعَكُمْ قَالُوْا بَلٰی وَ لٰكِنَّكُمْ فَتَنْتُمْ
                      اَنْفُسَكُمْ وَ تَرَبَّصْتُمْ وَ ارْتَبْتُمْ وَ
                      غَرَّتْكُمُ الْاَمَانِیُّ حَتّٰی جَآءَ اَمْرُ اللهِ وَ
                      غَرَّكُمْ بِاللهِ الْغَرُوْرُ.
                    </p>
                    <br />
                    <br />
                    সেদিন তুমি মুমিন পুরুষ ও মুমিন নারীগণকে দেখবে, তাদের আলো
                    তাদের সামনে ও তাদের ডান দিকে ধাবিত হচ্ছে (এবং তাদেরকে বলা
                    হবে,) তোমাদের জন্য আজ এমন সব উদ্যানের সুসংবাদ, যার নিচে নহর
                    প্রবাহিত থাকবে, যাতে তোমরা সর্বদা থাকবে। এটাই মহা সাফল্য।
                    সেদিন মুনাফিক পুরুষ ও মুনাফিক নারীরা মুমিনগণকে বলবে, আমাদের
                    জন্য একটু অপেক্ষা কর, যাতে তোমাদের আলো থেকে আমরাও কিছুটা আলো
                    গ্রহণ করতে পারি। তাদেরকে বলা হবে, তোমরা তোমাদের পেছনে ফিরে
                    যাও, তারপর আলো তালাশ কর। তারপর তাদের মাঝখানে স্থাপিত হবে
                    একটি প্রাচীর। তার মধ্যে থাকবে একটি দরজা, যার অভ্যন্তরে থাকবে
                    রহমত এবং বাইরে থাকবে শাস্তি। তারা মুমিনগণকে ডেকে বলবে, আমরা
                    কি তোমাদের সঙ্গে ছিলাম না? মুমিনগণ বলবে, হাঁ, ছিলে বটে,
                    কিন্তু তোমরা নিজেরাই নিজেদেরকে বিপদে ফেলেছ। তোমরা অপেক্ষা
                    করছিলে, সন্দেহে নিপতিত ছিলে এবং মিথ্যা আশা তোমাদেরকে ধোঁকায়
                    ফেলে রেখেছিল যতক্ষণ না আল্লাহর হুকুম আসল। আর সেই মহাপ্রতারক
                    (অর্থাৎ শয়তান) তোমাদেরকে আল্লাহ সম্পর্কে প্রতারিত করে
                    যাচ্ছিল। Ñসূরা হাদীদ (৫৭) : ১২-১৪
                    <br /> <br />
                    অতএব যাদেরকে আল্লাহ তাআলা ঈমানের আলো দিয়ে চক্ষুষ্মান করেছেন,
                    তারা অন্ধ বা ধর্মান্ধ নয়, পথহারা বা ভ্রান্তপথেও নয়; বরং
                    আল্লাহ তাআলা তাদেরকেই চক্ষুষ্মান ও আলোকিত বলেছেন এবং তারাই
                    সঠিক পথপ্রাপ্ত। আল্লাহ তাআলা তাদেরকে ঈমানহারা অন্ধদের চেয়ে
                    উত্তম বলেছেন। চক্ষুষ্মান ঈমানদারগণ এবং ঈমানহারা অন্ধরা
                    কিছুতেই বরাবর হতে পারে না। আর তাই তাদের কর্তব্য হল, জীবনের
                    সকল ক্ষেত্রে এ আলোয় পথ দেখে চলা। এ আলো সঙ্গে নিয়ে
                    রাসূলুল্লাহ সাল্লাল্লাহু আলাইহি ওয়াসাল্লামের অনুসরণ করে
                    চললেই তারা সফল হতে পারবে, গন্তব্যে পৌঁছতে পারবে। সেইসঙ্গে
                    তাদের দায়িত্ব, সর্বত্র এ আলো ছড়িয়ে দেওয়া। যারা এ আলো পায়নি,
                    তাদের কাছে তা পৌঁছে দেওয়া, আর যারা মুখ ফিরিয়ে অন্ধকারে
                    উ™£ান্ত হয়ে ঘুরে বেড়াচ্ছে, তাদের কাছে এ আলোর মাহাত্ম্য তুলে
                    ধরা।
                    <br />
                    <br />
                    মুমিনদের একমাত্র অভিভাবক আল্লাহ তাআলা। আর যারা আল্লাহর আশ্রয়
                    গ্রহণ করেনি, তারা শয়তানের অনুসারী। যারা আল্লাহর অভিমুখী হয়,
                    আল্লাহ তাদেরকে অন্তর্চক্ষু দান করেন এবং অন্ধকার থেকে আলোয়
                    নিয়ে আসেন। আর শয়তান তার অনুসারীদেরকে প্রলোভন দেখিয়ে আলো থেকে
                    অন্ধকারে নিয়ে যায়। যার প্রতি আল্লাহ তাআলা অনুগ্রহ করে তার
                    হৃদয়ে ঈমানের আলো দিয়েছেন এবং তাকে সঠিক পথে নিয়ে এসেছেন; এর
                    পরেও যদি সে হেলায় খেলায় পথ হারিয়ে ফেলে, তার চেয়ে বেশি
                    ক্ষতিগ্রস্ত আর কেউ নয়।
                    <br />
                    <br />
                    চক্ষুষ্মান হওয়া এবং নিজের ঠিকানা জানার পরেও লক্ষ্যে পৌঁছতে
                    না পারা চরম নির্বুদ্ধিতা। অতএব প্রত্যেক মুমিনের আবশ্যক,
                    আল্লাহ যে তাকে ঈমানের আলো দান করে চক্ষুষ্মান বানিয়েছেন,
                    সেজন্য আল্লাহর শোকরগোযার হওয়া এবং এ আলোয় নিজেকে পরিপূর্ণ
                    আলোকিত করে ইসলামের পথে চলা। <br />
                    <br />
                  </p>
                </div>
                <br />
              </p>
              <div className="flex flex-col md:flex-row mt-5 items-start md:items-center gap-4">
                <div className="text-xl mb-2 md:mb-0">প্রসঙ্গসমূহ:</div>
                <div className="flex flex-wrap gap-3">
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    দ্বীনিয়াত
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    অনৈতিকতা
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    মনীষী/স্মরণ
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    স্মৃতিচারণ/জীবন থেকে
                  </p>
                  <p className="px-3 py-1 text-white hover:bg-yellow-700 bg-yellow-600 inline-block text-center ">
                    নীতি-নৈতিকতা
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <img src={adStart} alt="adStart" className="w-full" />
              </div>
            </div>

            <div className="mt-6 ">
              <div className="flex items-center right ">
                {headings.map((article, i) => (
                  <h2 className="text-2xl hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                    <Link key={i} to={article.path}>
                      {article.name}
                    </Link>
                  </h2>
                ))}

                <img src={mosque} alt="mosque" className="w-8 h-auto -ml-6" />
              </div>
              <div className="abc px-4 py-6">
                <div className="flex flex-wrap gap-3 mb-6 pb-5 border-b border-gray-200">
                  {tags.map((tag, index) => (
                    <Link
                      to={tag.path}
                      key={index}
                      className="px-3 py-1 text-gray-800 hover:bg-gray-500 hover:text-white  bg-gray-200  text-center"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
                <div className="text-center flex justify-start mt-4">
                  <Link to={"/buttons"}>
                    <button className="px-6 py-2 bg-green-600 text-white font-semibold  hover:bg-green-700">
                      আরো »
                    </button>
                  </Link>
                </div>
                <div className="mt-8">
                  <div className="flex items-center right ">
                    <h2 className="text-2xl  hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      {current.map((article, i) => (
                        <Link key={i} to={article.path}>
                          {article.name}
                        </Link>
                      ))}
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>
                  <div className="">
                    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 ">
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
            </div>

            {/* right section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kota;
