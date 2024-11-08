import DonutBackground from "~/components/DonutBackground";
import GuessInput from "~/components/GuessInput";
import { Bungee, Gabarito, JetBrains_Mono } from "next/font/google";
import { type ReactNode, useEffect, useRef } from "react";
import { api } from "~/utils/api";
import PageLoadingSpinner from "~/components/PageLoadingSpinner";
import HeadTemplate from "~/components/HeadTemplate";
import Link from "next/link";
import { type Atom, useAtom } from "jotai";
import JSConfetti from "js-confetti";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin-ext"],
});

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

interface PuzzleTemplateProps {
  puzzleId: number;
  title: string;
  flavortext?: ReactNode;
  puzzleSolvedAtom: Atom<boolean>;
}

export default function PuzzleTemplate(
  props: React.PropsWithChildren<PuzzleTemplateProps>,
) {
  const {
    data: puzzleData,
    error,
    isError,
  } = api.puzzle.getPuzzle.useQuery({ id: props.puzzleId });

  const [isSolved, setIsSolved] = useAtom(props.puzzleSolvedAtom);

  const jsConfetti = useRef<JSConfetti>();

  useEffect(() => {
    jsConfetti.current = new JSConfetti();
    return () => jsConfetti.current?.clearCanvas();
  }, []);

  useEffect(() => {
    if (isSolved) {
      if (puzzleData?.id === 5) {
        // Special effects for meta puzzle
        void jsConfetti.current?.addConfetti({
          confettiColors: [
            "#f43f5e",
            "#ef4444",
            "#f97316",
            "#f59e0b",
            "#84cc16",
            "#14b8a6",
            "#0ea5e9",
            "#8b5cf6",
          ],
          confettiRadius: 5,
          confettiNumber: 1000,
        });
        void jsConfetti.current?.addConfetti({
          emojis: ["🎉", "🎊", "🎈", "🥳"],
          confettiRadius: 10,
          confettiNumber: 100,
        });
      } else {
        void jsConfetti.current?.addConfetti({
          confettiColors: [
            "#ffffff",
            "#dddddd",
            "#cccccc",
            "#aaaaaa",
            "#999999",
            "#777777",
            "#555555",
            "#333333",
            "#111111",
          ],
          confettiRadius: 10,
          confettiNumber: 300,
        });
      }
    }
  }, [isSolved, puzzleData?.id]);

  if (isError) {
    return (
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-5 p-10">
        <h1 className={bungee.className + " font-semi-bold text-2xl"}>
          Oops! We broke the multiverse.
        </h1>
        <p className={gabarito.className + " font-semi-bold text-lg"}>
          Please contact brianslho@gmail.com and paste the following:
        </p>
        <p
          className={
            jetBrainsMono.className +
            " max-w-xl rounded-lg bg-gray-900 px-4 py-3 text-xs text-gray-400"
          }
        >
          {error.message}
        </p>
      </div>
    );
  }

  if (!puzzleData) return <PageLoadingSpinner />;

  return (
    <>
      <HeadTemplate subtitle={puzzleData.title} />
      <main
        className={
          gabarito.className +
          " flex min-h-screen flex-col items-center bg-black/50 p-8 selection:bg-gray-400/50"
        }
      >
        <div className="w-full">
          <Link
            href="/"
            className="rounded bg-white px-3 py-2 text-black shadow"
          >
            Back
          </Link>
        </div>
        <DonutBackground />
        <div className="container flex max-w-xl flex-col items-center gap-5 sm:gap-10">
          <div className="flex flex-col gap-5 pt-20 text-center sm:pt-40">
            <h1
              className={bungee.className + " text-3xl text-white sm:text-5xl"}
            >
              {props.title}
            </h1>
            {props.flavortext && (
              <p className={gabarito.className + " text-sm sm:text-lg"}>
                {props.flavortext}
              </p>
            )}
          </div>
          <GuessInput
            puzzleData={puzzleData}
            isSolved={isSolved}
            setIsSolved={setIsSolved}
          />
          {props.children}
        </div>
      </main>
    </>
  );
}
