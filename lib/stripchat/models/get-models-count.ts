import { stripchat } from "@/lib/stripchat/client";

export type GetModelsCountError = {
  count: number
}

export async function getModelsCount(): Promise<number> {
  const response = await stripchat.get<GetModelsCountError>(
    `models/count`
  ).json();

  return response.count;
}
