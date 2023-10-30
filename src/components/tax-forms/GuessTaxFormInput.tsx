import { type ChangeEvent } from "react";
import sanitizeGuess from "~/utils/sanitizeGuess";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { cva } from "class-variance-authority";

enum GuessState {
  BLANK = "BLANK",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
}

interface GuessTaxFormInputProps {
  guessInput: string;
  setGuessInput: (guess: string) => void;
  answers: string[];
}

export default function GuessTaxFormInput(props: GuessTaxFormInputProps) {
  const { guessInput, setGuessInput, answers } = props;

  const handleGuessChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setGuessInput(sanitizeGuess(e.target.value));
  };

  let guessState = GuessState.BLANK;
  if (guessInput) {
    if (answers.includes(guessInput)) {
      guessState = GuessState.CORRECT;
    } else {
      guessState = GuessState.WRONG;
    }
  }

  const guessInputClassNames = cva(
    [
      "w-full",
      "rounded-lg",
      "border-0",
      "py-2",
      "pl-3",
      "pr-10",
      "tracking-wider",
      "text-black",
      "box-border",
    ],
    {
      variants: {
        isCorrect: {
          true: ["text-emerald-500"],
        },
      },
    },
  );

  return (
    <div>
      <div className="relative">
        <input
          type="text"
          className={guessInputClassNames({
            isCorrect: guessState === GuessState.CORRECT,
          })}
          placeholder="Specify a tax form..."
          value={guessInput}
          onChange={handleGuessChange}
        />
        {guessState !== GuessState.BLANK && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            {guessState === GuessState.CORRECT ? (
              <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
            ) : (
              <XCircleIcon className="h-5 w-5 text-rose-500" />
            )}
          </div>
        )}
      </div>
      {guessState === GuessState.WRONG && (
        <p className="mt-2 text-rose-500">
          Unable to find tax form named {guessInput}.
        </p>
      )}
    </div>
  );
}
