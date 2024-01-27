import { getArticles } from "@/api/get-articles";
import { getArticlesPages } from "@/api/get-articles-pages";
import ArticlePrev from "./article-prev";
import Pagination from "./pagination";

interface Articles {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}

export default async function ArticlesContainer({
  currentPage,
}: {
  currentPage: number;
}) {
  const articles = await getArticles(currentPage).then((data) => data.articles);
  const totalPage = await getArticlesPages();
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link" href="">
              Your Feed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="">
              Global Feed
            </a>
          </li>
        </ul>
      </div>
      {/* article prevをここに入れる */}
      {articles?.map((article: Articles) => (
        <ArticlePrev
          key={article.slug}
          slug={article.slug}
          username={article.author.username}
          createdAt={new Date(article.createdAt)}
          title={article.title}
          description={article.description}
          tagList={article.tagList}
        />
      ))}
      <Pagination totalPage={totalPage} />
    </div>
  );
}
