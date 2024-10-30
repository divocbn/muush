import { stripchat } from "@/lib/stripchat/client";
import { getModelsCount } from "@/lib/stripchat/models/get-models-count";
import { searchModels } from "@/lib/stripchat/models/search-models";

async function main() {
  const models = await searchModels("hel", "30", "girls");

  console.log(models);
}

main();
