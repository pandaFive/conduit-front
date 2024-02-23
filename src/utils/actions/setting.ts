"use server";

import { putUser } from "@/api/put-user";
import { redirect } from "next/navigation";

export async function settingAction(formData: FormData) {
  const result = await putUser(
    String(formData.get("image")),
    String(formData.get("username")),
    String(formData.get("bio")),
    String(formData.get("email")),
    String(formData.get("password"))
  );
  if ("user" in result) {
    redirect("/");
  } else {
    return {
      errors: result,
      user: null,
    };
  }
}
