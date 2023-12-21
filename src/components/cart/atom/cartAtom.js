import { atomWithStorage } from "jotai/utils"; // Local Storage
import { atom } from "jotai"; // In-Memory

export const cartAtom = atomWithStorage("cartAtom", []);
