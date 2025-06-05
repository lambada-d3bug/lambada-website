import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeaderBlockProps } from './index';
import { redirect } from 'next/navigation';
import { isMedia } from '@/utilities/isMedia';
import Link from 'next/link';

export function HeaderDesktop(props: HeaderBlockProps) {
    const { HeaderProps } = props;
    const { navLogo, navItems, navButton } = HeaderProps;

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
                    className={
                        'ml-8 flex flex-row space-x-8 text-sm text-white uppercase max-lg:leading-tight lg:text-lg'
                    }>
                    {navItems?.map((item, i) => (
                        <Link
                            key={i}
                            href={item?.itemsGroup?.url as string}
                            className={'flex items-center'}>
                            <p className={'hover:underline'}> {item?.itemsGroup?.label}</p>
                        </Link>
                    ))}
                </div>
            </div>
            <Button
                className={
                    'rounded-2xl bg-[#FBC965] text-lg text-white uppercase hover:bg-[#f2ba49]'
                }
                onClick={() => redirect(navButton?.url as string)}>
                {navButton?.labelMobile}
            </Button>
        </div>
    );
}
