'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CalendarComponent } from '@/blocks/booking-form/components/calendar';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

interface BookingFormBlockProps {
    title: string;
    selectionArray: { label: string }[];
    formGroup: {
        lastName: {
            label: string;
            placeHolder: string;
        };
        firstName: {
            label: string;
            placeHolder: string;
        };
        mail: {
            label: string;
            placeHolder: string;
        };
        tel: {
            label: string;
            placeHolder: string;
        };
        other: {
            label: string;
            placeHolder: string;
        };
        button: {
            label: string;
            url: string;
        };
        calendarGroup: {
            dynamicTitle: { singular: string; plural: string };
            dateSuffix: string;
            deleteDateText: string;
        };
    };
}

export function BookingFormBlock(props: BookingFormBlockProps) {
    const { title, selectionArray, formGroup } = props;
    const { calendarGroup, tel, firstName, lastName, mail, other, button } = formGroup;
    const { dynamicTitle, dateSuffix, deleteDateText } = calendarGroup;

    return (
        <div className={'flex flex-col space-y-4 px-10 py-12'}>
            <div className={'flex flex-col space-y-2'}>
                <p className={'text-secondary text-lg font-semibold'}>{title}</p>
                <div className={'flex w-full flex-row space-x-4 rounded-xl'}>
                    <ToggleGroup
                        type={'single'}
                        className={'grid w-full grid-cols-4 gap-2 rounded-xl'}>
                        {selectionArray.map((selection, index) => (
                            <ToggleGroupItem
                                value={selection.label}
                                key={index}
                                className={
                                    'border-chart-5 rounded-xl border px-2 py-1 first:rounded-l-xl last:rounded-r-xl'
                                }>
                                {selection.label}
                            </ToggleGroupItem>
                        ))}
                    </ToggleGroup>
                </div>
            </div>
            <CalendarComponent calendarGroup={calendarGroup} />
            <div className={'flex flex-col items-center space-y-2'}>
                <div className={'flex flex-row justify-center'}>
                    <div className={'flex flex-col space-y-1'}>
                        <Label>{lastName.label}</Label> <Input placeholder={lastName.placeHolder} />
                    </div>
                    <div className={'flex flex-col space-y-1'}>
                        <Label>{firstName.label}</Label>{' '}
                        <Input placeholder={firstName.placeHolder} />
                    </div>
                </div>
                <div className={'flex flex-col space-y-1'}>
                    <Label>{mail.label}</Label> <Input placeholder={mail.placeHolder} />
                </div>
                <div className={'flex flex-col space-y-1'}>
                    <Label>{tel.label}</Label> <Input placeholder={tel.placeHolder} />
                </div>
                <div className={'flex flex-col space-y-1'}>
                    <Label>{other.label}</Label> <Textarea placeholder={other.placeHolder} />
                </div>
            </div>
            <Button>{button.label}</Button>
        </div>
    );
}
