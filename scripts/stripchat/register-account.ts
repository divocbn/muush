import { createUser } from "@/lib/stripchat/users/create";

async function main() {
  const user = await createUser();

  console.log(user);
}

main();
