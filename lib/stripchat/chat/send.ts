import { stripchat } from "@/lib/stripchat/client";
import { getConfigInitial } from "@/lib/stripchat/config/initial";

export async function sendChat(): Promise<boolean> {
  console.log("asdasd");

  const response = await fetch("https://de.stripchat.com/api/front/models/175620975/chat", {
    "headers": {
      "accept": "*/*",
      "accept-language": "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-type": "application/json",
      "front-version": "10.97.3",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"129\", \"Not=A?Brand\";v=\"8\", \"Chromium\";v=\"129\"",
      "sec-ch-ua-mobile": "?1",
      "sec-ch-ua-platform": "\"Android\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin"
    },
    "referrer": "https://de.stripchat.com/EleneGracey",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": "{\"text\":\"s\",\"csrfToken\":\"ece49e4da82257b9f11735a7e29b1b0b\",\"csrfTimestamp\":\"2024-10-31T21:54:27Z\",\"csrfNotifyTimestamp\":\"2024-11-02T09:54:27Z\",\"uniq\":\"6fpzjaindytsl8be\"}",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  });

  return true;
}
