import { API_URL } from "./config";
import { getCookies } from "@/utils/cookies";

export async function postArticles(
  title: string,
  description: string,
  body: string,
  tagList: string[] = []
) {
  const token = getCookies("token");
  const res = await fetch(`${API_URL}/articles`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      article: {
        title: title,
        description: description,
        body: body,
        tagList: tagList,
      },
    }),
  });
  if (res.ok) {
    const user = await res.json();
    return user;
  } else {
    const errors = await res.json();
    return errors;
  }
}
