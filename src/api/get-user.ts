import { API_URL } from "./config";
import { getCookies } from "@/utils/cookies";

export async function getUser() {
  const token = getCookies("token");
  const res = await fetch(`${API_URL}/user`, {
    method: "GET",
    cache: "no-store",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    return null;
  } else {
    const currentUser = await res.json();
    return currentUser.user;
  }
}
