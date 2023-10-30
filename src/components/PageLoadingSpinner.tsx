import { Bungee } from "next/font/google";
import Image from "next/image";
import EverythingBagelCenter from "../images/EverythingBagelCenter.png";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

export default function PageLoadingSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Image
        src={EverythingBagelCenter}
        alt={""}
        width={50}
        height={50}
        className="animate-spin-medium"
      />
      <span
        className={
          bungee.className +
          " ml-2 animate-pulse text-xl font-semibold tracking-wide text-white"
        }
      >
        Loading...
      </span>
    </div>
  );
}
