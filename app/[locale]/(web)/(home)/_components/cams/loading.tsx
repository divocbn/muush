export default function HomeCamsLoading() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <div className="w-96 h-10 bg-white/5 animate-pulse" />
        <div className="flex flex-col gap-3">
          <div className="w-60 h-32 bg-white/5 rounded-md animate-pulse" />

          <div className="flex flex-col tracking-tight gap-1">
            <div className="w-28 h-7 bg-white/5 animate-pulse" />
            <div className="w-24 h-5 bg-white/5 animate-pulse" />
          </div>
        </div>
      </div>
    </div>

  );
}
