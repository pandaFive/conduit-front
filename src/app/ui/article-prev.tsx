import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/utils/format-date";

export default function ArticlePrev({
  slug,
  username,
  createdAt,
  title,
  description,
  tagList,
}: {
  slug: string;
  username: string;
  createdAt: Date;
  title: string;
  description: string;
  tagList: string[];
}) {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href={`/profile/${username}`}>
          <Image
            src="http://i.imgur.com/Qr71crq.jpg"
            alt="user icon"
            width={32}
            height={32}
          />
        </a>
        <div className="info">
          <a href={`/profile/${username}`} className="author">
            {username}
          </a>
          <span className="date">{formatDate(createdAt)}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> 29
        </button>
      </div>
      <Link href={`/article/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
        <ul className="tag-list">
          {tagList?.map((tag) => (
            <li key={tag} className="tag-default tag-pill tag-outline">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
}
