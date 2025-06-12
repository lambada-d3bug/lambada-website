'use client';

import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { useState } from 'react';
import { addDays, startOfToday } from 'date-fns';
import { formatDateLocalized } from '@/utilities/formatDateLocalized';
import { usePathname } from 'next/navigation';

interface CalendarComponentProps {
    calendarGroup: {
        dynamicTitle: { singular: string; plural: string };
        dateSuffix: string;
        deleteDateText: string;
    };
}

const getLocaleFromPath = (pathname: string): 'en' | 'fr' | 'it' => {
    const locale = pathname.split('/')[1];
    if (locale === 'en' || locale === 'fr' || locale === 'it') return locale;
    return 'en'; // default fallback
};
export function CalendarComponent(props: CalendarComponentProps) {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    console.log(locale);
    const { calendarGroup } = props;
    const { dynamicTitle, dateSuffix, deleteDateText } = calendarGroup;
    const today = startOfToday();
    const tomorrow = addDays(today, 1);
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined,
    });

    const isFormIncomplete = !dateRange?.from;

    const diffInMs: number | undefined = dateRange?.to?.getTime() - dateRange?.from?.getTime();
    const diffInDays: number | undefined = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const handleDateSelect = (date: Date) => {
        let from = dateRange?.from;
        let to = dateRange?.to;

        if (!from) {
            setDateRange({ from: date, to: date });
        } else if (!to) {
            setDateRange({ from, to: date });
        } else if (date.getTime() < from.getTime() && from.getTime() === to.getTime()) {
            setDateRange({ from: date, to: date });
        } else if (date.getTime() < from.getTime()) {
            setDateRange({ from: date, to: undefined });
        } else if (date.getTime() === from.getTime()) {
            console.log('here');
            setDateRange({ from: undefined, to: undefined });
        } else if (date.getTime() === to?.getTime()) {
            setDateRange({ from, to: undefined });
        } else {
            setDateRange({ from, to: date });
        }
    };

    function isDateDisabled(
        date: Date,
        {
            tomorrow,
        }: {
            tomorrow: Date;
        },
    ): boolean {
        return date < tomorrow;
    }

    return (
        <div className={'flex flex-col space-y-2'}>
            {dateRange && dateRange.from && dateRange.to && (
                <div className={'flex flex-col'}>
                    {diffInMs !== 0 && (
                        <p>
                            {diffInDays}{' '}
                            {diffInDays <= 1 ? dynamicTitle.singular : dynamicTitle.plural}
                        </p>
                    )}
                    <p>
                        {formatDateLocalized(dateRange.from, locale)} {dateSuffix}{' '}
                        {formatDateLocalized(dateRange.to, locale)}
                    </p>
                </div>
            )}
            <Calendar
                mode="range"
                defaultMonth={dateRange?.from}
                selected={dateRange}
                onDayClick={handleDateSelect}
                className="rounded-lg border shadow-sm"
                disabled={(date) =>
                    isDateDisabled(date, {
                        tomorrow,
                    })
                }
                initialFocus
            />
            <p
                className={'underline'}
                onClick={() => setDateRange({ from: undefined, to: undefined })}>
                {deleteDateText}
            </p>
        </div>
    );
}
