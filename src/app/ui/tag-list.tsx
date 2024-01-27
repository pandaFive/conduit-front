import { getTags } from "@/api/get-tags";
export default async function TagList() {
  const tags = await getTags();

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <p>Popular Tags</p>

        <div className="tag-list">
          {tags?.map((tag: string) => (
            <a key={tag} href={`/`} className="tag-pill tag-default">
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
