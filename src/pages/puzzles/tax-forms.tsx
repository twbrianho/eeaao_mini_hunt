import PuzzleTemplate from "~/components/PuzzleTemplate";
import GuessTaxFormInput from "~/components/tax-forms/GuessTaxFormInput";
import { useState } from "react";
import D20TaxForm from "~/components/tax-forms/D20TaxForm";
import AKB48TaxForm from "~/components/tax-forms/AKB48TaxForm";
import IPv6TaxForm from "~/components/tax-forms/IPv6TaxForm";
import K2TaxForm from "~/components/tax-forms/K2TaxForm";
import MI6TaxForm from "~/components/tax-forms/MI6TaxForm";

enum TaxForm {
  D20 = "D20",
  AKB48 = "AKB48",
  IPV6 = "IPV6",
  K2 = "K2",
  MI6 = "MI6",
}

export default function TaxForms() {
  const [guessInput, setGuessInput] = useState<string>("");

  const taxFormMap = {
    [TaxForm.D20]: <D20TaxForm />,
    [TaxForm.AKB48]: <AKB48TaxForm />,
    [TaxForm.IPV6]: <IPv6TaxForm />,
    [TaxForm.K2]: <K2TaxForm />,
    [TaxForm.MI6]: <MI6TaxForm />,
  };

  return (
    <PuzzleTemplate puzzleId={1} title="Tax Forms">
      <div className="flex flex-col justify-center gap-y-5">
        <h3>
          {
            "Never mind the W-2, here's a list of tax forms you'll need to fill out this year:"
          }
        </h3>
        <ul className="ml-4 flex list-disc flex-col gap-y-2">
          <li>The latest Internet Protocol</li>
          <li>{"Akihabara's famous idol group"}</li>
          <li>A die notably used in DnD</li>
          <li>{"UK's Secret Intelligence Service"}</li>
          <li>The second-highest mountain on Earth</li>
        </ul>
        <GuessTaxFormInput
          guessInput={guessInput}
          setGuessInput={setGuessInput}
          answers={[
            TaxForm.D20,
            TaxForm.AKB48,
            TaxForm.IPV6,
            TaxForm.K2,
            TaxForm.MI6,
          ]}
        />
        {taxFormMap[guessInput as TaxForm]}
      </div>
    </PuzzleTemplate>
  );
}
