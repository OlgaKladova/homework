import { useLayoutEffect, useState } from "react"
import { ThemeContext } from "./ThemeContext"
import type { Theme } from "./types"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        if (savedTheme) return savedTheme;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return savedTheme ?? 'light';
    });
    
    useLayoutEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext value={{ theme, setTheme }}>
            {children}
        </ThemeContext>
    )
}