import { API_URL } from "@/api/config";

export async function getArticles() {
  const res = await fetch(`${API_URL}/articles`);
  const data = await res.json();
  return data;
}
