import { Bungee, Gabarito } from "next/font/google";
import Link from "next/link";
import DonutBackground from "~/components/DonutBackground";
import HeadTemplate from "~/components/HeadTemplate";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

export default function Home() {
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
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Tax Forms
            </Link>
            <Link
              href="/puzzles/meta"
              className="row-span-4 rounded-lg bg-white px-2 text-center tracking-wider text-black hover:opacity-75"
              style={{ writingMode: "vertical-rl" }}
            >
              [ META PUZZLE ]
            </Link>
            <Link
              href="/puzzles/very-busy"
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Very Busy!
            </Link>
            <Link
              href="/puzzles/verse-jumping"
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Verse-Jumping
            </Link>
            <Link
              href="/puzzles/raccoontouille"
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Raccoontouille
            </Link>
          </div>
        </div>
        <p className="fixed bottom-2 rounded bg-black px-1 py-0.5 text-xs tracking-wide">
          Everything Bagel made by{" "}
          <a
            target="_blank"
            href="https://www.artstation.com/artwork/NGzyLN"
            className="underline"
          >
            Sol Blackshaw
          </a>
        </p>
      </main>
    </>
  );
}
