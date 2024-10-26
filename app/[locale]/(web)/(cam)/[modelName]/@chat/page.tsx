import { sleep } from "@/lib/utils/sleep";
import { DoorClosed, DoorOpen } from "lucide-react";

export default async function CamChatPage() {
  await sleep(250);

  return (
    <div className="h-full w-full bg-white/10 rounded-r backdrop-blur-sm tracking-normal">
    </div>
  );
}
