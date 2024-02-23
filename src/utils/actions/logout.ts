"use server";

import { deleteCookie } from "../cookies";
import { redirect } from "next/navigation";

export async function logoutAction() {
  await deleteCookie("token");
  redirect("/");
}
