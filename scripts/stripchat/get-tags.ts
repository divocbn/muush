import { getTags } from "@/lib/stripchat/tags/get-tags";

async function main(){
  const tags = await getTags();

  console.log(tags);
}

main();
