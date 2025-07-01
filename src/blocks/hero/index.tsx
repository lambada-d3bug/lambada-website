'use client';

import { Media } from '@/payload-types';
import { Button } from '@payloadcms/ui';
import { redirect } from 'next/navigation';

interface HeroBlockProps {
    blockDisplayBoolean?: boolean;
    bgImage: Media;
    heading: string;
    button: {
        label: string;
        url: string;
    };
}

export function HeroBlock(props: HeroBlockProps) {
    const { bgImage, button, heading, blockDisplayBoolean } = props;
    return (
        <main
            className={`${blockDisplayBoolean ? 'hidden' : ''} flex h-screen w-full flex-col justify-center`}
            style={{
                backgroundColor: '#668E2E',
                ...(bgImage?.url && {
                    backgroundImage: `url(${bgImage.url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }),
            }}>
            <div className={'ml-4 space-y-2 md:ml-8 lg:ml-20'}>
                <p className={'text-4xl break-words text-white uppercase md:text-7xl lg:w-2/3'}>
                    {heading}
                </p>
                <Button
                    className={
                        'bg-secondary hover:bg-secondary-foreground rounded-xl px-3 py-1 text-white md:text-xl'
                    }
                    onClick={() => redirect(button.url)}>
                    {button.label}
                </Button>
            </div>
        </main>
    );
}
