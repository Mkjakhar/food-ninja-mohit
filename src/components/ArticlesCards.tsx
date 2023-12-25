import React from "react";
import { Link } from "react-router-dom";
import BlogPost from "../model/blogPost";

const ArticlesCards: React.FC<BlogPost> = ({
  id,
  title,
  description,
  author,
  updatedAt,
  image,
  category,
}) => {
  return (
    <div className="w-full sm:w-[47%] sm:mb-10">
      <Link to={`/blog/${id}`}>
        <div className="h-full flex flex-col justify-between group">
          <div>
            <div className="overflow-hidden rounded-[5px]">
              <img
                src={image}
                className="w-full group-hover:scale-110 duration-300 h-[200px] md:h-[275px] object-cover min-h-[150px] lg:min-h-[250px]"
                alt="travel"
              />
            </div>
            <span className="text-[#dfe1e7] py-1 px-4 rounded mt-4 sm:mt-5 mb-2 inline-block bg-light_blue font-Roboto font-medium text-sm leading-normal">
              {category}
            </span>
            <h3 className="text-xl md:text-2xl font-Merriweather font-bold !leading-[140%] text-black">
              {title}
            </h3>
            <p className="text-sm mb-3 sm:mb-4 !leading-[160%] text-dark_gray font-Merriweather">
              {updatedAt}
            </p>
            <p className="text-base !leading-[160%] text-light_black font-Roboto">
              {description.description}
            </p>
          </div>
          <div className="flex items-center gap-[14px] mt-5">
            <img
              className="rounded-full h-[42px] object-cover w-[42px]"
              src={author.profileImg}
              alt="George Costanza"
            />
            <h3 className="text-sm font-Merriweather font-bold !leading-[160%] text-black">
              {author.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCards;
