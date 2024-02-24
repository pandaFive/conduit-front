export async function getProfile(username: string) {
  const res = await fetch(`${process.env.API_HOST}/profile/${username}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    const profile = res.json();
    return profile;
  } else {
    const errors = await res.json();
    return errors;
  }
}
