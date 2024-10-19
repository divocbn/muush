import { Link } from 'next-view-transitions'

export default function Sidebar() {
  return (
    <div className="flex flex-col max-w-40 w-full gap-10">

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-sm font-semibold">Startseite</h3>
        <Link
          href="/de/erdal-goektas"
          className="h-10 w-full bg-white/10 rounded flex items-center justify-center text-xs text-white/80 tracking-normal">
        </Link>
        <div className="h-10 w-full bg-white/10 rounded" />
        <div className="h-10 w-full bg-white/10 rounded" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-sm font-semibold">Kategorien</h3>
        <div className="h-10 w-full bg-white/10 rounded" />
        <div className="h-10 w-full bg-white/10 rounded" />
        <div className="h-10 w-full bg-white/10 rounded" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-sm font-semibold">Herkunft</h3>
        <div className="h-10 w-full bg-white/10 rounded" />
        <div className="h-10 w-full bg-white/10 rounded" />
        <div className="h-10 w-full bg-white/10 rounded" />
      </div>
    </div>
  );
}
