'use client';

import { Card, CardContent } from '@/components/ui/card';
import { SvgFromUrl } from '@/utilities/svgFromUrl';
import { GridOrCarouselBlockProps } from '@/blocks/grid-or-carousel';
import { cn } from '@/utilities/ui';

export function DesktopGrid(props: GridOrCarouselBlockProps) {
    const { cardArray, title, blockDisplayBoolean } = props;
    return (
        <div className={cn(blockDisplayBoolean && 'hidden', 'mx-48 mt-16 space-y-16')}>
            <div className="flex flex-row justify-center">
                <p className="text-center text-3xl font-semibold">
                    {title.titlePart}{' '}
                    <span className="text-secondary dark:text-accent">{title.titlePart1}</span>{' '}
                    {title.titlePart2}
                </p>
            </div>
            <div className={'mb-32 grid grid-cols-3 gap-4'}>
                {cardArray.map((item, index) => (
                    <Card
                        key={index}
                        className={
                            'group bg-muted/50 dark:bg-secondary hover:dark:bg-secondary-foreground dark:text-accent hover:dark:text-accent/80 rounded-none text-black hover:bg-[#FBC965]'
                        }>
                        <CardContent className={'flex flex-col items-center space-y-4 px-6 py-10'}>
                            <div className={'relative h-8 w-8'}>
                                <SvgFromUrl
                                    url={item.card.icon.url as string}
                                    alt={item.card.icon.alt}
                                    className={
                                        'dark:group-hover:text-accent dark:text-accent h-8 w-8 text-[#FBC965] transition-colors duration-300 group-hover:text-[#FFF9EC]'
                                    }
                                />
                            </div>
                            <div className={'flex flex-col space-y-2 text-center'}>
                                <p className={'text-2xl'}>{item.card.title}</p>
                                <p className={'text-sm'}>{item.card.description}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
