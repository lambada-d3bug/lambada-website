'use client';

import { Media } from '@/payload-types';
import { Button } from '@/components/ui/button';
import { cn } from '@/utilities/ui';

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
            className={cn(
                blockDisplayBoolean && 'hidden',
                'flex h-screen w-full flex-col justify-center',
            )}
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
                        'bg-secondary hover:bg-secondary-foreground hover:ring-secondary transform rounded-xl px-4 ' +
                        'py-2 font-semibold text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5' +
                        ' hover:scale-105 hover:shadow-xl hover:ring-2 md:px-6 md:py-3 md:text-xl lg:rounded-full lg:px-12 lg:py-4 lg:text-xl'
                    }
                    onClick={scrollToNextBlock}>
                    {button.label}
                </Button>
            </div>
        </main>
    );
}
