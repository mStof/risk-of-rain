import Spline from "@splinetool/react-spline/next";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen overflow-hidden">
      <div className="flex items-center justify-center overflow-hidden isolate size-fit">
        <Spline         scene="https://prod.spline.design/F254ERfwBPnLrtkv/scene.splinecode" 
/>
      </div>
      <h1 className="font-heading text-[120px] leading-24 w-fit">
        <span className="text-secondary-01">R</span>isk of RAin
      </h1>
      <p className="font-heading text-4xl text-secondary-01 absolute top-full left-1/2 -translate-x-1/2 leading-7 animate-bounce -translate-[calc(100%+2rem)] z-50">
        V
      </p>
    </main>
  );
}
