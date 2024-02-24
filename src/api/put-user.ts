import { getCookies } from "@/utils/cookies";

export async function putUser(
  image: string,
  username: string,
  bio: string,
  email: string,
  password: string
) {
  const token = getCookies("token");
  const res = await fetch(`${process.env.API_HOST}/user`, {
    method: "PUT",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      user: { username: username, email: email, password: password },
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
