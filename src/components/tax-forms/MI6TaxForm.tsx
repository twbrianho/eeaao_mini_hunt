import TaxFormTemplate from "~/components/tax-forms/TaxFormTemplate";

const HIDDEN_PHRASES = [
  'Well that was easy. Sorry if the bars and dots misled you to think about Morse. It really is just this simple. The answer is "Oscar" in the NATO phonetic alphabet.',
  "If you're wondering why this puzzle is so short and easy, it's because I spent too much time on lower-priority tasks and ran out of time to actually implement them. This occurs to me on a daily basis.",
  "If you're still reading this, here's a freebie: the NATO phonetic alphabet is just the thing where they say \"Alpha Bravo Charlie Delta\" in place of letters. Each word starts with the letter they're trying to say.",
];

export default function MI6TaxForm() {
  return (
    <TaxFormTemplate
      title="MI6"
      flavortext="They always cover up the most important information."
    >
      <h3 className="text-center text-3xl font-black tracking-widest text-black">
        TOP SECRET
      </h3>
      <ul className="flex flex-col gap-y-2 leading-relaxed tracking-widest text-black">
        <li>
          <strong>Birthplace:</strong>{" "}
          <p className="inline-block break-keep">
            New Orle
            <p className="inline-block bg-black">???</p>,
          </p>{" "}
          Louisiana
        </li>
        <li>
          <strong>
            Superpo<p className="inline-block bg-black">???</p>:
          </strong>{" "}
          Inv
          <p className="inline-block bg-black">??</p>ibility
        </li>
        <li>
          <strong>
            Fa<p className="inline-block bg-black">???</p>r:
          </strong>{" "}
          Unknown
        </li>
        <li>
          <strong>Mother:</strong> Scar
          <p className="inline-block break-keep">
            <p className="inline-block bg-black">???</p>t
          </p>{" "}
          Johansson (but not the famous one)
        </li>
        <li>
          <strong>Wanted by:</strong> the{" "}
          <p className="inline-block break-keep">
            In
            <p className="inline-block bg-black">???</p>national
          </p>{" "}
          Criminal Police{" "}
          <p className="inline-block break-keep">
            <p className="inline-block bg-black">?</p>rganization
          </p>
          for multiple counts of tax fraud & tax evasion.
        </li>
      </ul>
    </TaxFormTemplate>
  );
}
