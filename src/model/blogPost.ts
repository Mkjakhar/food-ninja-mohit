import Author from "./author";
type Category = "Travel" | "Food Theory" | "Technology" | "Fashion";
export default interface BlogPost {
  id: string;
  title: string;
  description: { subTitle: string; description: string };
  body: string;
  //   content: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  image: string;
  category: Category;
}
  