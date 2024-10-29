import { sleep } from "@/lib/utils/sleep";

export default async function CamPlayerPage() {
  await sleep(1000);

  return (
    <div className="min-w-[60rem] h-full w-full bg-white/10 rounded-l relative backdrop-blur-sm " />
  );
}
