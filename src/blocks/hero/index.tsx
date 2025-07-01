'use client';

import { Media } from '@/payload-types';
import { Button } from '@payloadcms/ui';

interface HeroBlockProps {
    blockDisplayBoolean?: boolean;
    bgImage: Media;
    heading: string;
    button: {
        label: string;
        url: string;
    };
    scrollToNextBlock?: () => void; // 👈 add this
}

export function HeroBlock(props: HeroBlockProps) {
    const { bgImage, button, heading, blockDisplayBoolean, scrollToNextBlock } = props;

    return (
        <main
            className={`${blockDisplayBoolean ? 'hidden' : ''} flex h-screen w-full flex-col justify-center`}
            style={{
                backgroundColor: '#3a7a80',
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
                        'bg-secondary hover:bg-secondary-foreground rounded-xl px-3 py-1 text-white md:text-xl lg:px-4 lg:py-2 lg:text-4xl'
                    }
                    onClick={scrollToNextBlock} // 👈 use it here
                >
                    {button.label}
                </Button>
            </div>
        </main>
    );
}
