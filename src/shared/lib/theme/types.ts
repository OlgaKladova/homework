export type Theme = 'light' | 'dark';

export type TThemeContext = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};