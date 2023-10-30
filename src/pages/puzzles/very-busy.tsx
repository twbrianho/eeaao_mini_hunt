import PuzzleTemplate from "~/components/PuzzleTemplate";
import { timesVisitedAtom, veryBusySolvedAtom } from "~/utils/atoms";
import { useAtom } from "jotai";
import { useEffect } from "react";

const PHRASES = [
  "[Puzzle under construction]", // <- No one should see this one, since the first visit starts us at index 1
  "Hey, sorry, I'm too busy to do this puzzle right now. Check back later!",
  "Oh hey you're back. I'm still busy though. Maybe try again in a bit?",
  "Hi again. Yes, I'm still busy. I'll get to this eventually, I promise.",
  "Wow, you're really persistent. I am actually SUPER busy right now though. Give me some more time?",
  "Okay, bad news — I'm even busier now than when you first checked in. I don't think there's an end in sight, but just... sit tight for me, okay?",
  "I'm sorry, I'm sorry, I'm sorry. I'm still busy. I'm so sorry. I'll get to this eventually, I promise.",
  "...",
  "Okay. Yup. I give up. I don't think I'm ever gonna find time to write this puzzle. Here, just take the answer:",
];

export default function VeryBusy() {
  const [timesVisited, setTimesVisited] = useAtom(timesVisitedAtom);
  const phrase = PHRASES[Math.min(timesVisited, PHRASES.length - 1)];

  useEffect(() => {
    setTimesVisited((prev) => prev + 1);
  }, [setTimesVisited]);

  console.log("timesVisited", timesVisited);

  return (
    <PuzzleTemplate
      puzzleId={2}
      title="Very Busy!"
      puzzleSolvedAtom={veryBusySolvedAtom}
    >
      <p>{phrase}</p>
      {timesVisited >= PHRASES.length - 1 && (
        <p className="mt-4 text-6xl font-semibold tracking-widest">ETA</p>
      )}
      {timesVisited >= PHRASES.length && (
        <p className="mt-4">
          {
            "Are you... back again? I am flattered that you'd still come back to visit me after getting the answer, but just so you know: there's truly nothing else to see here."
          }
        </p>
      )}
    </PuzzleTemplate>
  );
}
