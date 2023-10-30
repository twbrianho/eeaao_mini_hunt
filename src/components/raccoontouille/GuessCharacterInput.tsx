import { type ChangeEvent, useRef, useState } from "react";
import sanitizeGuess from "~/utils/sanitizeGuess";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { cva } from "class-variance-authority";

enum GuessState {
  BLANK = "BLANK",
  CORRECT = "CORRECT",
  WRONG = "WRONG",
}

interface GuessCharacterInputProps {
  answer: string;
}

export default function GuessCharacterInput(props: GuessCharacterInputProps) {
  const [guessInput, setGuessInput] = useState("");

  const guessState = useRef(GuessState.BLANK);

  const handleGuessChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const sanitizedGuess = sanitizeGuess(e.target.value);
    setGuessInput(sanitizedGuess);
    if (sanitizedGuess) {
      if (sanitizedGuess === props.answer) {
        guessState.current = GuessState.CORRECT;
        setGuessInput("🦝" + sanitizedGuess.slice(1));
      } else {
        guessState.current = GuessState.WRONG;
      }
    }
  };

  const guessInputClassNames = cva(
    [
      "w-full",
      "rounded-b-lg",
      "border-0",
      "py-2",
      "pl-3",
      "pr-10",
      "text-center",
      "tracking-wide",
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
    <div className="relative">
      <input
        type="text"
        className={guessInputClassNames({
          isCorrect: guessState.current === GuessState.CORRECT,
        })}
        placeholder="Yo who dat??"
        value={guessInput}
        onChange={handleGuessChange}
        disabled={guessState.current === GuessState.CORRECT}
      />
      {guessState.current !== GuessState.BLANK && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {guessState.current === GuessState.CORRECT ? (
            <CheckCircleIcon className="h-5 w-5 text-emerald-500" />
          ) : (
            <XCircleIcon className="h-5 w-5 text-rose-500" />
          )}
        </div>
      )}
    </div>
  );
}
