"use server";

import { postLogin } from "@/api/post-login";
import { setCookie } from "../cookies";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const result = await postLogin(
    String(formData.get("email")),
    String(formData.get("password"))
  );

  if ("user" in result) {
    await setCookie("token", result.user.token);
    redirect("/");
  } else {
    return {
      errors: result,
      user: null,
    };
  }
}
