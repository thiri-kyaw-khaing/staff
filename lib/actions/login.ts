"use server";

import { API_BASE_URL } from "@/app/api/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { z } from "zod";

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message: string;
};

const FormSchema = z.object({
  email: z.string().trim().email("Invalid email address!"),
  password: z.string().trim().min(6, "Password must be at least 6 characters!"),
});

export async function LoginAction(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = FormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // Validation error
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid input",
    };
  }

  const { email, password } = validatedFields.data;

  const response = await fetch(`${API_BASE_URL}/auth/staff/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    cache: "no-store",
  });

  // ❌ API error
  if (!response.ok) {
    const errorData = await response.json();
    return {
      message: errorData.message || "Login failed",
    };
  }

  // ✅ Handle cookies
  const setCookie = response.headers.get("set-cookie");

  if (setCookie) {
    const accessMatch = setCookie.match(/access_token=([^;]+)/);
    const refreshMatch = setCookie.match(/refresh_token=([^;]+)/);

    const cookieStore = await cookies();

    if (accessMatch) {
      cookieStore.set("access_token", accessMatch[1], {
        httpOnly: true,
        path: "/",
      });
    }

    if (refreshMatch) {
      cookieStore.set("refresh_token", refreshMatch[1], {
        httpOnly: true,
        path: "/",
      });
    }
  }

  // ✅ Redirect (no return needed)
  redirect("/dashboard");
}
