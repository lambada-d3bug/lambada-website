'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeaderBlockProps } from './index';
import { redirect, useParams, usePathname, useRouter } from 'next/navigation';
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
                <div className="relative h-12 w-12">
                    {isMedia(navLogo) && navLogo.url && (
                        <Image
                            src={navLogo.url}
                            alt={navLogo.alt || 'Logo'}
                            fill
                            className="object-contain"
                        />
                    )}
                </div>
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
                    onClick={() => redirect(`/${locale}/${navButton?.url || ''}`)}>
                    {navButton?.labelMobile}
                </Button>
                <Select value={selectedLang} onValueChange={handleLanguageChange}>
                    <SelectTrigger
                        className={`${slug === 'booking' ? 'text-primary' : 'text-white'}`}>
                        <SelectValue>{selectedLang}</SelectValue>
                    </SelectTrigger>
                    <SelectContent className={'text-primary'}>
                        {language?.languageChoice &&
                            language.languageChoice.map((item, i) => (
                                <SelectItem key={i} value={item.lang as string}>
                                    {item.lang}
                                </SelectItem>
                            ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
