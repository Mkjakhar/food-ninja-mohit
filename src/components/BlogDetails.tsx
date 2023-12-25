import { articlesData } from "./common/Helper";
import RecentBlogCards from "./RecentBlogCards";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const { id } = useParams();
  const blogPost = articlesData.find((post) => post.id === id);
  if (!blogPost) {
    return (
      <h2 className="text-3xl text-center sm:text-[32px] md:text-[46px] text-red-500 font-black leading-normal font-Merriweather">
        Page Not Found
      </h2>
    );
  }
  return (
    <>
      <div className="container lg:max-w-[824px] pt-6 sm:pt-9">
        <span className="text-[#dfe1e7] py-1 px-4 rounded mb-[14px] inline-block bg-light_blue font-Roboto font-medium text-sm leading-normal">
          {blogPost?.category}
        </span>
        <h2 className="text-3xl sm:text-[32px] md:text-[46px] text-black font-black leading-normal font-Merriweather">
          {blogPost?.title}
        </h2>
        <p className="text-sm mb-3 sm:mb-4 !leading-[160%] text-dark_gray font-Merriweather">
          {blogPost?.updatedAt}
        </p>
        <img
          className="w-full shadow-xl h-[180px] sm:h-[278px] object-cover rounded-[5px]"
          src={blogPost?.image}
          alt="theory detail"
        />
        <div className="flex items-center gap-[14px] mt-5">
          <img
            className="rounded-full h-[42px] object-cover w-[42px]"
            src={blogPost?.author.profileImg}
            alt="George Costanza"
          />
          <h3 className="text-sm font-Merriweather font-bold !leading-[160%] text-black">
            {blogPost?.author.title}
          </h3>
        </div>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium font-Roboto text-light_black !leading-[160%] mt-5 sm:mt-[30px]">
          {blogPost?.description.subTitle}
        </p>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-5 sm:mt-[30px]">
          {blogPost?.description.description}
        </p>
        <div className="sm:p-[35px] p-6 sm:pt-8 bg-white_off_2 my-7 sm:mt-10 sm:mb-[10px] rounded-lg border border-[#ddd]">
          <h3 className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] text-black">
            In this article
          </h3>
          <ol
            type="1"
            className="list-[number] list-outside pl-6 sm:pl-7 gap-4"
          >
            <li className="text-base sm:text-[18px] mt-4 font-Merriweather !leading-[160%] text-light_brown">
              <a href="#how-to-travel" className="underline">
                How to travel without spending a dime
              </a>
            </li>
            <li className="text-base sm:text-[18px] mt-4 font-Merriweather !leading-[160%] text-light_brown">
              <a href="#reward-points" className="underline">
                Get the most out of your credit card reward points
              </a>
            </li>
            <li className="text-base sm:text-[18px] mt-4 font-Merriweather !leading-[160%] text-light_brown">
              <a href="#pieces-of-clothing" className="underline">
                Why you don’t need more than 3 pieces of clothing
              </a>
            </li>
          </ol>
        </div>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] sm:pt-[30px]">
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
        <h3
          id="how-to-travel"
          className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] mt-5 sm:mt-[30px] text-light_brown"
        >
          How to travel without spending a dime
        </h3>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Amet aliquet at a aliquam ac suspendisse euismod. Lectus sit in ut
          erat in. Et nulla a magna amet, amet. Sodales malesuada laoreet
          bibendum neque amet turpis non. Ac arcu lacus turpis elementum
          imperdiet. Euismod purus, libero scelerisque vitae, libero fermentum
          urna, nunc.
        </p>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Leo id aliquet potenti enim sed maecenas sed ornare. Risus nam mauris
          etiam nibh maecenas nibh interdum mauris suspendisse. Volutpat, enim
          interdum facilisi mauris vitae id. Vel malesuada sit etiam dolor.
          Ullamcorper habitant vitae, nec pretium ullamcorper viverra integer
          praesent tincidunt. At erat sagittis tellus ultricies in a.
        </p>
        <h3
          id="reward-points"
          className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] mt-5 sm:mt-[30px] text-light_brown"
        >
          Get the most out of your credit card reward points
        </h3>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Massa, libero morbi morbi sed non sed. In et neque lectus ultricies
          leo eros. Auctor in elementum accumsan malesuada gravida neque cursus
          pellentesque nunc. Dui nullam odio neque varius massa praesent. Neque,
          porta vel, morbi nulla at tincidunt. Neque, et ultrices duis
          fermentum, tincidunt sem sed. Erat accumsan dui enim nisl morbi
          feugiat.
        </p>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Ac eget lorem sit nulla sed fusce etiam. Elementum nibh in eu sed.
          Nibh non semper amet sit hac tristique orci. Quis velit vitae amet
          magnis nec in nunc. Amet vitae id cras nibh. Sed ipsum, lacinia in sit
          vitae. Duis luctus convallis risus purus sollicitudin purus id eu.
          Faucibus mattis eget ullamcorper eu suspendisse elit elit lacus purus.
          Tortor felis.
        </p>
        <h3
          id="pieces-of-clothing"
          className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] mt-5 sm:mt-[30px] text-light_brown"
        >
          Why you don’t need more than 3 pieces of clothing
        </h3>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Massa aenean cursus nulla urna dui, fermentum cursus in facilisis.
          Vulputate euismod vestibulum dolor in elementum quis quis. Erat proin
          in eget arcu tellus ut ultrices. Quis maecenas ullamcorper ante sit
          leo placerat. Quisque dictum laoreet eget quam leo tortor scelerisque
          sit nullam. Lacus, tortor, aenean mattis lobortis lacinia mauris.
          Viverra nulla.
        </p>
        <p className="text-base sm:text-xl font-Roboto text-light_black !leading-[160%] mt-4 sm:mt-5">
          Sed pellentesque quam lorem urna. Mauris donec molestie eget massa
          pellentesque facilisis netus mauris. Magna eget eget sollicitudin at
          faucibus odio. At augue sit nisi et metus cras dignissim vel, tortor.
          Maecenas molestie consequat cursus posuere ultrices facilisis hac
          bibendum semper. Sed lorem vel donec proin. Volutpat aliquet rhoncus
          sit et.
        </p>
        <h2 className="text-3xl md:text-4xl font-Merriweather font-bold !leading-[160%] mt-7 sm:mt-[50px] text-light_brown">
          Keep reading
        </h2>
        {articlesData.map((val, i) => (
          <RecentBlogCards {...val} key={i} />
        ))}
        <div className="py-8 sm:py-11 px-6 sm:px-[31px] sm:items-center bg-white_off_2 mt-12 sm:mb-[10px] rounded-lg border border-[#ddd] flex-col sm:flex-row flex gap-5 sm:gap-7">
          <img
            className="h-[150px] w-[150px] rounded-full object-cover"
            src={blogPost.author.profileImg}
            alt="georgeProfile"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-Merriweather !leading-[160%] mb-3 text-black">
              Written by {blogPost?.author.title}
            </h3>
            <p className="text-base sm:text-[18px] font-Roboto text-black !leading-[160%]">
              {blogPost?.author.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
