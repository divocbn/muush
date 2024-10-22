"use client"

import { ReactNode } from "react"
import Page from "../../(home)/page"
import { Button } from "@/components/ui/button"

type CamLayoutProps = {
  info: ReactNode
  chat: ReactNode
  player: ReactNode
}

export default function CamLayout({
  player, chat, info
}: CamLayoutProps) {
  return (
    <div className="flex flex-col gap-5  vt-name-[container] w-full">
      <div className="flex flex-row gap-2 w-full h-full">
        {player}
        {chat}
      </div>

      {info}
    </div>
  );
}
