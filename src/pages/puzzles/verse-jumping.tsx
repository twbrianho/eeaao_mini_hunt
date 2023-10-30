import PuzzleTemplate from "~/components/PuzzleTemplate";
import ProgressBar from "~/components/verse-jumping/ProgressBar";
import { useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { Trait } from "~/utils/verse-jumping/trait";
import { type Universe, UNIVERSES } from "~/utils/verse-jumping/universes";
import { JetBrains_Mono } from "next/font/google";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { verseJumpingSolvedAtom } from "~/utils/atoms";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
});

export enum StepState {
  CORRECT = "CORRECT",
  WRONG = "WRONG",
  CURRENT = "CURRENT",
  FUTURE = "FUTURE",
}

const STARTING_TRAITS = [
  Trait.GOOD_LOOKING,
  Trait.FIT,
  Trait.FRIENDS,
  Trait.NOT_BRIAN,
];

const STARTING_STEP_STATES = [
  StepState.CURRENT,
  StepState.FUTURE,
  StepState.FUTURE,
  StepState.FUTURE,
  StepState.FUTURE,
  StepState.FUTURE,
  StepState.FUTURE,
  StepState.FUTURE,
];

export default function VerseJumping() {
  const [result, setResult] = useState<string>("");
  const [addedTraits, setAddedTraits] = useState<string[]>([]);
  const [removedTraits, setRemovedTraits] = useState<string[]>([]);
  const [traitSetHistory, setTraitSetHistory] = useState<Trait[][]>([
    STARTING_TRAITS,
  ]);
  const [currStep, setCurrStep] = useState(0);
  const [stepStates, setStepStates] =
    useState<StepState[]>(STARTING_STEP_STATES);

  const [traitsParent] = useAutoAnimate();

  const jumpToUniverse = (nextUniverse: Universe) => {
    const nextStep = currStep + 1;

    const newStepStates = [...stepStates];
    newStepStates[currStep] = nextUniverse.isCorrectChoice
      ? StepState.CORRECT
      : StepState.WRONG;
    // Don't create a step state beyond the final step!
    if (nextStep < stepStates.length - 1) {
      newStepStates[nextStep] = StepState.CURRENT;
    }
    setStepStates(newStepStates);

    const newTraitSet = new Set(traitSetHistory[currStep]);
    const traitsRemoved: Trait[] = []; // Keeps track of traits actually removed in this universe
    nextUniverse.removesTraits.forEach((trait) =>
      newTraitSet.delete(trait) ? traitsRemoved.push(trait) : null,
    );
    nextUniverse.addsTraits.forEach((trait) => newTraitSet.add(trait));
    setTraitSetHistory([...traitSetHistory, Array.from(newTraitSet)]);
    setRemovedTraits(traitsRemoved);
    setAddedTraits(nextUniverse.addsTraits);

    setResult(nextUniverse.result);

    setCurrStep(nextStep); // Step 8 is not a real step, but it's the correct index for the final traits
  };

  const jumpToPreviousUniverse = () => {
    const prevStep = currStep - 1;

    const newStepStates = [...stepStates];

    // Don't create a step state beyond the final step!
    if (currStep < stepStates.length) {
      newStepStates[currStep] = StepState.FUTURE;
    }
    newStepStates[prevStep] = StepState.CURRENT;
    setStepStates(newStepStates);

    setTraitSetHistory(traitSetHistory.slice(0, -1));
    setRemovedTraits([]);
    setAddedTraits([]);

    setResult("");

    setCurrStep(prevStep);
  };

  return (
    <PuzzleTemplate
      puzzleId={3}
      title="Verse-Jumping"
      flavortext={
        <p>
          {
            "There's no puzzle for this one, and I'm the only one who knows the answer! The only way you'll get the answer is by verse-jumping to a parallel universe where you become... "
          }
          <i>me!</i>
        </p>
      }
      puzzleSolvedAtom={verseJumpingSolvedAtom}
    >
      <div className="flex w-[304px] flex-col justify-center gap-y-5 sm:w-[472px]">
        <div className="rounded-lg border border-white bg-black px-4 py-3 tracking-wide">
          <h3>Your current traits:</h3>
          <ul
            ref={traitsParent}
            className="flex list-disc flex-col gap-y-0.5 pl-4 pt-1 text-sm"
          >
            {traitSetHistory[currStep]?.map((trait, index) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </div>
        <ProgressBar stepStates={stepStates} />
        {result && (
          <>
            <div>
              <p>{result}</p>
              {(removedTraits.length > 0 || addedTraits.length > 0) && (
                <ul className="mt-2">
                  {removedTraits?.map((trait, index) => (
                    <li key={index} className={"text-rose-600"}>
                      <p className={jetBrainsMono.className + " inline"}>– </p>
                      {trait}
                    </li>
                  ))}
                  {addedTraits?.map((trait, index) => (
                    <li key={index} className="text-emerald-600">
                      <p className={jetBrainsMono.className + " inline"}>+ </p>
                      {trait}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="w-ful h-0.5 bg-white" />
          </>
        )}
        {stepStates[currStep - 1] === StepState.WRONG ? (
          <button
            onClick={jumpToPreviousUniverse}
            className="flex items-center justify-center gap-x-1 rounded-lg bg-white px-4 py-3 text-black hover:bg-gray-300"
          >
            <ArrowLeftIcon className="h-4 w-4 text-black" aria-hidden="true" />
            Return to previous universe
          </button>
        ) : currStep < stepStates.length ? (
          <>
            <p>Jump through a universe where...</p>
            <div className="flex flex-col gap-y-2">
              {UNIVERSES[currStep]?.map((universe, index) => (
                <button
                  key={`${currStep}-${index}`}
                  onClick={() => jumpToUniverse(universe)}
                  className="rounded-lg bg-white px-4 py-3 text-black hover:bg-gray-300"
                >
                  ...{universe.description}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p className="italic">
            {
              "Congratulations (and condolences)! You have fully and thoroughly become Brian Ho, and thus now know what the answer is."
            }
          </p>
        )}
      </div>
    </PuzzleTemplate>
  );
}
