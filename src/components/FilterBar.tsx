"use client";

const FilterBar = ({handleChange}:any) => {



  return (
    <main className="bg-slate-50 mb-4 mx-4 p-2 rounded-md flex items-center flex-wrap">
      <div className="w-full md:w-1/3 flex items-center md:pr-2">
        <label
          htmlFor="countries"
          className="block mr-2 h-full text-sm font-medium text-gray-900 dark:text-white"
        >
          Region
        </label>
        <select
          id="countries"
          onChange={e => handleChange(e, "region")}
          className="bg-gray-50 h-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a Region</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="IN">India</option>
          <option value="ES">Spain</option>
        </select>
      </div>
      <div className="w-full md:w-1/3 flex items-center md:pr-2">
        <label
          htmlFor="category"
          className="block mr-2 h-full text-sm font-medium text-gray-900 dark:text-white"
        >
          Category
        </label>
        <select
          id="category"
          onChange={e => handleChange(e, "category")}
          className="bg-gray-50 h-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected>Choose a Category</option>
          <option value="popular">Popular</option>
          <option value="top_rated">Top Rated</option>
          <option value="upcoming">Upcoming</option>
          <option value="now_playing">Now Playing</option>
        </select>
      </div>
      <div className="w-full md:w-1/3 flex items-center">
        <label
          htmlFor="language"
          className="block mr-2 h-full text-sm font-medium text-gray-900 dark:text-white"
        >
          Language
        </label>
        <select
          id="language"
          onChange={e => handleChange(e, "language")}
          className="bg-gray-50 h-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option >Choose a Language</option>
          <option value="en-US">English USA</option>
          <option value="en-GB">English UK</option>
          <option value="hi">Hindi</option>
          <option value="jp">Japanese</option>
          <option value="ko">Korean</option>
          <option value="bn">Bengali</option>
          <option value="tl">Telugu</option>
        </select>
      </div>
    </main>
  );
};

export default FilterBar;
