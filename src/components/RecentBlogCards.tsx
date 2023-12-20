interface RecentBlogCardsProps {
  val: {
    topicImg: string;
    title: string;
    description: string;
  };
}
const RecentBlogCards: React.FC<RecentBlogCardsProps> = ({ val }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-7 md:gap-[34px] mt-5 sm:mt-[30px]">
        <img
          className="w-[250px] h-[166px] object-cover rounded shadow-xl"
          src={val.topicImg}
          alt="fruits"
        />
        <div>
          <h3 className="text-xl md:text-2xl font-Merriweather font-bold !leading-[160%] text-light_brown">
            {val.title}
          </h3>
          <p className="text-base sm:text-[18px] font-Roboto text-dark_black !leading-[160%] mt-2">
            {val.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecentBlogCards;
