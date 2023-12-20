import { Link } from "react-router-dom";

interface ArticlesCardsProps {
  val: {
    topicImg: string;
    topic: string;
    title: string;
    time: string;
    description: string;
    profileImg: string;
    profileName: string;
    path: string;
  };
}
const ArticlesCards: React.FC<ArticlesCardsProps> = ({ val }) => {
  return (
    <div className="w-full sm:w-[47%]">
      <Link to={val.path}>
        <div className="h-full flex flex-col justify-between group">
          <div>
            <div className="overflow-hidden rounded-[5px]">
              <img
                src={val.topicImg}
                className="w-full group-hover:scale-110 duration-300 min-h-[150px] lg:min-h-[250px]"
                alt="travel"
              />
            </div>
            <span className="text-white py-1 px-4 rounded mt-4 sm:mt-5 mb-2 inline-block bg-light_blue font-Roboto font-medium text-sm leading-normal">
              {val.topic}
            </span>
            <h3 className="text-xl md:text-2xl font-Merriweather font-bold leading-[140%] text-black">
              {val.title}
            </h3>
            <p className="text-sm mb-3 sm:mb-4 leading-[160%] text-dark_gray font-Merriweather">
              {val.time}
            </p>
            <p className="text-base leading-[160%] text-light_black font-Roboto">
              {val.description}
            </p>
          </div>
          <div className="flex items-center gap-[14px] mt-5">
            <img src={val.profileImg} alt="George Costanza" />
            <h3 className="text-sm font-Merriweather font-bold leading-[160%] text-black">
              {val.profileName}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCards;
