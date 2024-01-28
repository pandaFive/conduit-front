import { API_URL } from "./config";

export async function getArticle(slug: string) {
  const res = await fetch(`${API_URL}/articles/${slug}`, {
    cache: "no-store",
  });

  if (res.ok) {
    const article = await res.json();
    return article;
  } else {
    const errors = await res.json();
    return errors;
  }
}
