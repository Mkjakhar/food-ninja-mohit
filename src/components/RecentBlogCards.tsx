import { Link } from "react-router-dom";
import BlogPost from "../model/blogPost";
const RecentBlogCards: React.FC<BlogPost> = ({
  title,
  id,
  description,
  image,
}) => {
  return (
    <>
      <Link to={`/blog/${id}`} onClick={() => scrollTo(0, 0)}>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 md:gap-[34px] mt-5 sm:mt-[30px]">
          <img
            className="w-[250px] h-[166px] object-cover rounded shadow-xl"
            src={image}
            alt="fruits"
          />
          <div>
            <h3 className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] text-light_brown">
              {title}
            </h3>
            <p className="text-base sm:text-[18px] font-Roboto text-dark_black !leading-[160%] mt-2">
              {description.subTitle}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RecentBlogCards;
