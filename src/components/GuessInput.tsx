import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import sanitizeGuess from "~/utils/sanitizeGuess";
import { api } from "~/utils/api";
import { type PuzzleData } from "~/utils/types";
import { XCircleIcon } from "@heroicons/react/20/solid";
import PageLoadingSpinner from "~/components/PageLoadingSpinner";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface GuessHistory {
  guess: string;
  timestamp: string;
}

interface GuessInputProps {
  puzzleData: PuzzleData;
  isSolved: boolean;
  setIsSolved: (isSolved: boolean) => void;
}

export default function GuessInput(props: GuessInputProps) {
  const { puzzleData, isSolved, setIsSolved } = props;

  const [guessInput, setGuessInput] = useState("");
  const [guesses, setGuesses] = useState<GuessHistory[]>([]);

  useEffect(() => {
    if (puzzleData && isSolved) {
      setGuessInput(puzzleData.answer);
    }
  }, [puzzleData, isSolved]);

  const postGuessMutation = api.puzzle.postGuess.useMutation();

  const [guessesParent] = useAutoAnimate();

  if (!puzzleData) return <PageLoadingSpinner />;

  const handleGuessChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setGuessInput(sanitizeGuess(e.target.value));
  };

  const handleGuessSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (guessInput === "") return;
    if (guessInput === puzzleData.answer) {
      setIsSolved(true);
    } else {
      setGuesses((prev) => [
        {
          guess: guessInput,
          timestamp: new Date().toISOString(),
        },
        ...prev,
      ]);
    }

    // Not worried if it succeeds, just logging guesses if possible
    postGuessMutation.mutate({
      puzzleId: puzzleData.id,
      guess: guessInput,
    });

    setGuessInput("");
  };

  return (
    <div>
      <form className="relative flex items-center" onSubmit={handleGuessSubmit}>
        <input
          type="text"
          placeholder="Submit the answer..."
          value={guessInput}
          onChange={handleGuessChange}
          disabled={isSolved}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black disabled:cursor-not-allowed disabled:text-emerald-500 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            Enter ⏎
          </kbd>
        </div>
      </form>
      <ol ref={guessesParent} className="gap-y-2 pt-2">
        {guesses.map((guess) => (
          <li key={guess.timestamp} className="flex items-center gap-x-1">
            <XCircleIcon className="h-4 w-4 text-rose-600" />
            {guess.guess}
          </li>
        ))}
      </ol>
    </div>
  );
}
