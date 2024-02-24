export async function getArticles(page: number) {
  const res = await fetch(
    `${process.env.API_HOST}/articles?offset=${(page - 1) * 20}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
}
