'use client';
import { useTheme } from '@/components/context/ThemeContext';
import { Moon, Sun } from 'lucide-react'; // or use your own icons

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className='p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:scale-105 transition'
            aria-label='Toggle Dark Mode'>
            {theme === 'dark' ? (
                <Sun className='text-yellow-400' />
            ) : (
                <Moon className='text-gray-800' />
            )}
        </button>
    );
}
