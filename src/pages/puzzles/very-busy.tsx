import PuzzleTemplate from "~/components/PuzzleTemplate";
import { veryBusySolvedAtom } from "~/utils/atoms";

export default function VeryBusy() {
  return (
    <PuzzleTemplate
      puzzleId={2}
      title="Very Busy!"
      puzzleSolvedAtom={veryBusySolvedAtom}
    >
      <div></div>
    </PuzzleTemplate>
  );
}
