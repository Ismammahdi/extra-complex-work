import { useState } from "react";
import mosque from "../../../assets/mosque.svg";
import { Link } from "react-router-dom";



const CustomParagraph = ({ bookImg , topics, covers}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
      };

    return (
        <div className="space-y-6 border-l border-gray-200  p-3">
        <div className="flex items-center">
          <h2 className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]">
            প্রচ্ছদ
          </h2>
          <img
            src={mosque}
            alt="mosque"
            className="w-8 h-auto -ml-[30px]"
          />
        </div>
        <div>
          <div className="cover">
            <img
              src={bookImg} // replace with your image path
              alt="Cover"
              className="w-full md:w-3/4 lg:w-1/2 h-auto object-cover border mx-auto cursor-pointer"
              onClick={handleModalOpen}
            />
          </div>

          {isModalOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleModalClose} // Close modal on background click
            >
              <div
                className="relative w-full max-w-sm bg-white p-4"
                onClick={(e) => e.stopPropagation()} // Prevent background click when clicking on content
              >
                <button
                  onClick={handleModalClose}
                  className="absolute top-2 right-2 text-black text-xl font-bold"
                >
                  &times;
                </button>

                <img
                  src={bookImg} // replace with your image path
                  alt="Cover Large"
                  className="w-full h-auto object-contain mx-auto"
                />
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center">
            <Link
              to={"/buttons"}
              className="text-2xl pt-1 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
            >
              প্রসঙ্গসমূহ »
            </Link>
            <img
              src={mosque}
              alt="mosque"
              className="w-8 h-auto -ml-[30px]"
            />
          </div>
          <div className="item">
            <div className="item-map5 flex flex-wrap gap-3 border-b border-gray-200 pb-3">
              {topics.map((topic, index) => (
                <Link
                  to={topic.path}
                  key={index}
                  className="px-3 py-1 text-gray-800 hover:bg-gray-500 hover:text-white  bg-gray-200  text-center"
                >
                  {topic.name}
                </Link>
              ))}
            </div>
            <div>
              <Link to={"/buttons"}>
                <button className="px-4 py-3 mt-5 bg-green-600 hover:bg-green-700 text-white ">
                  আরও »
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div>
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
          <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">
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
    );
};

export default CustomParagraph;