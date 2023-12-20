import { SearchIcon } from "./common/Icons";
import ArticlesCards from "./ArticlesCards";
import { articlesCardsData } from "./common/Helper";
const Hero = () => {
  return (
    <>
      <div className="container xl:max-w-[1100px] pt-[34px] flex flex-col items-center">
        <h1 className="text-center text-[32px] sm:text-4xl md:text-5xl text-blue font-black leading-normal font-Merriweather">
          The Food Ninja Blog
        </h1>
        <p className="sm:mt-[10px] text-center text-gray text-lg sm:text-xl leading-normal font-Roboto">
          A blog about food, experiences, and recipes.
        </p>
        <form className="pr-6 rounded border border-[#ddd] max-w-[420px] overflow-hidden flex justify-between items-center w-full mb-16 sm:mb-[80px] mt-10 md:mt-14">
          <input
            type="text"
            id="search"
            placeholder="Search for articles"
            className="text-base sm:text-lg font-Merriweather leading-normal pl-7 py-3 sm:py-[18px] text-light_gray placeholder:text-light_gray outline-none w-full"
          />
          <label htmlFor="search" className="cursor-pointer">
            <SearchIcon />
          </label>
        </form>
        <div className="flex w-full justify-between flex-wrap gap-8 sm:gap-0 sm:mb-10 md:mb-16 lg:mb-[126px]">
          {articlesCardsData.map((val, i) => (
            <ArticlesCards val={val} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
