'use client';
import { Header } from '@/payload-types';
import { HeaderDesktop } from '@/globals/header/headerDesktop';
import { HeaderMobile } from '@/globals/header/headerMobile';
import { useWindowWidth } from '@/utilities/useWindowWidth';

export interface HeaderBlockProps {
    HeaderProps: Header;
}

export function HeaderBlock(props: HeaderBlockProps) {
    const width = useWindowWidth();
    if (width === null) return null;
    return <>{width > 1024 ? <HeaderDesktop {...props} /> : <HeaderMobile {...props} />}</>;
}
