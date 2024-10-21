import { sleep } from "@/lib/utils/sleep";
import { DoorClosed, DoorOpen } from "lucide-react";

export default async function CamChatComponent() {
  await sleep(1000);

  return (
    <div className="h-full w-full bg-white/10 rounded-r tracking-normal">
      <div className="h-12 w-full bg-black/30  flex items-center gap-2">
        <div className="px-5 flex items-center font-medium gap-2 bg-black/15 h-full">
          <DoorOpen className="w-4 text-white/50" strokeWidth={1.5} />
          <p className="text-[12px] text-white/50">Public</p>
        </div>

        <div className="p-4 flex items-center font-medium gap-2 ">
          <DoorClosed className="w-4 text-white/50" strokeWidth={1.5} />
          <p className="text-[12px] text-white/50">Private</p>
        </div>
      </div>
    </div>
  );
}
