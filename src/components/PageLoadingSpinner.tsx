import { Gabarito } from "next/font/google";
import Image from "next/image";

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

export default function PageLoadingSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src="/EverythingBagelCenter.png"
        alt={""}
        width={50}
        height={50}
        className="animate-spin-slow"
      />
      <span
        className={
          gabarito.className +
          " animate-pulse text-xl font-semibold tracking-wide text-white"
        }
      >
        Loading...
      </span>
    </div>
  );
}
