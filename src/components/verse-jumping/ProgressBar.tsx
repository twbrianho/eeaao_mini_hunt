import { XMarkIcon } from "@heroicons/react/20/solid";
import { StepState } from "~/pages/puzzles/verse-jumping";
import { cva } from "class-variance-authority";

interface ProgressBarProps {
  stepStates: StepState[];
}

export default function ProgressBar(props: ProgressBarProps) {
  const { stepStates } = props;

  const stepStateClassNames = cva(
    [
      "relative",
      "flex",
      "h-6",
      "w-6",
      "items-center",
      "justify-center",
      "rounded-full",
    ],
    {
      variants: {
        stepState: {
          [StepState.CORRECT]: ["bg-emerald-600"],
          [StepState.WRONG]: ["bg-rose-600"],
          [StepState.CURRENT]: ["border-gray-600", "bg-white"],
          [StepState.FUTURE]: ["border-gray-300", "bg-white"],
        },
      },
    },
  );

  const getStepStateIcon = (stepState: StepState, stepIdx: number) => {
    const revealedLetter = "ESTRANGE".charAt(stepIdx);
    switch (stepState) {
      case StepState.CORRECT:
        return (
          <div className="text-white" aria-hidden="true">
            {revealedLetter}
          </div>
        );
      case StepState.WRONG:
        return <XMarkIcon className="h-4 w-4 text-white" aria-hidden="true" />;
      case StepState.CURRENT:
        return (
          <span className="h-3 w-3 rounded-full bg-black" aria-hidden="true" />
        );
      default:
        return null;
    }
  };

  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {stepStates.map((stepState, stepIdx) => (
          <li
            key={stepIdx}
            className={
              stepIdx !== stepStates.length - 1
                ? "relative pr-4 sm:pr-10"
                : "relative"
            }
          >
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="h-0.5 w-full bg-white" />
            </div>
            <div className={stepStateClassNames({ stepState })}>
              {getStepStateIcon(stepState, stepIdx)}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
