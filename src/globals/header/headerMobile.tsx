'use client';

import { HeaderBlockProps } from '@/globals/header/index';
import { isMedia } from '@/utilities/isMedia';
import { cn } from '@/utilities/ui';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';
import { redirect, useParams, usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

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
        router.push(newPath);
        setSelectedLang(newLocale);
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <div
                    className={
                        'absolute top-0 left-0 flex w-full flex-row items-center justify-between px-4 py-4'
                    }>
                    <div className={'relative h-12 w-12'}>
                        {isMedia(navLogo) && navLogo.url && (
                            <Image
                                src={navLogo.url as string}
                                alt={navLogo.alt}
                                fill
                                className={'object-contain'}
                            />
                        )}
                    </div>

                    <Button variant="ghost" size="icon" className="hover:bg-[#0E7269] md:hidden">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3 12H21"
                                stroke="#1A1A1A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 6H21"
                                stroke="#1A1A1A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3 18H21"
                                stroke="#1A1A1A"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </div>
            </SheetTrigger>
            <SheetContent side="left" className="w-1/2 max-w-full border-none p-0">
                <div className="flex h-full flex-col rounded-lg bg-white">
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
                                    href={item.itemsGroup?.url as string}
                                    className={cn(
                                        'flex items-center gap-4 rounded-md py-3 pl-4 text-sm font-medium hover:bg-[#FBC965]',
                                    )}>
                                    <span>{item.itemsGroup?.label}</span>
                                </Link>
                            </div>
                        ))}
                    </nav>
                    <Button
                        className={'mx-4 rounded-2xl bg-[#FBC965] hover:bg-[#f2ba49]'}
                        onClick={() => redirect(navButton?.url as string)}>
                        {navButton?.labelMobile}
                    </Button>
                    <div className={'mt-12 flex justify-center'}>
                        <Select value={selectedLang} onValueChange={handleLanguageChange}>
                            <SelectTrigger className={'text-primary'}>
                                <SelectValue>{selectedLang}</SelectValue>
                            </SelectTrigger>
                            <SelectContent className={'text-primary'}>
                                {HeaderProps.language?.languageChoice &&
                                    HeaderProps.language.languageChoice.map((item, i) => (
                                        <SelectItem key={i} value={item.lang as string}>
                                            {item.lang}
                                        </SelectItem>
                                    ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
