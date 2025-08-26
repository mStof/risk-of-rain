import React from "react";

export default function Home() {
  return (
    <main className="bg-neutral-bg bg-(image:--bg-pattern) flex flex-col items-center justify-center h-screen overflow-hidden">
<div className="flex items-center justify-center overflow-hidden isolate size-fit">
  <div className="size-[25rem] bg-red-400 z-10"></div>
  <div className="h-screen aspect-square bg-radial from-secondary-10/25 to-75% absolute"></div>
</div>
<h1 className="font-heading text-[120px] leading-24 w-fit"><span className="text-secondary-01">R</span>isk of RAin</h1>
      <p className="font-heading text-4xl text-secondary-01 absolute top-full left-1/2 -translate-x-1/2 leading-7 animate-bounce -translate-[calc(100%+2rem)] z-50">V</p>
    </main>
  );
}