'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { HeaderBlockProps } from './index';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { isMedia } from '@/utilities/isMedia';
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import { ThemeSelector } from '@/components/ui/theme-selector';

export function HeaderDesktop(props: HeaderBlockProps) {
    const { HeaderProps } = props;
    const { navLogo, navItems, navButton, language } = HeaderProps;
    const params = useParams();
    const rawLocale = params?.locale;
    const slug = params?.slug;
    const locale = Array.isArray(rawLocale) ? rawLocale[0] : rawLocale;
    const [selectedLang, setSelectedLang] = useState<string | undefined>(locale ? locale : 'fr');

    const router = useRouter();
    const pathname = usePathname();

    const handleLanguageChange = (newLocale: string) => {
        const pathWithoutLocale = pathname.replace(/^\/(en|fr|it)/, '');
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        localStorage.setItem('locale', newLocale);

        // Use window.location.href instead of router.push to preserve theme state during navigation
        window.location.href = newPath;
        setSelectedLang(newLocale);
    };

    return (
        <div
            className={
                'absolute top-0 left-0 flex w-full flex-row justify-between px-12 py-10 lg:px-24'
            }>
            <div className={'flex flex-row'}>
                <Button
                    variant={'ghost'}
                    className="relative h-12 w-12 p-8 hover:cursor-pointer hover:bg-transparent"
                    onClick={() => router.push(`/${selectedLang || 'fr'}`)}>
                    {isMedia(navLogo) && navLogo.url && (
                        <Image
                            src={navLogo.url || '/placeholder.svg'}
                            alt={navLogo.alt || 'Logo'}
                            fill
                            className="object-contain"
                        />
                    )}
                </Button>
                <div className="dark:border-secondary dark:bg-card/50 ml-8 flex items-center rounded-full border border-white/10 bg-white/5 px-6 py-3 shadow-lg backdrop-blur-md">
                    <div className="flex flex-row space-x-6 text-sm uppercase max-lg:leading-tight lg:text-lg">
                        {navItems?.map((item, i) => (
                            <Link
                                key={i}
                                href={`/${locale}/${item?.itemsGroup?.url || ''}`}
                                className="group flex items-center">
                                <p className="relative font-medium text-white transition-all duration-200 hover:scale-105 hover:text-white/80 dark:text-white">
                                    {item?.itemsGroup?.label}
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-white/60 transition-all duration-300 group-hover:w-full dark:bg-white/80"></span>
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className={'flex flex-row items-center space-x-2'}>
                <Button
                    className="bg-primary hover:bg-primary-foreground dark:text-foreground dark:bg-secondary dark:hover:bg-secondary-foreground h-auto rounded-full px-8 py-3 text-lg text-white uppercase"
                    onClick={() => router.push(`/${locale}/${navButton?.url || ''}`)}>
                    {navButton?.labelMobile}
                </Button>
                <Select value={selectedLang} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="!h-auto min-w-[60px] rounded-full border-white/20 bg-white/10 px-8 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20">
                        <SelectValue>{selectedLang}</SelectValue>
                    </SelectTrigger>
                    <SelectContent className="border-white/20 bg-white/20 shadow-xl backdrop-blur-md">
                        {language?.languageChoice &&
                            language.languageChoice.map((item, i) => (
                                <SelectItem
                                    key={i}
                                    value={item.lang as string}
                                    className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:bg-gray-800 dark:data-[highlighted]:bg-gray-800">
                                    {item.lang}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
                <ThemeSelector className="!h-auto min-w-[60px] rounded-full border-white/20 bg-white/10 px-8 py-3 text-lg font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20" />
            </div>
        </div>
    );
}
