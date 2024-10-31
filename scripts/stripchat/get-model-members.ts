import { GetModelMembers } from "@/lib/stripchat/models/get-model-members";

async function main(){
  const members = await GetModelMembers("maidengirls");

  console.log(members);
}

main();
