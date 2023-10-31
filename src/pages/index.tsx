import { Bungee, Gabarito } from "next/font/google";
import Link from "next/link";
import DonutBackground from "~/components/DonutBackground";
import HeadTemplate from "~/components/HeadTemplate";
import { cva } from "class-variance-authority";
import {
  metaSolvedAtom,
  raccoontouilleSolvedAtom,
  taxFormsSolvedAtom,
  verseJumpingSolvedAtom,
  veryBusySolvedAtom,
} from "~/utils/atoms";
import { useAtom } from "jotai";
import Leaderboard from "~/components/Leaderboard";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

export default function Home() {
  const [taxFormsSolved] = useAtom(taxFormsSolvedAtom);
  const [veryBusySolved] = useAtom(veryBusySolvedAtom);
  const [verseJumpingSolved] = useAtom(verseJumpingSolvedAtom);
  const [raccoontouilleSolved] = useAtom(raccoontouilleSolvedAtom);
  const [metaSolved] = useAtom(metaSolvedAtom);

  const puzzleLinkClasses = cva(
    [
      "rounded-lg",
      "py-2.5",
      "text-center",
      "tracking-wider",
      "text-black",
      "hover:opacity-75",
    ],
    {
      variants: {
        isVertical: {
          true: ["px-2", "row-span-4"],
          false: ["py-2.5", "col-span-4"],
        },
        isSolved: {
          true: ["text-white", "bg-black", "border-2", "border-white"],
          false: ["text-black", "bg-white"],
        },
      },
    },
  );

  return (
    <>
      <HeadTemplate />
      <main
        className={
          gabarito.className +
          " flex min-h-screen flex-col items-center justify-center"
        }
      >
        <DonutBackground />
        <div className="container flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-5">
            <h1
              className={bungee.className + " text-4xl text-white sm:text-5xl"}
            >
              Everything
              <br />
              Everywhere
              <br />
              All At Once
            </h1>
            <h2 className={bungee.className + " text-2xl sm:text-3xl"}>
              [ Mini Puzzle Hunt ]
            </h2>
          </div>
          <div className="grid w-72 grid-cols-5 grid-rows-4 gap-4 text-lg font-medium">
            <Link
              href="/puzzles/tax-forms"
              className={puzzleLinkClasses({
                isVertical: false,
                isSolved: taxFormsSolved,
              })}
            >
              Tax Forms
            </Link>
            <Link
              href="/puzzles/meta"
              className={puzzleLinkClasses({
                isVertical: true,
                isSolved: metaSolved,
              })}
              style={{ writingMode: "vertical-rl" }}
            >
              [ META PUZZLE ]
            </Link>
            <Link
              href="/puzzles/very-busy"
              className={puzzleLinkClasses({
                isVertical: false,
                isSolved: veryBusySolved,
              })}
            >
              Very Busy!
            </Link>
            <Link
              href="/puzzles/verse-jumping"
              className={puzzleLinkClasses({
                isVertical: false,
                isSolved: verseJumpingSolved,
              })}
            >
              Verse-Jumping
            </Link>
            <Link
              href="/puzzles/raccoontouille"
              className={puzzleLinkClasses({
                isVertical: false,
                isSolved: raccoontouilleSolved,
              })}
            >
              Raccoontouille
            </Link>
          </div>
        </div>
        {metaSolved && <Leaderboard />}
        <div className="fixed bottom-2 flex gap-x-1 rounded bg-black px-1 py-0.5 text-xs tracking-wide">
          <p>
            Hunt made by{" "}
            <a
              target="_blank"
              href="https://www.brianslho.info/"
              className="underline"
            >
              Brian Ho
            </a>
          </p>
          <p>|</p>
          <p>
            Everything Bagel by{" "}
            <a
              target="_blank"
              href="https://www.artstation.com/artwork/NGzyLN"
              className="underline"
            >
              Sol Blackshaw
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
