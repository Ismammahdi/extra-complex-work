import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const Procolitovulcustom = ({ articles, title, linkPath, icon }) => {
  const truncateDescriptionTwo = (description) => {
    // Your truncate logic here
    return description.length > 50
      ? `${description.slice(0, 50)}...`
      : description;
  };

  if (!articles || articles.length === 0) {
    return null; // Or return a fallback message if needed
  }

  return (
    <div>
          <div className="procolitovulcustom">
      <div className="flex items-center">
        <Link
          to={linkPath}
          className="text-xl pt-4 hover:text-green-600 text-gray-700 font-bold border-b border-yellow-500 flex-grow mb-5 pb-[10px]"
        >
          {title}
        </Link>
        <img src={icon} alt="icon" className="w-8 h-auto -ml-[30px]" />
      </div>
      <div className="space-y-4">
        {articles.map((article, index) => (
          <Link to={article.path} key={index}>
            <div className="pb-4 border-b border-dashed border-gray-300">
              <div className="flex items-start space-x-2">
                <FaChevronRight className="text-yellow-500 mt-1" />
                <div>
                  <h3 className="hover:text-green-600 text-lg text-gray-800">
                    {article.title}
                  </h3>
                  <p className="text-gray-800 text-xl">
                    {truncateDescriptionTwo(article.description)}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Procolitovulcustom;
