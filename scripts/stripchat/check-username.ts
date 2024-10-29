import { checkUsername } from "@/lib/stripchat/users/check-username";

async function main() {
  const user = await checkUsername("asd");

  console.log(user);
}

main();
