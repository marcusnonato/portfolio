export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-72 left-1/2 h-[700px] w-[700px] -translate-x-1/2 transform rounded-full bg-indigo-600/30 blur-[200px] will-change-transform" />
      <div className="absolute right-1/2 -bottom-72 h-[700px] w-[700px] translate-x-1/2 transform rounded-full bg-indigo-600/10 blur-[200px] will-change-transform" />
    </div>
  );
}
