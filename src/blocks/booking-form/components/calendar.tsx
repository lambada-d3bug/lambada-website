'use client';

import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { addDays, startOfToday } from 'date-fns';
import { formatDateLocalized } from '@/utilities/formatDateLocalized';
import { usePathname } from 'next/navigation';
import { useWindowWidth } from '@/utilities/useWindowWidth';
import { enUS, fr, it } from 'date-fns/locale';
import { Controller } from 'react-hook-form';

interface CalendarComponentProps {
    calendarGroup: {
        dynamicTitle: { singular: string; plural: string };
        dateSuffix: string;
        deleteDateText: string;
    };
    form: any;
}

const getLocaleFromPath = (pathname: string): 'en' | 'fr' | 'it' => {
    const locale = pathname.split('/')[1];
    if (locale === 'en' || locale === 'fr' || locale === 'it') return locale;
    return 'en';
};

export function CalendarComponent({ calendarGroup, form }: CalendarComponentProps) {
    const pathname = usePathname();
    const locale = getLocaleFromPath(pathname);
    const { dynamicTitle, dateSuffix, deleteDateText } = calendarGroup;
    const today = startOfToday();
    const tomorrow = addDays(today, 1);
    const width = useWindowWidth();
    const dateFnsLocale = { en: enUS, fr, it }[locale];

    return (
        <div className="order-1 flex flex-col items-center space-y-2 lg:order-2">
            <Controller
                control={form.control}
                name="dateRangeSchema"
                render={({ field: { value, onChange } }) => {
                    const dateRange = value as DateRange | undefined;

                    const diffInMs =
                        dateRange?.from && dateRange?.to
                            ? dateRange.to.getTime() - dateRange.from.getTime()
                            : undefined;

                    const diffInDays =
                        diffInMs !== undefined
                            ? Math.floor(diffInMs / (1000 * 60 * 60 * 24))
                            : undefined;

                    const handleDateSelect = (date: Date) => {
                        let from = dateRange?.from;
                        let to = dateRange?.to;

                        if (!from) {
                            onChange({ from: date, to: date });
                        } else if (!to) {
                            onChange({ from, to: date });
                        } else if (
                            date.getTime() < from.getTime() &&
                            from.getTime() === to.getTime()
                        ) {
                            onChange({ from: date, to: date });
                        } else if (date.getTime() < from.getTime()) {
                            onChange({ from: date, to: undefined });
                        } else if (date.getTime() === from.getTime()) {
                            onChange({ from: undefined, to: undefined });
                        } else if (date.getTime() === to?.getTime()) {
                            onChange({ from, to: undefined });
                        } else {
                            onChange({ from, to: date });
                        }
                    };

                    const isDateDisabled = (date: Date) => date < tomorrow;

                    return (
                        <>
                            {dateRange?.from && dateRange?.to && (
                                <div className="flex flex-col items-center md:w-full">
                                    {diffInDays !== undefined && diffInDays !== 0 && (
                                        <p className="text-3xl font-medium">
                                            {diffInDays}{' '}
                                            {diffInDays <= 1
                                                ? dynamicTitle.singular
                                                : dynamicTitle.plural}
                                        </p>
                                    )}
                                    {dateRange.from.getDate() !== dateRange.to.getDate() && (
                                        <p>
                                            {formatDateLocalized(dateRange.from, locale)}{' '}
                                            {dateSuffix} {formatDateLocalized(dateRange.to, locale)}
                                        </p>
                                    )}
                                </div>
                            )}
                            <Calendar
                                id="dateRangeSchema"
                                mode="range"
                                numberOfMonths={width! > 768 ? 2 : 1}
                                defaultMonth={dateRange?.from}
                                selected={dateRange}
                                onDayClick={handleDateSelect}
                                className="rounded-lg border shadow-sm"
                                locale={dateFnsLocale}
                                disabled={isDateDisabled}
                            />
                            <p
                                className="underline hover:cursor-pointer"
                                onClick={() => onChange({ from: undefined, to: undefined })}>
                                {deleteDateText}
                            </p>
                        </>
                    );
                }}
            />
        </div>
    );
}
