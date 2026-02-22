export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute -top-[500px] left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 transform rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.3)_0%,transparent_60%)] will-change-transform" />
      <div className="absolute right-1/2 -bottom-[500px] h-[1000px] w-[1000px] translate-x-1/2 transform rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.1)_0%,transparent_60%)] will-change-transform" />
    </div>
  );
}
