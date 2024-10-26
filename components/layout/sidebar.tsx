import { Link } from 'next-view-transitions'

export default function Sidebar() {
  return (
    <div className="flex flex-col max-w-40 w-full gap-10">

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-xs font-semibold tracking-normal">Startseite</h3>
        <Link
          href="/de/erdal-goektas"
          className="h-10 w-full bg-white/10 rounded backdrop-blur-sm flex items-center justify-center text-xs text-white/80 tracking-normal">
        </Link>
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-xs font-semibold tracking-normal">Kategorien</h3>
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
      </div>

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-xs font-semibold tracking-normal">Herkunft</h3>
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
        <div className="h-10 w-full bg-white/10 rounded backdrop-blur-sm" />
      </div>
    </div>
  );
}
