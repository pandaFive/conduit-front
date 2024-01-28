import { getArticle } from "@/api/get-article";
import { getUser } from "@/api/get-user";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const currentUser = await getUser();
  const data = await getArticle(slug);
  const day = formatDate(new Date(data.article.createdAt));
  const authorName = data.article.author.username;

  return (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{data.article.title}</h1>

          <div className="article-meta">
            <a href="/profile/eric-simons">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="user icon"
                width={32}
                height={32}
              />
            </a>
            <div className="info">
              <a href="/profile/eric-simons" className="author">
                {authorName}
              </a>
              <span className="date">{day}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {authorName} <span className="counter">(10)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Post{" "}
              <span className="counter">({data.article.favoritesCount})</span>
            </button>
            {data.article.author.username === currentUser.username ? (
              <>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="ion-trash-a"></i> Delete Article
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>{data.article.description}</p>
            <div>{data.article.body}</div>
            <ul className="tag-list">
              {data.article.tagList?.map((tag: string) => (
                <li key={tag} className="tag-default tag-pill tag-outline">
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />

        <div className="article-actions">
          <div className="article-meta">
            <a href="profile.html">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                alt="user icon"
                width={32}
                height={32}
              />
            </a>
            <div className="info">
              <a href="" className="author">
                {authorName}
              </a>
              <span className="date">{day}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"></i>
              &nbsp; Follow {authorName}
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"></i>
              &nbsp; Favorite Article{" "}
              <span className="counter">({data.article.favoritesCount})</span>
            </button>
            {currentUser.username === authorName ? (
              <>
                <button className="btn btn-sm btn-outline-secondary">
                  <i className="ion-edit"></i> Edit Article
                </button>
                <button className="btn btn-sm btn-outline-danger">
                  <i className="ion-trash-a"></i> Delete Article
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
                <textarea
                  className="form-control"
                  placeholder="Write a comment..."
                  rows={3}
                ></textarea>
              </div>
              <div className="card-footer">
                <Image
                  src="http://i.imgur.com/Qr71crq.jpg"
                  className="comment-author-img"
                  alt="user icon"
                  width={32}
                  height={32}
                />
                <button className="btn btn-sm btn-primary">Post Comment</button>
              </div>
            </form>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt="user icon"
                    width={32}
                    height={32}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>

            <div className="card">
              <div className="card-block">
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div className="card-footer">
                <a href="/profile/author" className="comment-author">
                  <Image
                    src="http://i.imgur.com/Qr71crq.jpg"
                    className="comment-author-img"
                    alt="user icon"
                    width={32}
                    height={32}
                  />
                </a>
                &nbsp;
                <a href="/profile/jacob-schmidt" className="comment-author">
                  Jacob Schmidt
                </a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
                  <i className="ion-trash-a"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
