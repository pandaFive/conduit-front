"use server";

import { postRegistration } from "@/api/post-registration";
import { redirect } from "next/navigation";
import { setCookie } from "../cookies";

export async function registerAction(formData: FormData) {
  const result = await postRegistration(
    String(formData.get("username")),
    String(formData.get("email")),
    String(formData.get("password"))
  );

  if ("user" in result) {
    await setCookie("token", result.user.token);
    redirect("/");
    return {
      errors: null,
      user: result.user,
    };
  } else {
    return {
      errors: result,
      user: null,
    };
  }
}
