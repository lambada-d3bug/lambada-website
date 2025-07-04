'use client';

import { HeaderBlockProps } from '@/globals/header/index';
import { isMedia } from '@/utilities/isMedia';
import { cn } from '@/utilities/ui';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { AlignJustify } from 'lucide-react';
import { ThemeSelector } from '@/components/ui/theme-selector';

export function HeaderMobile(props: HeaderBlockProps) {
    const [open, setOpen] = useState(false);
    const { HeaderProps } = props;
    const { navLogo, navItems, navButton } = HeaderProps;
    const params = useParams();
    const rawLocale = params?.locale;
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
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div
                    className={
                        'absolute top-0 left-0 flex w-full flex-row items-center justify-between px-4 py-4'
                    }>
                    <div className="relative h-12 w-12 p-8 hover:bg-transparent">
                        {isMedia(navLogo) && navLogo.url && (
                            <Image
                                src={navLogo.url}
                                alt={navLogo.alt || 'Logo'}
                                fill
                                className="object-contain"
                            />
                        )}
                    </div>

                    <Button variant="ghost" className="bg-primary/15 hover:bg-[#0E7269] lg:hidden">
                        <AlignJustify width={48} height={48} />
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-2/3 max-w-full border-none p-0">
                <div className="dark:bg-card flex h-full flex-col rounded-lg bg-white">
                    <div className="flex items-center justify-center p-4">
                        <div className="mt-24 flex flex-1 justify-center">
                            {isMedia(navLogo) && navLogo.url && (
                                <Image
                                    src={navLogo.url as string}
                                    alt={navLogo.alt}
                                    width={150}
                                    height={50}
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>

                    <nav className="flex flex-col justify-center space-y-4 px-0 py-6">
                        {navItems?.map((item, i) => (
                            <div key={i} className="mx-4 hover:text-white">
                                <Link
                                    href={`/${selectedLang}/${item?.itemsGroup?.url || ''}`}
                                    className={cn(
                                        'dark:hover:bg-primary flex items-center gap-4 rounded-md py-3 pl-4 text-sm font-semibold capitalize hover:bg-[#FBC965] dark:text-white',
                                    )}>
                                    <span>{item.itemsGroup?.label}</span>
                                </Link>
                            </div>
                        ))}
                    </nav>
                    <Button
                        className={
                            'dark:bg-secondary dark:hover:bg-secondary-foreground mx-4 rounded-2xl bg-[#FBC965] font-semibold text-white capitalize hover:bg-[#f2ba49]'
                        }
                        onClick={() => router.push(`/${selectedLang || 'fr'}/booking`)}>
                        {navButton?.labelMobile}
                    </Button>
                    <div className={'mt-12 flex flex-col items-center space-y-4'}>
                        <Select value={selectedLang} onValueChange={handleLanguageChange}>
                            <SelectTrigger
                                className={'text-primary dark:bg-secondary dark:text-white'}>
                                <SelectValue>{selectedLang}</SelectValue>
                            </SelectTrigger>
                            <SelectContent
                                className={'text-primary dark:bg-secondary dark:text-white'}>
                                {HeaderProps.language?.languageChoice &&
                                    HeaderProps.language.languageChoice.map((item, i) => (
                                        <SelectItem
                                            key={i}
                                            value={item.lang as string}
                                            className="dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                                            {item.lang}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                        <ThemeSelector
                            className={'text-primary dark:bg-secondary dark:text-white'}
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
