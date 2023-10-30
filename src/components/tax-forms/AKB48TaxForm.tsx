import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";
import { useState } from "react";
import { CurrencyYenIcon, UserIcon } from "@heroicons/react/20/solid";

enum Color {
  RED = "red",
  ORANGE = "orange",
  YELLOW = "yellow",
  GREEN = "green",
  BLUE = "blue",
  PURPLE = "purple",
  PINK = "pink",
}

const COLOR_GRID = [
  [Color.RED, Color.BLUE, Color.PURPLE, Color.ORANGE, Color.PINK, Color.YELLOW],
  [Color.YELLOW, Color.ORANGE, Color.RED, Color.PINK, Color.ORANGE, Color.RED],
  [
    Color.GREEN,
    Color.YELLOW,
    Color.BLUE,
    Color.YELLOW,
    Color.RED,
    Color.ORANGE,
  ],
  [Color.ORANGE, Color.PINK, Color.RED, Color.PINK, Color.BLUE, Color.PURPLE],
  [
    Color.PURPLE,
    Color.GREEN,
    Color.GREEN,
    Color.ORANGE,
    Color.PURPLE,
    Color.GREEN,
  ],
  [Color.ORANGE, Color.RED, Color.BLUE, Color.RED, Color.PINK, Color.ORANGE],
  [Color.GREEN, Color.PINK, Color.YELLOW, Color.PINK, Color.BLUE, Color.GREEN],
  [Color.ORANGE, Color.BLUE, Color.RED, Color.YELLOW, Color.RED, Color.ORANGE],
];

interface SponsorRule {
  isTaxable: boolean;
  sponsor: string;
}

const SPONSOR_RULES = [
  {
    isTaxable: true,
    sponsor: "Grubhub",
  },
  {
    isTaxable: false,
    sponsor: "Levi's",
  },
  {
    isTaxable: false,
    sponsor: "Lyft",
  },
  {
    isTaxable: false,
    sponsor: "Macdonald's",
  },
  {
    isTaxable: true,
    sponsor: "Starbucks",
  },
  {
    isTaxable: true,
    sponsor: "Yahoo!",
  },
  {
    isTaxable: false,
    sponsor: "Zoom",
  },
];

export default function AKB48TaxForm() {
  const [isColorblind, setIsColorblind] = useState(false);

  return (
    <TaxFormTemplate
      title="AKB-48"
      flavortext={
        <div>
          <p>
            Not all idols are subject to the Idol Tax — only those with specific
            sponsors!
          </p>
          <p className="mt-2">
            {
              "Click on the idols below that need to pay taxes, but don't forget to pay attention to the big picture!"
            }
          </p>
        </div>
      }
    >
      <div className="grid-rows-8 grid grid-cols-6 gap-x-2 gap-y-1">
        {COLOR_GRID.map((row, rowIdx) =>
          row.map((color, colIdx) => (
            <IdolCell key={`${rowIdx}-${colIdx}`} color={color} />
          )),
        )}
      </div>
      <ul className="flex flex-col gap-y-2">
        {SPONSOR_RULES.map((rule, idx) => (
          <li key={idx} className="flex items-center gap-x-1">
            {rule.isTaxable ? (
              <CurrencyYenIcon className="h-4 w-4" />
            ) : (
              <UserIcon className="h-4 w-4" />
            )}
            <p>{rule.sponsor + "-sponsored idols"}</p>
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-end">
        <button
          onClick={() => setIsColorblind(true)}
          className="rounded bg-orange-950 px-3 py-2 text-orange-50"
        >
          Colorblind version
        </button>
        {isColorblind && (
          <div className="mt-2 text-right text-xs">
            {'Psst! Hey friend, the answer is "A". Don\'t tell the others!'}
          </div>
        )}
      </div>
    </TaxFormTemplate>
  );
}

interface IdolCellProps {
  color: Color;
}

function IdolCell(props: IdolCellProps) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const textColorClass = {
    [Color.RED]: "text-red-500",
    [Color.ORANGE]: "text-orange-500",
    [Color.YELLOW]: "text-yellow-500",
    [Color.GREEN]: "text-green-500",
    [Color.BLUE]: "text-blue-500",
    [Color.PURPLE]: "text-purple-500",
    [Color.PINK]: "text-pink-400",
  }[props.color];

  return (
    <div className="flex items-center justify-center">
      {selected ? (
        <CurrencyYenIcon
          onClick={handleClick}
          className={
            textColorClass + " h-10 w-10 hover:opacity-50 sm:h-20 sm:w-20"
          }
        />
      ) : (
        <UserIcon
          onClick={handleClick}
          className={
            textColorClass + " h-10 w-10 hover:opacity-50 sm:h-20 sm:w-20"
          }
        />
      )}
    </div>
  );
}
