import { Link } from 'react-router-dom';
import mosque from "../../../assets/mosque.svg";
import { FaChevronRight } from 'react-icons/fa';

const OthersEssays = ({othersEssays}) => {
// Helper function to truncate description at 18 words
const truncateDescription = (text, wordLimit = 13) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + " ..."
      : text;
  };

    return (
        <div>
                <div className="py-6">
                  <div className="flex items-center">
                    <h2 className="text-xl hover:text-green-600 text-gray-700   font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]">
                      অন্যান্য প্রবন্ধসমূহ »
                    </h2>
                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>

                  <div className="item-section ">
                    <div className="item-map1">
                      {othersEssays.map((article, index) => (
                        <div
                          key={index}
                          className="pb-4 pt-4 border-b border-dashed border-gray-300"
                        >
                          <Link to={article.path} className="flex items-start ">
                            <FaChevronRight className="text-yellow-500 mt-1" />
                            <div>
                              <h3 className="hover:text-green-600 text-lg text-gray-800">
                                {article.title}
                              </h3>
                              <p className="text-gray-600">
                                {truncateDescription(article.description)}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
        </div>
    );
};

export default OthersEssays;