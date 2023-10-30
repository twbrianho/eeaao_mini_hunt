import { JetBrains_Mono } from "next/font/google";
import { type ReactNode } from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
});

interface TaxFormTemplateProps {
  title: string;
  flavortext?: ReactNode;
}

export default function TaxFormTemplate(
  props: React.PropsWithChildren<TaxFormTemplateProps>,
) {
  return (
    <div
      className={jetBrainsMono.className + " bg-orange-50 p-1 text-orange-950"}
    >
      <div className="border-2 border-dashed border-orange-950/30 px-4 py-3">
        <h2 className="text-xl font-black tracking-wider">
          Form {props.title}
        </h2>
        {props.flavortext && <p className="mt-2 text-sm">{props.flavortext}</p>}
        <div className="mt-5 flex flex-col gap-y-5 text-sm">
          {props.children}
        </div>
      </div>
    </div>
  );
}
