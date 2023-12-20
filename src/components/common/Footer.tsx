const Footer = () => {
  return (
    <>
      <div
        id="contact"
        className="container xl:max-w-[1100px] pb-10 mt-[80px] sm:mt-[100px]"
      >
        <div className="flex justify-between flex-wrap md:flex-nowrap gap-6 lg:gap-[80px]">
          <div className="w-full sm:w-1/2 md:w-2/5 lg:w-[36%]">
            <div className="px-[45px] py-[38px] rounded bg-light_blue max-w-[380px]">
              <h3 className="text-xl text-center md:text-2xl font-Merriweather font-black leading-[160%] text-white">
                Subscribe To <span className="block">Our Newsletter</span>
              </h3>
              <p className="sm:mt-[13px] font-medium text-gray-800 text-center text-base sm:text-lg leading-normal font-Roboto">
                Get weekly food news, articles, and videos delivered to your
                inbox.
              </p>
              <form className="max-w-[288px] mx-auto mt-[17px]">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="text-gray placeholder:text-gray py-3 rounded px-4 bg-white outline-none w-full text-base sm:text-lg font-Roboto font-medium leading-[160%]"
                />
                <button className="text-white duration-300 hover:-translate-y-1 hover:text-gray hover:bg-white py-[9px] mt-6 rounded px-[18px] bg-blue text-base sm:text-lg font-Roboto font-medium leading-[160%]">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
          <div className="w-full flex-wrap sm:flex-nowrap md:w-[58%] flex gap-6 lg:gap-[80px]">
            <ul className="w-full sm:w-[50%] flex flex-col gap-4 sm:gap-[22px]">
              <li className="text-sm uppercase leading-[160%] text-black font-semibold font-Merriweather">
                POPULAR POSTS
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline mt-1 text-black font-medium font-Merriweather">
                How To Have Your Cake and Eat It Too: The Way of The Chicken Man
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline text-black font-medium font-Merriweather">
                My Grandma’s 30-year-old Recipe
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline text-black font-medium font-Merriweather">
                What I learned about cooking from Ratatoulie
              </li>
            </ul>
            <ul className="w-full sm:w-[50%] flex flex-col gap-4 sm:gap-[22px]">
              <li className="text-sm leading-[160%] text-black font-medium font-Roboto">
                Recent Posts
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline mt-1 text-black font-medium font-Merriweather">
                How To Have Your Cake and Eat It Too: The Way of The Chicken Man
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline text-black font-medium font-Merriweather">
                My Grandma’s 30-year-old Recipe
              </li>
              <li className="text-sm leading-[160%] cursor-pointer duration-200 hover:text-blue hover:underline text-black font-medium font-Merriweather">
                What I learned about cooking from Ratatoulie
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white_off_2 py-9 px-3">
        <div className="flex gap-6 items-center justify-center">
          <p className="text-sm hover:text-blue duration-150 cursor-pointer mb-3 sm:mb-4 leading-[160%] text-dark_gray font-Merriweather">
            About
          </p>
          <p className="text-sm hover:text-blue duration-150 cursor-pointer mb-3 sm:mb-4 leading-[160%] text-dark_gray font-Merriweather">
            Privacy Policy
          </p>
          <p className="text-sm hover:text-blue duration-150 cursor-pointer mb-3 sm:mb-4 leading-[160%] text-dark_gray font-Merriweather">
            Contact
          </p>
        </div>
        <p className="text-sm text-center duration-150 leading-[160%] text-dark_brown font-bold font-Merriweather">
          Copyright © 2021 Food Ninja Blog. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
