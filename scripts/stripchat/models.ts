import { getModels } from "@/lib/stripchat/models/models";

async function main(){
  const models = await getModels("1", "1", "1", "girls");

  console.log(models);
}

main();