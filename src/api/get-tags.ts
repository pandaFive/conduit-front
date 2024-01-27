import { API_URL } from "./config";

export async function getTags() {
  const res = await fetch(`${API_URL}/tags`);
  const data = await res.json().then((d) => d.tags);
  return data;
}
