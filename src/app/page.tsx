import Image from "next/image";
import styles from "./page.module.css";
import ArticlesContainer from "./ui/articles-container";
import TagList from "./ui/tag-list";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <ArticlesContainer currentPage={currentPage} />
          <TagList />
        </div>
      </div>
    </div>
  );
}
