import { getUser } from "@/api/get-user";
import { getProfile } from "@/api/get-profile";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const profile = await getProfile(params.username);

  return (
    <div className="profile-page">
      <div className="user-info">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <Image
                src="http://i.imgur.com/Qr71crq.jpg"
                className="user-img"
                alt="user icon"
                width={200}
                height={200}
              />
              <h4>{profile.user.username}</h4>
              <p>
                Cofounder @GoThinkster, lived in Aol&apos;s HQ for a few months,
                kinda looks like Peeta from the Hunger Games
              </p>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-plus-round"></i>
                &nbsp; Follow {profile.user.username}
              </button>
              <button className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i>
                &nbsp; Edit Profile Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <div className="articles-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    My Articles
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    Favorited Articles
                  </a>
                </li>
              </ul>
            </div>

            <div className="article-preview">
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
                    Eric Simons
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 29
                </button>
              </div>
              <a
                href="/article/how-to-buil-webapps-that-scale"
                className="preview-link"
              >
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">
                    realworld
                  </li>
                  <li className="tag-default tag-pill tag-outline">
                    implementations
                  </li>
                </ul>
              </a>
            </div>

            <div className="article-preview">
              <div className="article-meta">
                <a href="/profile/albert-pai">
                  <Image
                    src="http://i.imgur.com/N4VcUeJ.jpg"
                    alt="user icon"
                    width={32}
                    height={32}
                  />
                </a>
                <div className="info">
                  <a href="/profile/albert-pai" className="author">
                    Albert Pai
                  </a>
                  <span className="date">January 20th</span>
                </div>
                <button className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart"></i> 32
                </button>
              </div>
              <a href="/article/the-song-you" className="preview-link">
                <h1>
                  The song you won&apos;t ever stop singing. No matter how hard
                  you try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul className="tag-list">
                  <li className="tag-default tag-pill tag-outline">Music</li>
                  <li className="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>

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
        </div>
      </div>
    </div>
  );
}
