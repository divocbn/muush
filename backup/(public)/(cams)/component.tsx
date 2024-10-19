import { sleep } from "@/lib/utils/sleep";

export default async function PublicCamsComponent() {
  await sleep(1000);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-4xl tracking-tighter">Empfohlene neue Cams</p>
        <div className="flex flex-col gap-3">
          <div className="w-80 h-44 bg-blue-200/75 rounded-md" />

          <div className="flex flex-col tracking-tight">
            <h1 className="text-xl font-semibold">Erdal Göktas</h1>
            <h1 className="text-sm font-semibold text-white/45">2500 Zuschauer</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
