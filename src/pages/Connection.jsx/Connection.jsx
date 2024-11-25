import mosque from "../../assets/mosque.svg";
import CustomSecondBanner from "../../components/shared/CustomSecondBanner";
import cover_one from "../../assets/cover-1.jpg";
import cover_two from "../../assets/cover-2.jpg";
import cover_three from "../../assets/cover-3.jpg";
import cover_four from "../../assets/cover-4.jpg";
import cover_five from "../../assets/cover-5.jpg";
import cover_six from "../../assets/cover-6.png";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Connection = () => {
  const onRecaptchaChange = (value) => {
    console.log("reCAPTCHA value:", value);
  };
  const EditorialData = [
    {
      title: "সম্পাদকীয় বিভাগ",
      address: "মারকাযুদ দাওয়াহ আলইসলামিয়া ঢাকা",
      location: "হায়রতপুর, কেরানীগঞ্জ, ঢাকা - ১৩১৩",
      phone: "০১৯৮৪ ৯৯ ৮৮ ২২",
      email: "info@alkawsar.com",
    },
  ];
  const BankData = [
    {
      title: "ব্যাংক একাউন্ট নম্বর #১",
      theName: "মাসিক আলকাউসার",
      runningNumber: "চলতি হিসাব নম্বর ",
      phone: "১৩৫১২২০০০০১৭৩",
      bankName: "আল-আরাফাহ ইসলামী ব্যাংক",
      limited: "লিমিটেড",
      address: "পল্লবী শাখা, ঢাকা",
    },
  ];

  const Distribution = [
    {
      title: "বিতরণ বিভাগ",
      place: "৩০/১২ পল্লবী, মিরপুর - ১২, ঢাকা",
      theName: "মাসিক আলকাউসার",
      number: "১২১৬ ",
      agentNumber: "০১৯৮৪ ৯৯ ৮৮ ৩৩ (এজেন্ট)",
      grahokNumber: "০১৯৮৪ ৯৯ ৮৮ ৪৪ (গ্রাহক)",
      handToHandNumber: "০১৯৮৪ ৯৯ ৮৮ ৫৫ (হাতে হাতে)",
    },
  ];
  const Account = [
    {
      title: "ব্যাংক একাউন্ট নম্বর #২",
      theName: "মাসিক আলকাউসার",
      CountNumber: "চলতি হিসাব নম্বর - ১৬৪.১১০.১৭৯৩",
      bankName: "ডাচ বাংলা ব্যাংক লিমিটেড",
      place: "মিরপুর -১০ শাখা, ঢাকা - ১২১৬",
    },
  ];
  const secondBannerData = {
    title: "যোগাযোগ",
  };
  const bannerHeight = "h-48";
  return (
    <div className="font-bengali">
      <CustomSecondBanner
        secondBannerData={secondBannerData}
        bannerHeight={bannerHeight}
      ></CustomSecondBanner>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 mt-10">
          <div>
            <div className="space-y-6">
              {/* first section */}
              {EditorialData.map((data, index) => (
                <div
                  key={index}
                  className="item border-l-2 border-yellow-600 p-6 bg-gray-50"
                >
                  <h2 className="text-2xl font-bold pb-2 mb-2">{data.title}</h2>
                  <p className="text-2xl">{data.address}</p>
                  <p className="text-2xl">{data.location}</p>
                  <p className="text-2xl">ফোন: {data.phone}</p>
                  <p className="text-xl">ই-মেইল: {data.email}</p>
                </div>
              ))}
            </div>
            <div className="space-y-6 mt-6">
              {/* second section */}
              {BankData.map((data, index) => (
                <div
                  key={index}
                  className="item border-l-2 border-yellow-600 p-6 bg-gray-50"
                >
                  <h2 className="text-2xl font-bold pb-2 mb-2">{data.title}</h2>
                  <p className="text-2xl">{data.theName}</p>
                  <p className="text-2xl">{data.runningNumber}</p>
                  <p className="text-2xl"> {data.phone}</p>
                  <p className="text-2xl"> {data.bankName}</p>
                  <p className="text-2xl"> {data.limited}</p>
                  <p className="text-2xl"> {data.address}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-6">
                {/* third section */}
                {Distribution.map((data, index) => (
                  <div
                    key={index}
                    className="item border-l-2 border-yellow-600 p-6 bg-gray-50"
                  >
                    <h2 className="text-2xl font-bold pb-2 mb-2">
                      {data.title}
                    </h2>
                    <p className="text-2xl">{data.place}</p>
                    <p className="text-2xl">{data.theName}</p>
                    <p className="text-2xl">{data.number}</p>
                    <p className="text-2xl"> {data.agentNumber}</p>
                    <p className="text-2xl"> {data.grahokNumber}</p>
                    <p className="text-2xl"> {data.handToHandNumber}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-6 mt-6">
                {/* forth section */}
                {Account.map((data, index) => (
                  <div
                    key={index}
                    className="item border-l-2 border-yellow-600 p-6 bg-gray-50"
                  >
                    <h2 className="text-2xl font-bold pb-2 mb-4">
                      {data.title}
                    </h2>
                    <p className="text-2xl">{data.theName}</p>
                    <p className="text-2xl">{data.CountNumber}</p>
                    <p className="text-2xl"> {data.bankName}</p>
                    <p className="text-2xl"> {data.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            {/* third column */}
            <div>
              {/* importent */}
              <div className="flex items-start">
                {/* Vertical Line */}
                <div className="w-[1px] h-[429px] bg-gray-300 mr-0 md:mr-5"></div>

                {/* Main Content */}
                <div className="main-section w-full">
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
                  <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {/* Last section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-2">
            <div className="p-6 bg-white  ">
              {/* Inquiry Type */}
              <div className="mb-4">
                <label className="block text-2xl font-medium mb-2">
                  অনুসন্ধান এর ধরন:
                </label>
                <select className=" border border-gray-300 rounded px-4 py-3 text-xl focus:outline-none focus:ring focus:ring-blue-300">
                  <option value="default">---------</option>
                  <option value="type1">ধরন ১</option>
                  <option value="type2">ধরন ২</option>
                </select>
              </div>
              <br />
              {/* Subject */}
              <div className="mb-4">
                <label className="block text-2xl  mb-2">বিষয়:</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  placeholder="বিষয় লিখুন"
                />
              </div>

              <br />
              {/* Name */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">নাম:</label>
                <input
                  type="text"
                  className="w-full borderborder-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none"
                  placeholder="নাম লিখুন"
                />
              </div>
              <br />
              {/* Address */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">ঠিকানা:</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  placeholder="ঠিকানা লিখুন"
                />
              </div>
              <br />
              {/* Customer/Agent Number */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">
                  গ্রাহক/এজেন্ট নম্বর:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  placeholder="গ্রাহক/এজেন্ট নম্বর লিখুন"
                />
              </div>
              <br />
              {/* Email */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">ইমেইল:</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  placeholder="ইমেইল লিখুন"
                />
              </div>
              <br />
              {/* Mobile Number */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">মোবাইল নম্বর:</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  placeholder="মোবাইল নম্বর লিখুন"
                />
              </div>
              <br />
              {/* Message */}
              <div className="mb-4">
                <label className="block text-2xl mb-2">বার্তা:</label>
                <textarea
                  className="w-full border border-gray-200 placeholder:text-gray-200 rounded px-3 py-2 text-lg focus:outline-none "
                  rows="4"
                  placeholder="আপনার বার্তা লিখুন"
                ></textarea>
              </div>
              <div>
                <div className="flex flex-col  gap-4 ">
                  {/* reCAPTCHA */}
                  <ReCAPTCHA
                    sitekey="your-recaptcha-site-key" // Replace with your reCAPTCHA site key
                    onChange={onRecaptchaChange}
                  />

                  {/* Button */}
                  <div className="">
                    <button
                      className="bg-green-500 text-white text-xl font-bold py-4 px-8 rounded"
                      type="button"
                    >
                      জমা দিন
                    </button>
                  </div>

                  {/* জমা দিন */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
