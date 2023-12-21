import { atomWithStorage } from "jotai/utils"; // Local Storage
import { atom } from "jotai"; // In-Memory

export const cartAtom = atomWithStorage("cartAtom", []); // In Memory + Local Storage // Getting data from Local Storage
export const cartAtomInMemory = atom([]);
