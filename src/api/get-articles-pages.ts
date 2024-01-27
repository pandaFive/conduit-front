import { API_URL } from "./config";

export async function getArticlesPages() {
  const res = await fetch(`${API_URL}/articles/count`);
  const data = await res.json().then((d) => Math.ceil(d.count / 20));
  return data;
}
