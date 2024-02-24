export async function getArticlesPages() {
  const res = await fetch(`${process.env.API_HOST}/articles/count`, {
    cache: "no-store",
  });
  const data = await res.json().then((d) => Math.ceil(d.count / 20));
  return data;
}
