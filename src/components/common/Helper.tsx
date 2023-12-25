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
    author: authorData[1],
    createdAt: "Aug 1, 2021 • 7 min read",
    updatedAt: "Aug 1, 2021 • 7 min read",
    image: foodTheory,
    category: "Food Theory",
  },
  {
    id: "3",
    title: "Riding the Roads: Exploring the World of Cars",
    description: {
      subTitle: "sub title three",
      description:
        "Uncover the latest in automotive wonders and dive into the thrilling world of cars. From cutting-edge technology and performance reviews to captivating stories of road trips and classic rides, join us on a journey through the fast lanes of automotive excellence.",
    },
    body: "body three",
    author: authorData[1],
    createdAt: "Dec 1, 2021 • 8 min read",
    updatedAt: "Dec 1, 2021 • 8 min read",
    image:
      "https://images.unsplash.com/photo-1703014076660-c69b905a740f?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Technology",
  },
  {
    id: "4",
    title: "Stargazing Secrets: Navigating Life Through Astrology",
    description: {
      subTitle: "sub title three",
      description:
        "Embark on a celestial voyage as we explore the mystical realm of astrology. Delve into horoscopes, cosmic connections, and the profound impact of celestial bodies on our lives. Whether you're a seasoned astrologer or a curious star-gazer, our blog offers insights, guidance, and a cosmic perspective to help you navigate the intricacies of life's journey.",
    },
    body: "body three",
    author: authorData[1],
    createdAt: "Jan 23, 2021 • 5 min read",
    updatedAt: "Jan 23, 2021 • 5 min read",
    image:
      "https://plus.unsplash.com/premium_photo-1700081737402-8aad0453bff8?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Fashion",
  },
];
