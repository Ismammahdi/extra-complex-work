import bannerImage from "../../assets/alkawsar-banner-230px.png"; // Adjust path if needed
import mosque from "../../assets/mosque.svg";

const CustomBanner = ({ bannerData, height }) => {
  return (
    <div>
      <div
        // customization
        className={`relative bg-top  ${
          height ? height : "h-40 "
        }   flex items-center font-bengali `}
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-14">
            <div className="flex flex-col md:flex-row items-center md:space-y-0 justify-between md:space-x-4">
              <div className="w-full md:w-[40%] text-center font-bengali">
                <div className="flex items-center">
                  <h2 className="text-xl md:text-3xl md:text-left text-center flex-grow text-white font-medium pb-[10px] border-b border-yellow-500">
                    {bannerData.title}
                    <span className="ml-1 md:ml-4">{bannerData.sideTitle}</span>
                  </h2>

                  <img
                    src={mosque}
                    alt="mosque"
                    className="w-12 h-auto -ml-[44px] hidden md:block"
                  />
                </div>

                <p className="mt-4 text-2xl md:text-left text-center">
                  {bannerData.subTitle}
                </p>
              </div>

              {bannerData?.bannerRightSide && (
                <div className="w-[50%] font-bengali hidden md:block">
                  <p className="text-xl font-medium">
                    {bannerData?.bannerRightSide.subTitle}
                  </p>
                  <h2 className="text-4xl font-medium ">
                    {bannerData?.bannerRightSide?.title}
                  </h2>
                  <p className="text-lg">
                    {bannerData?.bannerRightSide?.personTitle}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
