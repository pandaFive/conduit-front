export async function getTags() {
  const res = await fetch(`${process.env.API_HOST}/tags`, {
    cache: "no-store",
  });
  const data = await res.json().then((d) => d.tags);
  return data;
}
