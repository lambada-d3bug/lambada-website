'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeaderBlockProps } from './index';
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
        router.push(newPath);
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
                            src={navLogo.url}
                            alt={navLogo.alt || 'Logo'}
                            fill
                            className="object-contain"
                        />
                    )}
                </Button>
                <div
                    className={`ml-8 flex flex-row space-x-8 text-sm ${slug === 'booking' ? 'text-secondary' : 'text-white'} uppercase max-lg:leading-tight lg:text-lg`}>
                    {navItems?.map((item, i) => (
                        <Link
                            key={i}
                            href={`/${locale}/${item?.itemsGroup?.url || ''}`}
                            className={'flex items-center'}>
                            <p className={'hover:underline'}> {item?.itemsGroup?.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={'flex flex-row space-x-2'}>
                <Button
                    className={
                        'bg-primary hover:bg-primary-foreground rounded-2xl text-lg text-white uppercase'
                    }
                    onClick={() => router.push(`/${locale}/${navButton?.url || ''}`)}>
                    {navButton?.labelMobile}
                </Button>
                <Select value={selectedLang} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="relative min-w-[60px] border-white/20 bg-white/10 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:bg-white/20">
                        <SelectValue className="font-medium text-white">{selectedLang}</SelectValue>
                    </SelectTrigger>
                    <SelectContent className="border-white/20 bg-white/10 shadow-xl backdrop-blur-md">
                        {language?.languageChoice &&
                            language.languageChoice.map((item, i) => (
                                <SelectItem
                                    key={i}
                                    value={item.lang as string}
                                    className="cursor-pointer text-white hover:bg-white/20 focus:bg-white/20 data-[highlighted]:bg-white/20">
                                    {item.lang}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
