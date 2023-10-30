import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const TICK = 250;
const LONG_TICK = TICK * 3;

export default function IPv6TaxForm() {
  const [isLightOn, setIsLightOn] = useState(false);

  const turnLightOn = (isLong: boolean) => {
    return new Promise((resolve) => {
      setIsLightOn(true);
      setTimeout(
        () => {
          setIsLightOn(false);
          setTimeout(resolve, TICK);
        },
        isLong ? LONG_TICK : TICK,
      );
    });
  };

  useEffect(() => {
    const loop = setInterval(async () => {
      await turnLightOn(true);
      await turnLightOn(false);
      await turnLightOn(false);
      void turnLightOn(false);
    }, TICK * 15);
    return () => clearInterval(loop);
  }, []);

  const color = isLightOn
    ? "opacity-100 animate-opacity-up"
    : "opacity-10 animate-opacity-down";

  return (
    <TaxFormTemplate
      title="IPv6"
      flavortext={
        "They're taxing our internet! Time to revert to a more primitive method of communication."
      }
    >
      <div className="flex justify-center p-5">
        <LightBulbIcon className={color + " duration-400 h-10 w-10"} />
      </div>
    </TaxFormTemplate>
  );
}
