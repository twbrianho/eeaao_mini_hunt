import { atomWithStorage } from "jotai/utils";

export const timesVisitedAtom = atomWithStorage("timesVisitedAtom", 0);

export const taxFormsSolvedAtom = atomWithStorage("taxFormsSolvedAtom", false);
export const veryBusySolvedAtom = atomWithStorage("veryBusySolvedAtom", false);
export const verseJumpingSolvedAtom = atomWithStorage(
  "verseJumpingSolvedAtom",
  false,
);
export const raccoontouilleSolvedAtom = atomWithStorage(
  "raccoontouilleSolvedAtom",
  false,
);
export const metaSolvedAtom = atomWithStorage("metaSolvedAtom", false);

export const nameSubmittedAtom = atomWithStorage("nameSubmittedAtom", false);
