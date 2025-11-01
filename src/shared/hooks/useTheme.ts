import { useContext } from "react";
import type { TThemeContext } from "@/shared/lib/theme/types";
import { ThemeContext } from "@/shared/lib/theme/ThemeContext";

export const useTheme = (): TThemeContext => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};