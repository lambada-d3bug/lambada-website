'use client';

interface TermsAndConditionsBlockProps {
    title: string;
    content: {
        subtitle: string;
        paragraph: string;
    }[];
}

export function TermsAndConditionsBlock(props: TermsAndConditionsBlockProps) {
    const { title, content } = props;
    return (
        <>
            <div
                className={
                    'lg:bg-accent-foreground/50 dark:lg:bg-primary/80 flex flex-col items-center justify-center pt-24 lg:pt-36'
                }></div>
            <div className="flex min-h-screen flex-col items-center justify-center space-y-6 p-4">
                <p className={'text-4xl font-bold'}>{title}</p>
                {content.map((item, i) => (
                    <div key={i} className={'flex flex-col items-center justify-center space-y-4'}>
                        <p className={'text-xl font-semibold'}>{item.subtitle}</p>
                        <p className={'text-center text-base'}>{item.paragraph}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
