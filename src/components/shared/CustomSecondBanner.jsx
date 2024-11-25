import React from "react";
import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";

const CustomSecondBanner = ({
  secondBannerData,
  height = "1px",
  width = "230px",
  bannerHeight,
}) => {
  return (
    <div className="font-bengali pt-24">
      <div
        className={`relative min-w-full bg-cover bg-top w-full ${
          bannerHeight ? bannerHeight : "h-52"
        } flex items-center font-bengali`}
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col justify-center items-center space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-4">
              <div className="item w-full mx-auto md:w-[40%] font-bengali text-center md:text-left">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-center">
                      <img
                        src={mosque}
                        alt="mosque"
                        className="mt-[-39px] w-12"
                      />
                    </div>
                    <div className="flex justify-center">
                      {/* Apply custom height and width */}
                      <div className="h-px w-[100px] bg-yellow-600"></div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-center text-4xl text-white font-medium pb-1 md:pb-[10px]">
                      {secondBannerData.title}
                    </h2>
                    <div className="flex justify-center">
                      <div
                        className="important-section bg-yellow-600"
                        style={{ height, width }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSecondBanner;
