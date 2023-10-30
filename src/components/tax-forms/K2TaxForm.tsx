import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";
import GuessCountryInput from "~/components/tax-forms/GuessCountryInput";

export default function K2TaxForm() {
  return (
    <TaxFormTemplate
      title="K2"
      flavortext="Most people don't pay attention to second place... but you're not most people."
    >
      <ul className="flex flex-col text-6xl">
        <li className="flex items-center gap-x-2">
          <p>🇦🇩</p>
          <GuessCountryInput answer="ANDORRA" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇦🇴</p>
          <GuessCountryInput answer="ANGOLA" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇦🇬</p>
          <GuessCountryInput answer="ANTIGUAANDBARBUDA" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇮🇳</p>
          <GuessCountryInput answer="INDIA" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇮🇩</p>
          <GuessCountryInput answer="INDONESIA" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇦🇪</p>
          <GuessCountryInput answer="UNITEDARABEMIRATES" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇬🇧</p>
          <GuessCountryInput answer="UNITEDKINGDOM" />
        </li>
        <li className="flex items-center gap-x-2">
          <p>🇺🇸</p>
          <GuessCountryInput answer="UNITEDSTATES" />
        </li>
      </ul>
      <p className="italic">
        Hint: you can solve any number of these, the extraction is consistent
        across all of them.
      </p>
    </TaxFormTemplate>
  );
}
