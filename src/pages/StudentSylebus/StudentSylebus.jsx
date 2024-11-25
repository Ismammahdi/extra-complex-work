import React, { useState } from "react";

import CustomBanner from "../../components/shared/CustomBanner";

const StudentSylebus = () => {
  const [selectedYear, setSelectedYear] = useState(""); // Initialize selectedYear state
  const [selectedMonth, setSelectedMonth] = useState(""); // Initialize selectedMonth state

  const bannerData = {
    title: "শিক্ষা পরামর্শ",
  };

  return (
    <div className="pt-24 font-bengali">
      <div>
        <CustomBanner bannerData={bannerData}></CustomBanner>
      </div>
      <div className="container mx-auto p-6 pt-10">
        <div className="flex gap-6">
          <select
            className="text-center text-xl font-bengali border border-gray-300 rounded px-4 py-2"
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              setSelectedMonth(""); // Reset month selection when year changes
            }}
          >
            <option value="">বছর নির্বাচন করুন</option>
            <option value="২০২৪">২০২৪</option>
            <option value="২০২৩">২০২৩</option>
            <option value="২০২২">২০২২</option>
            <option value="২০২১">২০২১</option>
            <option value="২০২০">২০২০</option>
            <option value="২০১৯">২০১৯</option>
            <option value="২০১৮">২০১৮</option>
            <option value="২০১৭">২০১৭</option>
            <option value="২০১৬">২০১৬</option>
          </select>

          <select
            className="text-center text-xl font-bengali border border-gray-300 rounded px-4 py-2"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            // Disable month dropdown until year is selected
          >
            <option value="">মাস নির্বাচন করুন</option>
            <option value="জানুয়ারি">জানুয়ারি</option>
            <option value="ফেব্রুয়ারি">ফেব্রুয়ারি</option>
            <option value="মার্চ">মার্চ</option>
            <option value="এপ্রিল">এপ্রিল</option>
            <option value="মে">মে</option>
            <option value="জুন">জুন</option>
            <option value="জুলাই">জুলাই</option>
            <option value="আগস্ট">আগস্ট</option>
            <option value="সেপ্টেম্বর">সেপ্টেম্বর</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default StudentSylebus;
