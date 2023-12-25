import george from "../../assets/images/svg/george-costanza.svg";
import fruits from "../../assets/images/png/fruits.png";
import family from "../../assets/images/png/family.png";
import travel from "../../assets/images/png/travel.png";
import foodTheory from "../../assets/images/png/food-theory.png";
import Author from "../../model/author";
import BlogPost from "../../model/blogPost";

export const recentArticles = [
  {
    topicImg: fruits,
    title: "Why you don’t need more than 3 pieces of clothing",
    description:
      "Et vitae, mollis euismod lobortis blandit amet sed amet. Amet ut amet nisl tortor arcu non id nulla mauris neque nisl magna.",
  },
  {
    topicImg: family,
    title: "Why you should cook with your family together everyday",
    description:
      "Rutrum aliquet eros semper nunc. In adipiscing augue sagittis, fermentum donec nunc lacinia. Risus in egestas in orci quam.",
  },
];

export const authorData: Author[] = [
  {
    id: "11",
    title: "Mohit Jakhar",
    profileImg: george,
    description:
      "Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,",
  },
  {
    id: "12",
    title: "Sumit Jkahar",
    profileImg: george,
    description:
      "Rutrum aliquet eros semper nunc. In adipiscing augue sagittis,",
  },
];
export const articlesData: BlogPost[] = [
  {
    id: "1",
    title: "What Traveling Greece For 2 Weeks Taught Me About Life",
    description: {
      subTitle: "sub title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras.",
    },
    body: "body",
    //   content: string,
    author: authorData[0],
    createdAt: "Jun 21, 2021 • 11 min read",
    updatedAt: "Jun 21, 2021 • 11 min read",
    image: travel,
    category: "Travel",
  },
  {
    id: "2",
    title: "Why You Should Never Order 12 Chicken Nuggets and Fries",
    description: {
      subTitle: "sub title two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam mollis lectus vitae nulla malesuada amet purus sed. A condimentum tempus a egestas sodales diam cras. Ligula a varius tempus ac amet, vel lectus sed. Urna sit Eget.",
    },
    body: "body two",
    //   content: string,
    author: authorData[1],
    createdAt: "Aug 1, 2021 • 7 min read",
    updatedAt: "Aug 1, 2021 • 7 min read",
    image: foodTheory,
    category: "Food Theory",
  },
];
