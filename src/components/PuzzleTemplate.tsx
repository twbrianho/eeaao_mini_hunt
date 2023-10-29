import Head from "next/head";
import DonutBackground from "~/components/DonutBackground";
import GuessInput from "~/components/GuessInput";
import { Bungee, Chivo_Mono, Gabarito } from "next/font/google";
import { type ReactNode, useState } from "react";
import { api } from "~/utils/api";
import PageLoadingSpinner from "~/components/PageLoadingSpinner";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
  subsets: ["latin-ext"],
});

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

interface PuzzleTemplateProps {
  puzzleId: number;
  title: string;
  flavortext: ReactNode;
}

export default function PuzzleTemplate(
  props: React.PropsWithChildren<PuzzleTemplateProps>,
) {
  const {
    data: puzzleData,
    error,
    isError,
  } = api.puzzle.getPuzzle.useQuery({ id: props.puzzleId });

  const [isSolved, setIsSolved] = useState(false);

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
            chivoMono.className +
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
      <Head>
        <title>EEAAO Mini Hunt | {props.title}</title>
        <meta name="description" content="EEAAO-themed mini puzzle hunt" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={
          gabarito.className +
          " flex min-h-screen flex-col items-center bg-black/50 p-8"
        }
      >
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
