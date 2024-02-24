export async function postRegistration(
  username: string,
  email: string,
  password: string
) {
  const res = await fetch(`${process.env.API_HOST}/users`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
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
