import { Link } from "react-router-dom";

const CustomArticle = ({ articles }) => {
  // Utility function to truncate text
  const truncateText = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };
  //
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-3 py-2 md:py-0 font-bengali">
      {articles.map((article, index) => (
        <div
          key={index}
          className="bg-white hover:bg-gray-50 border-l border-b border-gray-200 p-6 space-y-5"
        >
          {article.hasButton && (
            <Link to="/anwarul-quran">
              <button className="mb-3 px-2 py-1 bg-[#D2973B] text-white font-semibold hover:bg-yellow-700">
                সম্পাদকীয়
              </button>
            </Link>
          )}
          <div>
            <Link
              to={article.path}
              className="text-xl font-medium text-black mb-2 hover:text-yellow-600"
            >
              {article.title}
            </Link>
          </div>

          <Link
            to={article.path}
            className="text-lg font-medium mb-4 hover:text-yellow-600"
          >
            {article.subtitle}
          </Link>
          <p className="text-gray-700 mb-4">
            {truncateText(article.content, 170)}
          </p>
          {article.author && (
            <p className="text-gray-500 text-sm font-medium">
              {article.author}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CustomArticle;
