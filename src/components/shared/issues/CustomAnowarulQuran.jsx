import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import mosque from "../../../assets/mosque.svg";


const CustomAnowarulQuran = ({ anowarulQuran, allIssues }) => {



     const truncateDescriptionTwo = (text, wordLimit = 9) => {
      const words = text.split(" ");
      return words.length > wordLimit
        ? words.slice(0, wordLimit).join(" ") + " ..."
        : text;
    };

    return (
        <div className=" p-6">
                  <div className="flex items-center">
                    <Link
                      to={"/anwarul-quran"}
                      className="text-xl hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-2 pb-[10px]"
                    >
                      আনওয়ারুল কুরআন »
                    </Link>

                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-6"
                    />
                  </div>

                  <div className="item-map2 space-y-4">
                    {anowarulQuran.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <Link to={article.path} className="flex  space-x-2">
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <h3 className="hover:text-green-600  text-lg text-gray-800">
                            {article.title}
                          </h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                 <div>
                  {
                    allIssues?.map((item, i) => <div key={i}>
                    <div className="flex items-center">
                    <Link
                      to={`${item?.path}`}
                      className="text-xl pt-4 hover:text-green-600 text-gray-700 item-h2 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
                    >
                      {item?.title} »
                    </Link>

                    <img
                      src={mosque}
                      alt="mosque"
                      className="w-8 h-auto -ml-[30px]"
                    />
                  </div>

                  <div className="item-map3 space-y-4">
                    {item?.issues?.map((article, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-dashed border-gray-300"
                      >
                        <div className="flex items-start space-x-2">
                          <FaChevronRight className="text-yellow-500 mt-1" />
                          <Link to={`${article?.path}`}>
                            <h3 className="hover:text-green-600 text-lg text-gray-800">
                              {article.title}
                            </h3>

                            {
                              i === 0 && 
                              <p className="text-gray-800 ">
                              {truncateDescriptionTwo(article.description)}
                            </p>
                            }
                        
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                    </div> )
                  }
                 </div>

                </div>
    );
};

export default CustomAnowarulQuran;