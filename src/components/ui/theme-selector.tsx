'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Monitor, Moon, Sun } from 'lucide-react';

export function ThemeSelector({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger
                className={`${className} aspect-ratio flex justify-center rounded-full px-6 [&>svg]:hidden`}>
                <SelectValue className={'flex justify-center'}>
                    {theme === 'light' && <Sun className="!h-5 !w-5" />}
                    {theme === 'dark' && <Moon className="!h-5 !w-5" />}
                    {theme === 'system' && <Monitor className="!h-5 !w-5" />}
                </SelectValue>
            </SelectTrigger>
            <SelectContent className="border-white/20 bg-white/10 shadow-xl backdrop-blur-md">
                <SelectItem
                    value="light"
                    className="dark:hover:bg-secondary/80 dark:focus:bg-secondary/80 dark:data-[highlighted]:bg-secondary/80 text-primary flex items-center gap-2 hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20 dark:text-gray-200">
                    <Sun className="h-4 w-4" />
                    <span>Light</span>
                </SelectItem>
                <SelectItem
                    value="dark"
                    className="text-primary flex items-center gap-2 hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:data-[highlighted]:bg-gray-800">
                    <Moon className="h-4 w-4" />
                    <span>Dark</span>
                </SelectItem>
                <SelectItem
                    value="system"
                    className="text-primary flex items-center gap-2 hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:data-[highlighted]:bg-gray-800">
                    <Monitor className="h-4 w-4" />
                    <span>System</span>
                </SelectItem>
            </SelectContent>
        </Select>
    );
}
