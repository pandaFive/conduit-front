import { getArticles } from "@/api/get-articles";
import ArticlePrev from "./article-prev";

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
  const articles = await getArticles().then((data) => data.articles);
  return (
    <div className="container page">
      <div className="row">
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

          <ul className="pagination">
            <li className="page-item active">
              <a className="page-link" href="">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="">
                2
              </a>
            </li>
          </ul>
        </div>

        <div className="col-md-3">
          <div className="sidebar">
            <p>Popular Tags</p>

            <div className="tag-list">
              <a href="" className="tag-pill tag-default">
                programming
              </a>
              <a href="" className="tag-pill tag-default">
                javascript
              </a>
              <a href="" className="tag-pill tag-default">
                emberjs
              </a>
              <a href="" className="tag-pill tag-default">
                angularjs
              </a>
              <a href="" className="tag-pill tag-default">
                react
              </a>
              <a href="" className="tag-pill tag-default">
                mean
              </a>
              <a href="" className="tag-pill tag-default">
                node
              </a>
              <a href="" className="tag-pill tag-default">
                rails
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
