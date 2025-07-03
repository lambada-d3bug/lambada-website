'use client';

import { CalendarComponent } from '@/blocks/booking-form/components/calendar';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs } from '@/blocks/booking-form/components/inputs';
import { Header } from '@/blocks/booking-form/components/header';
import { formSchema } from '@/blocks/booking-form/bookingFormSchema';
import { toast } from 'sonner';
import { cn } from '@/utilities/ui';

interface BookingFormBlockProps {
    blockDisplayBoolean?: boolean;
    title: string;
    selectionArray: { label: string }[];
    formGroup: {
        lastName: {
            label: string;
            placeholder: string;
        };
        firstName: {
            label: string;
            placeholder: string;
        };
        mail: {
            label: string;
            placeholder: string;
        };
        tel: {
            label: string;
            placeholder: string;
        };
        other: {
            label: string;
            placeholder: string;
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
    const { title, selectionArray, formGroup, blockDisplayBoolean } = props;
    const { calendarGroup, tel, firstName, lastName, mail, other, button } = formGroup;
    const InputsProps = { tel, firstName, lastName, mail, other, button };
    const HeaderProps = { title, selectionArray };

    const form = useForm<z.infer<typeof formSchema>>({
        mode: 'onChange',
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            tel: '',
            mail: '',
            toggleValue: '',
            dateRangeSchema: { from: undefined, to: undefined }, // ← use object, not array
        },
    });

    const onValid: SubmitHandler<z.infer<typeof formSchema>> = async (values) => {
        const res = await fetch('/api/booking-mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values),
        });

        if (!res.ok) {
            toast.error(`Erreur durant l'envoi du mail`);
        } else {
            toast.success('Email envoyé');
        }
    };

    const onInvalid = (errors: typeof form.formState.errors) => {
        Object.entries(errors).forEach(([field, error]) => {
            if (error?.message) {
                toast(error.message.toString());
            }
        });
    };

    return (
        <form
            className={cn(
                blockDisplayBoolean ? 'hidden' : '',
                'flex flex-col space-y-4 px-10 py-26 sm:space-y-8',
            )}
            onSubmit={form.handleSubmit(onValid, onInvalid)}>
            <Header HeaderProps={HeaderProps} form={form} />
            <div
                className={
                    'flex flex-col space-y-4 sm:order-4 sm:space-y-8 lg:order-2 lg:flex-row lg:justify-center'
                }>
                <CalendarComponent calendarGroup={calendarGroup} form={form} />
                <Inputs InputsProps={InputsProps} form={form} />
            </div>
        </form>
    );
}
