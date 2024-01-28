import { API_URL } from "./config";

export async function postLogin(email: string, password: string) {
  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: { email: email, password: password },
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
