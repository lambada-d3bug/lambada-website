/* eslint-disable no-restricted-exports */
import React from 'react';
import { Toaster } from '@/components/ui/sonner';
import 'leaflet/dist/leaflet.css';
import '@/styles/globals.css'; // global styles first
import { HeaderBlock } from '@/globals/header';
import { getPayload } from 'payload';
import config from '@payload-config';
import { FooterBlock } from '@/globals/footer';
import { Footer } from '@/payload-types';

export const metadata = {
    description: 'Generated by create next app',
    title: 'Create Next App',
};

interface Params {
    locale?: 'en' | 'fr' | 'it' | 'all';
}

interface RootLayoutProps {
    children: React.ReactNode;
    params: Params;
}

export default async function Layout({ children, params }: RootLayoutProps) {
    const { locale } = await params;
    const payload = await getPayload({ config });
    const [HeaderProps, FooterProps] = await Promise.all([
        payload.findGlobal({
            slug: 'header',
            depth: 1,
            locale,
        }),
        payload.findGlobal({
            slug: 'footer',
            depth: 1,
            locale,
        }) as Promise<Footer>,
    ]);

    return (
        <html lang={'en'}>
            <body>
                <HeaderBlock HeaderProps={HeaderProps} />
                {children}
                <FooterBlock FooterProps={FooterProps} />
                <Toaster />
            </body>
        </html>
    );
}
