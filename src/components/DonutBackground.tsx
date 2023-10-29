import Image from "next/image";

export default function DonutBackground() {
  return (
    <div className="fixed -z-10 flex h-full w-full justify-center overflow-hidden sm:pt-10">
      <Image
        alt=""
        src="/EverythingBagelAll.png"
        width={400}
        height={400}
        className="fixed animate-spin-slower"
      />
      <Image
        alt=""
        src="/EverythingBagelCenter.png"
        width={400}
        height={400}
        className="fixed animate-spin-slow"
      />
    </div>
  );
}
