"use client"

import { checkUsername } from "@/lib/stripchat/users/check-username";
import { createUser } from "@/lib/stripchat/users/create";
import { useEffect, useState } from "react";

export default function LoginPage() {
  return (
    <div className="top-0 left-0 min-h-screen items-center justify-center flex absolute bg-black backdrop-blur-lg bg-opacity-45 w-full z-50">
      <div className="container max-w-2xl px-10 py-20 text-white">
        <p className="text-4xl max-w-sm  text-start font-bold">
          Melde dich komplett kostenlos an.
        </p>

        <div className="flex flex-col gap-2 p-4">
        <div className="max-w-3xl flex items-center w-full h-12 rounded-xl bg-white/10 cursor-pointer border-white/5 border hover:border-white/10 group transition-all px-6 backdrop-blur-sm">
          <p className="group-hover:text-white/60 text-white/50 transition-colors font-medium text-xs">Nach Modell suchen...</p>
        </div>

        <div className="max-w-3xl flex items-center w-full h-12 rounded-xl bg-white/10 cursor-pointer border-white/5 border hover:border-white/10 group transition-all px-6 backdrop-blur-sm">
          <p className="group-hover:text-white/60 text-white/50 transition-colors font-medium text-xs">Nach Modell suchen...</p>
        </div>

        </div>
      </div>
    </div>
  );
}
