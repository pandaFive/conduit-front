import { API_URL } from "./config";
import { getCookies } from "@/utils/cookies";

export const postFavorite = async (slug: string) => {
  const token = getCookies("token");
  const res = await fetch(`${API_URL}/articles/${slug}/favorite`, {
    method: "POST",
    cache: "no-store",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (res.ok) {
    const article = await res.json();
    return article;
  } else {
    const errors = await res.json();
    return errors;
  }
};
