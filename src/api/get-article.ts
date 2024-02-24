export async function getArticle(slug: string) {
  const res = await fetch(`${process.env.API_HOST}/articles/${slug}`, {
    cache: "no-store",
  });

  if (res.ok) {
    const article = await res.json();
    return article;
  } else {
    const errors = await res.json();
    return errors;
  }
}
