import { stripchat } from "@/lib/stripchat/client";

export type UserCheckUsernameError = {
  error?: string
}

export async function checkUsername(username: string): Promise<boolean> {
  const searchParams = new URLSearchParams();
  searchParams.set('username', username);

  const response = await stripchat.get<UserCheckUsernameError>(
    `users/checkUsername`,
    { searchParams }
  ).json();

  if (response.error)
    return false;

  return true;
}
