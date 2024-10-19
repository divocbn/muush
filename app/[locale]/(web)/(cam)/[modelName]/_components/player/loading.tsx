export default function CamPlayerLoading() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-row gap-11 w-full h-full">
        <div className="max-w-4xl h-full w-full bg-white/5 animate-pulse rounded"></div>
        <div className="max-w-xs h-full w-full bg-white/5 animate-pulse rounded"></div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="w-24 h-6 bg-white/5 animate-pulse" />
        <div className="w-72 h-5 bg-white/5 animate-pulse" />
      </div>
    </div>
  );
}
