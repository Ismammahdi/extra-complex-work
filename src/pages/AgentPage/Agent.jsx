import React from "react";
import CustomSecondBanner from "../../components/shared/CustomSecondBanner";

const Agent = () => {
  const secondBannerData = {
    title: "গ্রাহক ও এজেন্ট হওয়ার নিয়ামাবলী",
  };

  const bannerHeight = "h-48";

  return (
    <div className="font-bengali ">
      <CustomSecondBanner
        secondBannerData={secondBannerData}
        height="1px" // Customize height here
        width="490px" // Customize width here
        bannerHeight={bannerHeight}
      />

      <div className="container mx-auto p-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <h2 className="py-5 text-2xl font-bold">এজেন্সি বিষয়ক জ্ঞাতব্য</h2>
            <br />
            <p className="text-lg">» সর্বনিম্ন পাচঁ কপির এজেন্সি দেওয়া হয়</p>
            <br />
            <p className="text-lg">
              » প্রতি বিশ কপিতে একটি সৌজন্য কপি, ৫০ কপিতে ৩টি, ১০০ কপিতে ৭টি
              সৌজন্য দেওয়া হয়
            </p>
            <br />
            <p className="text-lg">» অর্ডার পেলে পত্রিকা ভিপিতে পাঠানো হয়</p>
            <br />
            <p className="text-lg">» অবিক্রিত কপি ফেরত নেওয়া হয় না</p>
            <br />
            <p className="text-lg">
              » এজেন্সি জন্য অগ্রীম বা জামানত পাঠাতে হয় না
            </p>
            <br />
            <p className="text-lg">
              » মাসের যে কোনো দিনে পত্রিকার সংখ্যা বৃদ্ধি করা যায়
            </p>
            <br />
            <p className="text-lg">» ৩০% কমিশন দেওয়া হয়</p>
            <br />
            <br />
            <h2 className="text-2xl font-bold">বার্ষিক গ্রাহক চাঁদার হার</h2>
            <br /> <br />
            <div className="w-full">
              <div className="overflow-x-auto">
                <table className="table-auto w-full border-b text-lg border-gray-300 text-center">
                  <thead>
                    <tr>
                      <th className="border-b text-left border-gray-300 py-4 px-4 font-semibold">
                        দেশ
                      </th>
                      <th className="border-b text-left border-gray-300 py-4 px-4 font-semibold">
                        সারা. ডাক (টাকা)
                      </th>
                      <th className="border-b text-left border-gray-300 py-4 px-4 font-semibold">
                        রেজি. ডাক (টাকা)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        বাংলাদেশ
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ৬৭২
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ৮২০
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        সার্কভুক্ত দেশসমূহ
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ১১৬০
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ২৫৬০
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        মধ্যপ্রাচ্য ও আফ্রিকানিশান
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ১৫১০
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ২৮১০
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        মালেশিয়া, সিঙ্গাপুর, ইন্দোনেশিয়া
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ১৫১০
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ২৮১০
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ইউরোপ, অস্ট্রেলিয়া
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ২২১০
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ৩৫৫০
                      </td>
                    </tr>
                    <tr>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        আমেরিকা
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ২৬৩০
                      </td>
                      <td className="border-b text-left border-gray-300 py-4 px-4">
                        ৪০০০
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <br />
              <br />
              <p className="text-xl text-justify">
                সমস বি.দ্রঃ গ্রাহক হতে হলে সরাসরি মনি অর্ডার করতে হয় অথবা অফিসে
                নগদ টাকা প্রদান করতে হয়। কমপক্ষে ৬ মাসের গ্রাহক চাঁদা পাঠাতে হয়।
                অনেক সময় সাধারণ ডাকে গ্রাহকদের কাছে সময়মত পত্রিকা পৌছায় না। তাই
                আমরা রেজি. ডাকে গ্রাহক হওয়ার জন্য উৎসাহিত করে থাকি।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agent;
