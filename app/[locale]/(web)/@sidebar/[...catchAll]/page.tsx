import { ChartGantt, Globe, Home } from "lucide-react";
import { Link } from 'next-view-transitions';

export default function SidebarEverythingElse() {
  return (
    <div className="flex flex-col max-w-40 w-fit gap-10">
      <div className="flex flex-col gap-3 w-full">
        <div className="h-5 w-full items-center justify-center flex"><Home className="w-3" strokeWidth={2.7} /></div>
        <Link
          href="/de"
          className="h-10 w-10 bg-white/10 rounded flex items-center justify-center text-xs text-white/80 tracking-normal">
        </Link>
        <div className="h-10 w-10 bg-white/10 rounded" />
        <div className="h-10 w-10 bg-white/10 rounded" />
      </div>

      <div className="flex flex-col gap-3 w-full">
      <div className="h-5 w-full items-center justify-center flex"><ChartGantt className="w-3" strokeWidth={2.7} /></div>

        <div className="h-10 w-10 bg-white/10 rounded" />
        <div className="h-10 w-10 bg-white/10 rounded" />
        <div className="h-10 w-10 bg-white/10 rounded" />
      </div>

      <div className="flex flex-col gap-3 w-full">
      <div className="h-5 w-full items-center justify-center flex"><Globe className="w-3" strokeWidth={2} /></div>

        <div className="h-10 w-10 bg-white/10 rounded" />
        <div className="h-10 w-10 bg-white/10 rounded" />
        <div className="h-10 w-10 bg-white/10 rounded" />
      </div>
    </div>
  );
}
