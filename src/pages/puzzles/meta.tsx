import PuzzleTemplate from "~/components/PuzzleTemplate";
import {
  metaSolvedAtom,
  raccoontouilleSolvedAtom,
  taxFormsSolvedAtom,
  verseJumpingSolvedAtom,
  veryBusySolvedAtom,
} from "~/utils/atoms";
import { useAtom } from "jotai";

export default function Meta() {
  const [taxFormsSolved] = useAtom(taxFormsSolvedAtom);
  const [veryBusySolved] = useAtom(veryBusySolvedAtom);
  const [verseJumpingSolved] = useAtom(verseJumpingSolvedAtom);
  const [raccoontouilleSolved] = useAtom(raccoontouilleSolvedAtom);
  const [metaSolved] = useAtom(metaSolvedAtom);

  const acquiredAnswers = [
    ...(veryBusySolved ? ["ETA"] : ["???"]),
    ...(verseJumpingSolved ? ["ESTRANGE"] : ["???"]),
    ...(taxFormsSolved ? ["BARON"] : ["???"]),
    ...(raccoontouilleSolved ? ["LEASH"] : ["???"]),
  ];

  return (
    <PuzzleTemplate
      puzzleId={5}
      title="Everything Bagel"
      flavortext={
        <p>
          You have all the ingredients to build an everything bagel now! Well,{" "}
          <i>almost</i> everything — each sector still seems to be missing
          something. Where can you find the missing ingredients for your
          everything bagel?
        </p>
      }
      puzzleSolvedAtom={metaSolvedAtom}
    >
      <div className="flex w-full flex-col items-start">
        <h4 className="tracking-wide">Everything Bagel requires:</h4>
        <ul className="mt-2 text-2xl">
          <li>BEAUTY</li>
          <li>FERROMAGNETS</li>
          <li>HONORABLE</li>
          <li>FALSEHOODS</li>
        </ul>
      </div>
      <div className="flex w-full flex-col items-end">
        <h4 className="tracking-wide">{"You've acquired:"}</h4>
        <ul className="mt-2 text-right text-2xl">
          {acquiredAnswers.map((answer) => (
            <li key={answer}>{answer}</li>
          ))}
        </ul>
      </div>
      <div className="text-sm text-white/75">
        <p>
          Note: this is the meta puzzle, which means it uses the answers from
          previous puzzles.
        </p>
        <p className="mt-2">
          You may be able to solve it without every answer, but the more you
          have the easier this puzzle will be!
        </p>
      </div>
    </PuzzleTemplate>
  );
}
