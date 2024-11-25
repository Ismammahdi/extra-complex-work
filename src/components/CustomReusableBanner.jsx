
import bannerImage from "../assets/alkawsar-banner-230px.png"
import mosque from "../assets/mosque.svg"

const CustomReusableBanner = ({reuseableBanner}) => {
    return (
        <div
        className="relative min-w-full bg-cover bg-top w-full h-56 flex items-center font-bengali"
        style={{
          backgroundImage: `url(${bannerImage})`,
        }}
      >
        <div className="absolute text-white text-center px-2 md:px-8 w-full">
          <div className="p-2 md:p-6">
            <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between md:space-x-4">
              <div className="w-full md:w-[40%] font-bengali text-center md:text-left">
                <div className="flex flex-col items-center md:flex-row md:items-center">
                  <h2 className="text-xl md:text-3xl mt-24 text-white font-normal pb-1 md:pb-[10px] flex-grow border-b border-yellow-500">
                    {reuseableBanner.title}
                  </h2>
  
                  
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-6 h-auto mt-2 md:mt-[19%] md:w-12 md:-ml-11 hidden md:block"
                    />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CustomReusableBanner;