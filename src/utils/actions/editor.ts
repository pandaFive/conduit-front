"use server";

import { postArticles } from "@/api/post-articles";
import { redirect } from "next/navigation";

export async function editAction(formData: FormData) {
  const result = await postArticles(
    String(formData.get("title")),
    String(formData.get("description")),
    String(formData.get("body")),
    String(formData.get("tagList")).split(" ")
  );

  if ("article" in result) {
    redirect("/");
  } else {
    return {
      errors: result,
      article: null,
    };
  }
}
