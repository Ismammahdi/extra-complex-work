import CustomSecondBanner from "../../components/shared/CustomSecondBanner";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Question = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please verify the reCAPTCHA.");
      return;
    }
    // Proceed with form submission logic
    alert("Form submitted successfully!");
  };
  // data for custom component
  const secondBannerData = {
    title: "আপনার জিজ্ঞাসা",
  };

  const bannerHeight = "h-48";
  return (
    <div className="font-bengali">
      <div>
        <CustomSecondBanner
          secondBannerData={secondBannerData}
          bannerHeight={bannerHeight}
        ></CustomSecondBanner>
      </div>
      <div className="container mx-auto p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2 ">
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-xl text-blue-600">
                আপনার একান্ত ব্যক্তিগত মাসআলা সরাসরি দারুল ইফতায় এসে অথবা
                নির্ধারিত সময়ে ফোন করে জেনে নেওয়ার জন্য অনুরোধ করা যাচ্ছে।
              </li>
              <li className="text-xl text-blue-600">
                আপনার একান্ত ব্যক্তিগত মাসআলা সরাসরি দারুল ইফতায় এসে অথবা
                নির্ধারিত সময়ে ফোন করে জেনে নেওয়ার জন্য অনুরোধ করা যাচ্ছে।
              </li>
              <li className="text-xl text-blue-600">
                আমাদের লোকবলের তুলনায় প্রশ্নের সংখ্যা অনেক বেশি থাকে তাই আপনার
                উত্তরের জন্য দয়া করে ধৈর্যের সাথে অপেক্ষা করুন।
              </li>
              <li className="text-xl text-blue-600">
                আপনার প্রশ্নের উত্তর তাড়াতাড়ি জানা প্রয়োজন হলে সরাসরি দারুল
                ইফতায় যোগাযোগ করুন।
              </li>
              <li className="text-xl text-blue-600">
                আপনার পাঠানো প্রশ্নের উত্তরটি আপনার ব্যবহৃত ই-মেইল আইডিতে পাঠানো
                হবে। তবে প্রশ্নভেদে কোনো কোনোটির উত্তর মাসিক আলকাউসারেও ছাপা হতে
                পারে।
              </li>
              <li className="text-xl text-blue-600">
                প্রশ্ন পাঠানোর পর বারবার তাগাদা দেওয়ার বদলে আলকাউসারের পরবর্তী
                সংখ্যাগুলো নিয়মিত পড়তে থাকুন এবং নিজের মেইলের প্রতি লক্ষ্য
                রাখুন।
              </li>
              <li className="text-xl text-blue-600">
                মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা-এর ফতোয়া বিভাগের সীলমোহর ও
                দায়িত্বশীলগণের স্বাক্ষর সংবলিত আনুষ্ঠানিক ফতোয়ার জন্য সংশ্লিষ্ট
                ফতোয়া বিভাগের যাবতীয় প্রক্রিয়া সম্পন্ন করতঃ সরাসরি যোগাযোগ করা
                যেতে পারে।
              </li>
              <li className="text-xl text-blue-600">
                এ প্রক্রিয়ায় শুধু ঐ সকল প্রশ্নের জবাব দেওয়ার চেষ্টা করা হয়,
                যেগুলোর উত্তরের জন্য প্রশ্নের বেশি ব্যাখ্যার প্রয়োজন পড়ে না এবং
                যেগুলো ব্যক্তি পর্যায়ের। যে প্রশ্নের জবাবের জন্য বিশদ বিবরণের
                প্রয়োজন হয় অথবা প্রশ্নকারী বা সংশ্লিষ্টদের সাথে কথা বলার প্রয়োজন
                পড়ে এবং যে সকল বিষয় জাতীয় ও ব্যাপক পর্যায়ের সেগুলোর জবাব এ
                সংক্ষিপ্ত আয়োজনে সাধারণত দেওয়া হয় না। এমন প্রশ্নের জবাব প্রয়োজন
                হলে সরাসরি ফতোয়া বিভাগে যোগাযোগ করার জন্য অনুরোধ করা হল।
              </li>
            </ul>
            <br />
            <br />
            <p className="text-xl text-blue-600">
              এছাড়াও মৌখিকভাবে মাসআলা জানার জন্য নির্ধারিত সময়ের প্রতি লক্ষ্য
              রেখে নিম্নবর্ণিত নম্বরে যোগাযোগ করা যেতে পারে।
            </p>
            <br />
            <p className="font-bold text-xl text-blue-600">
              ১। মাওলানা আনওয়ার হুসাইন
            </p>
            <br />
            <p className="text-xl text-blue-600">সময় : সকাল ১০টা থেকে ১১ টা</p>
            <br />
            <p className="text-xl text-blue-600">মোবাইল : ০১৯১৫-৪৮২৯৩৩</p>
            <br />
            <br />
            <p className="font-bold text-xl text-blue-600">
              ২। মাওলানা মুহাম্মাদ ফয়যুল্লাহ
            </p>
            <br />
            <p className="text-xl text-blue-600">সময় : দুপুর ৩টা থেকে ৪টা</p>
            <br />
            <p className="text-xl text-blue-600">মোবাইল : ০১৭২৩-৮৫৪১৮০।</p>
            <br />
            <div className="  space-y-4">
              {/* Name Field */}
              <div>
                <label className="block  text-2xl   mb-1">নাম:</label>
                <input
                  type="text"
                  className="w-[270px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="নাম লিখুন"
                />
              </div>

              {/* Address Field */}
              <div>
                <label className="block text-2xl   mb-1">ঠিকানা:</label>
                <input
                  type="text"
                  className="w-[270px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="ঠিকানা লিখুন"
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-2xl  mb-1">মোবাইল নম্বর:</label>
                <input
                  type="text"
                  className="w-[270px] border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="মোবাইল নম্বর লিখুন"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-2xl  mb-1">ইমেইল:</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="ইমেইল লিখুন"
                />
              </div>

              {/* Question Field */}
              <div>
                <label className="block text-2xl mb-1">
                  জিজ্ঞাসা (বাংলায় লিখুন):
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="আপনার প্রশ্ন লিখুন"
                ></textarea>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* reCAPTCHA */}
                <div className="flex justify-start">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="YOUR_RECAPTCHA_SITE_KEY" // Replace with your actual site key from Google
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="bg-green-600 text-white text-xl font-semibold px-8 py-4 "
                  >
                    জমা দিন
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Question;
