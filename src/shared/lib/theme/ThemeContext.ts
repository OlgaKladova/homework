import { createContext } from "react";
import type { TThemeContext } from "./types";

export const ThemeContext = createContext<TThemeContext | undefined>(undefined);
