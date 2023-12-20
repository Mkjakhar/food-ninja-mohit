import BlogDetails from "../components/BlogDetails";
import Footer from "../components/common/Footer";
import { useEffect } from "react";
const SingleBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogDetails />
      <Footer />
    </>
  );
};

export default SingleBlog;
