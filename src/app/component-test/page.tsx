import ArticlesContainer from "../ui/articles-container";
import { getArticles } from "@/api/get-articles";

export default async function Page() {
  return <ArticlesContainer currentPage={1} />;
  // const data = await getArticles().then((data) => data.articles);

  // console.log(typeof data[0].createdAt);
  // return <div>hello</div>;
}
