"use client"

import { checkUsername } from "@/lib/stripchat/users/check-username";
import { createUser } from "@/lib/stripchat/users/create";
import { useEffect, useState } from "react";

export default function LoginPage() {
  /**
   * just for test the current api
   */
  const [usernameValid, setUsernameValid] = useState(false);

  useEffect(() => {
    async function checkUsernameInClient() {
      /*
        setUsernameValid(
        await checkUsername("divo1231")
      );
      */

      await createUser();
    }

    checkUsernameInClient();
  });

  return (
    <div className="top-0 left-0 min-h-screen items-center justify-center flex absolute bg-black backdrop-blur-lg bg-opacity-45 w-full z-50">
      <div className="container max-w-lg bg-white px-10 py-20 text-black">
        <p className="text-4xl tracking-tight text-black font-semibold">
          Werde jetzt Teil
        </p>

        { usernameValid ? "valid" :"invalid"}
      </div>
    </div>
  );
}
