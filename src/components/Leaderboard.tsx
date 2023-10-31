import { api } from "~/utils/api";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MinusCircleIcon, TrophyIcon } from "@heroicons/react/20/solid";
import { Bungee, Gabarito } from "next/font/google";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

export default function Leaderboard() {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = api.puzzle.getWinners.useQuery();

  if (!data) return;

  return (
    <>
      <div
        onClick={() => {
          console.log("OPEN");
          setIsOpen(true);
        }}
        className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white opacity-10 duration-200 hover:opacity-50"
      >
        <div className="h-4 w-4 rounded-full bg-black" />
      </div>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={gabarito.className + " relative z-10"}
          onClose={setIsOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg border border-white bg-black p-5 text-left shadow-xl transition-all sm:my-8 sm:max-w-sm sm:p-6">
                  <MinusCircleIcon
                    onClick={() => setIsOpen(false)}
                    className="absolute left-4 top-4 h-8 w-8 text-white hover:opacity-50"
                  />
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl">
                      <TrophyIcon className="h-6 w-6 text-white" />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className={
                          bungee.className +
                          " text-lg font-semibold leading-6 tracking-wide text-white"
                        }
                      >
                        LEADERBOARD
                      </Dialog.Title>
                      <ul className="mt-2 flex flex-col gap-y-2">
                        {data.map((winner, index) => (
                          <li key={winner.id}>
                            {index + 1}. {winner.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
