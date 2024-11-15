import { getChat } from "@/lib/stripchat/chat/chat";

async function main() {
  const user = await getChat("maidengirls");

  console.log(user);
}

main();
