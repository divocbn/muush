import { stripchat } from "@/lib/stripchat/client";
import { getModelsCount } from "@/lib/stripchat/models/get-models-count";

async function main() {
  const count = await getModelsCount();

  console.log(count);
}

main();
