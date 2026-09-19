import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0F1115] px-6 py-24 font-sans sm:px-16">
      <main className="flex w-full max-w-2xl flex-col gap-10">
        <p className="text-sm text-[#8A93A3]">Studio — v2.4</p>

        <h1 className="max-w-lg text-4xl font-semibold leading-[1.15] tracking-tight text-[#F3F1EA] sm:text-5xl">
          Build interfaces that feel considered, not assembled.
        </h1>

        <p className="max-w-md text-lg leading-8 text-[#A6AEBB]">
          A component kit and a set of defaults for teams who&apos;d rather ship
          something distinctive than another templated dashboard.
        </p>

        <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 sm:max-w-md">
          <div>
            <p className="text-2xl font-semibold text-[#F3F1EA]">40+</p>
            <p className="mt-1 text-sm text-[#8A93A3]">Components</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#F3F1EA]">12kb</p>
            <p className="mt-1 text-sm text-[#8A93A3]">Core bundle</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#F3F1EA]">0</p>
            <p className="mt-1 text-sm text-[#8A93A3]">Dependencies</p>
          </div>
        </div>

        <div className="flex gap-6 text-sm text-[#C9CFD8]">
          <button className="border-b border-transparent hover:border-[#C9CFD8]">
            Read the docs
          </button>
          <button className="border-b border-transparent hover:border-[#C9CFD8]">
            View source
          </button>
        </div>
      </main>
    </div>
  );
}
