import { useEffect, useState } from "react";
import { BackToTopIcon } from "./Icons";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollPosition > 200 ? (
        <div
          className=" text-white bg-blue cursor-pointer p-3 rounded-full fixed bottom-0 right-0 mb-5 mr-5"
          onClick={() => scrollToTop()}
        >
          <BackToTopIcon />
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default BackToTop;
