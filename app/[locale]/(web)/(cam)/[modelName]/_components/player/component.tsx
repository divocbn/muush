import { sleep } from "@/lib/utils/sleep";

export default async function CamPlayerComponent() {
  await sleep(1000);

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-row gap-11 w-full h-full">
        <div className="max-w-4xl h-full w-full bg-white/10 rounded"></div>
        <div className="max-w-xs h-full w-full bg-white/10 rounded"></div>
      </div>

      <div className="flex flex-col">
        <h1 className="tracking-[-0.0125rem] font-medium text-base">Erdal Göktas</h1>
        <h1 className="tracking-[-0.0125rem] font-medium text-sm text-white/50">Sorry, but right now this room is not online.</h1>
      </div>
    </div>
  );
}
