"use server";

import { authFetch } from "@/lib/api/authFetch";

export async function getRecords() {
  const { response, unauthorized } = await authFetch("/staff/records", {
    method: "GET",
    cache: "no-store",
  });

  if (unauthorized) {
    return null;
  }

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch records");
  //   }

  return response.json();
}
