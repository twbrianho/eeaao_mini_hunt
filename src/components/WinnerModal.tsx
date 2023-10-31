import { type ChangeEvent, type FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Gabarito } from "next/font/google";
import { nameSubmittedAtom } from "~/utils/atoms";
import { useSetAtom } from "jotai";
import { api } from "~/utils/api";

const gabarito = Gabarito({
  subsets: ["latin-ext"],
});

interface WinnerModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export default function WinnerModal(props: WinnerModalProps) {
  const { isOpen, setIsOpen } = props;

  const [name, setName] = useState("");

  const setNameSubmitted = useSetAtom(nameSubmittedAtom);

  const postWinnerMutation = api.puzzle.postWinner.useMutation();

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name === "") return;
    postWinnerMutation.mutate(
      { name },
      {
        onSuccess: () => {
          setNameSubmitted(true);
          setIsOpen(false);
        },
        onError: (error) => {
          alert(error); // Too tired to do proper error handling
        },
      },
    );
  };

  return (
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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg border border-white bg-black px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl">
                    🎉
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-semibold leading-6 tracking-wide text-white"
                    >
                      Congratulations!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-300">
                        You finished the hunt! Leave your name below if you want
                        to be added to the leaderboard!
                      </p>
                    </div>
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Enter your name (or gamer tag)..."
                    value={name}
                    onChange={handleChangeName}
                    maxLength={20}
                    className="mt-5 block w-full rounded-md border-0 py-1.5 tracking-wide text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:mt-6 sm:leading-6"
                  />
                  <button
                    type="button"
                    className="mt-2 inline-flex w-full justify-center rounded-md bg-emerald-500 px-3 py-2 font-semibold tracking-wide text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
