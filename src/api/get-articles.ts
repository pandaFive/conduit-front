import { API_URL } from "@/api/config";

export async function getArticles(page: number) {
  const res = await fetch(`${API_URL}/articles?offset=${(page - 1) * 20}`);
  const data = await res.json();
  return data;
}
