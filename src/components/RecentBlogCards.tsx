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
        <div className="flex flex-col sm:flex-row gap-4 group sm:gap-7 md:gap-[34px] mt-5 sm:mt-[30px]">
          <div className="overflow-hidden rounded w-full max-w-[250px] h-[166px] shadow-xl">
            <img
              className="group-hover:scale-110 duration-300 w-full h-full object-cover rounded"
              src={image}
              alt="fruits"
            />
          </div>
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
