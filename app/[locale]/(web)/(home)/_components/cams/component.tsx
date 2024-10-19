import { sleep } from "@/lib/utils/sleep";

import { Link } from 'next-view-transitions';

export default async function HomeCamsComponent() {
  await sleep(1000);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-4xl tracking-tighter">Empfohlene neue Cams</p>
        <div className="flex flex-col gap-3">
          <div className="w-60 h-32 bg-blue-200/75 rounded-md" />

          <div className="flex flex-col tracking-tight">
            <Link className="text-xl font-semibold hover:underline underline-offset-2" href="/de/erdal-goektas">Erdal Göktas</Link>
            <h1 className="text-sm font-medium text-white/45 tracking-[-0.0125rem]">2500 Zuschauer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
