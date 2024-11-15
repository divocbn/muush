import { sendChat } from "@/lib/stripchat/chat/send";
import { stripchat } from "@/lib/stripchat/client";
import { getModelsCount } from "@/lib/stripchat/models/get-models-count";

async function main() {
  const count = await sendChat();

  console.log(count);
}

main();
