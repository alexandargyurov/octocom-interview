import { atom } from "jotai";
import { conversations } from "./data";

export const chatAtom = atom<(typeof conversations)[0] | undefined>(undefined);
