import { stripchat } from "@/lib/stripchat/client";

export type ConfigInitialResponse = {
  initial: {
    client: {
      csrfToken: string
      csrfTimestamp: string
      csrfNotifyTimestamp: string
      guestId: number
      sessionHash: string
    }
  }
}

export async function getConfigInitial(): Promise<ConfigInitialResponse> {
  const response = await stripchat.get<ConfigInitialResponse>(
    `v3/config/initial?timezoneOffset=-120&timezone=Europe%2FBerlin&requestPath=%2Fnews&defaultTag=girls&disableClient=0&uniq=mke2h1x56pjdzqwo`
  ).json();

  return response;
}
