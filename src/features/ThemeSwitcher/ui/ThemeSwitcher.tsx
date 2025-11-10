import { useTheme } from "@/shared/hooks/useTheme"
import { Button } from "@/shared/ui/Button/Button"

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <Button textButton={theme === 'dark' ? 'Светлая тема' : 'Темная тема'} onClick={toggleTheme} />
    )
}