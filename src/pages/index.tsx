import Head from "next/head";

import { Bungee, Chivo_Mono, Gabarito } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>EEAAO Mini Puzzle Hunt</title>
        <meta name="description" content="EEAAO-themed mini puzzle hunt" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main
        className={
          gabarito.className +
          " flex min-h-screen flex-col items-center justify-center"
        }
      >
        <div className="fixed -z-10 flex h-full w-full justify-center overflow-hidden sm:pt-10">
          <Image
            alt=""
            src="/EverythingBagelAll.png"
            width={400}
            height={400}
            className="fixed animate-spin-slower"
          />
          <Image
            alt=""
            src="/EverythingBagelCenter.png"
            width={400}
            height={400}
            className="fixed animate-spin-slow"
          />
        </div>
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
              href="/puzzles/juju-toobootie"
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Juju Toobootie
            </Link>
            <Link
              href="/puzzles/raccoontouille"
              className="col-span-4 rounded-lg bg-white py-2.5 text-center tracking-wider text-black hover:opacity-75"
            >
              Raccoontouille
            </Link>
          </div>
        </div>
        <p className="fixed bottom-2 rounded bg-black px-1 py-0.5 text-xs">
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
