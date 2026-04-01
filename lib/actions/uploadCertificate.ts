"use server";

import { API_BASE_URL } from "@/app/api/api";
import { cookies } from "next/headers";
import { authFetch } from "../api/authFetch";

export type UploadCertificateState = {
  message?: string;
  ok?: boolean;
};

export async function uploadCertificate(
  _prevState: UploadCertificateState,
  formData: FormData,
): Promise<UploadCertificateState> {
  const trainingId = formData.get("trainingId");
  const description = formData.get("description");
  const image = formData.get("image");

  if (!trainingId) {
    return { message: "Training ID is required.", ok: false };
  }

  if (!image || !(image instanceof File) || image.size === 0) {
    return { message: "Certificate file is required.", ok: false };
  }

  const body = new FormData();
  body.append("trainingId", String(trainingId));
  if (description) body.append("description", String(description));
  body.append("image", image);

  const { response } = await authFetch("/staff/certificates", {
    method: "POST",
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    return { message: "Failed to upload certificate.", ok: false };
  }

  return { message: "Upload successful.", ok: true };
}
