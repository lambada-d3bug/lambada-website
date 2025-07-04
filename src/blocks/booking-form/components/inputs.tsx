'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface InputsProps {
    form: any;
    InputsProps: {
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
    };
}

export function Inputs(props: InputsProps) {
    const { InputsProps } = props;
    const { lastName, firstName, mail, tel, other, button } = InputsProps;
    return (
        <div className={'order-3 flex flex-col space-y-4 lg:order-1'}>
            <div className={'flex flex-col items-center space-y-2 sm:space-y-4 sm:px-16'}>
                <div className={'flex w-full flex-row justify-center space-x-4'}>
                    <div className="group flex w-full flex-col space-y-1">
                        <Label className="group-focus-within:text-primary text-chart-5 dark:text-primary text-xs sm:text-lg">
                            {lastName.label}
                        </Label>
                        <Input
                            id={'lastName'}
                            {...props.form.register('lastName')}
                            className="placeholder:text-chart-5 dark:placeholder:text-primary/80 focus-visible:ring-primary text-xs focus-visible:border-none sm:text-lg"
                            placeholder={lastName.placeholder}
                        />
                    </div>
                    <div className={'group flex w-full flex-col space-y-1'}>
                        <Label className="group-focus-within:text-primary text-chart-5 dark:text-primary text-xs sm:text-lg">
                            {firstName.label}
                        </Label>
                        <Input
                            id={'firstName'}
                            {...props.form.register('firstName')}
                            className="placeholder:text-chart-5 dark:placeholder:text-primary/80 focus-visible:ring-primary text-xs focus-visible:border-none sm:text-lg"
                            placeholder={firstName.placeholder}
                        />
                    </div>
                </div>
                <div className={'group flex w-full flex-col space-y-1'}>
                    <Label className="group-focus-within:text-primary text-chart-5 dark:text-primary text-xs sm:text-lg">
                        {mail.label}
                    </Label>{' '}
                    <Input
                        id={'mail'}
                        {...props.form.register('mail')}
                        className="placeholder:text-chart-5 dark:placeholder:text-primary/80 focus-visible:ring-primary text-xs focus-visible:border-none sm:text-lg"
                        placeholder={mail.placeholder}
                    />
                </div>
                <div className={'group flex w-full flex-col space-y-1'}>
                    <Label className="group-focus-within:text-primary dark:text-primary text-chart-5 text-xs sm:text-lg">
                        {tel.label}
                    </Label>{' '}
                    <Input
                        id={'tel'}
                        {...props.form.register('tel')}
                        className="placeholder:text-chart-5 dark:placeholder:text-primary/80 focus-visible:ring-primary text-xs focus-visible:border-none sm:text-lg"
                        placeholder={tel.placeholder}
                    />
                </div>
                <div className={'group flex w-full flex-col space-y-1'}>
                    <Label className="group-focus-within:text-primary text-chart-5 dark:text-primary text-xs sm:text-lg">
                        {other.label}
                    </Label>{' '}
                    <Textarea
                        id={'other'}
                        {...props.form.register('other')}
                        className="placeholder:text-chart-5 dark:placeholder:text-primary/80 focus-visible:ring-primary text-xs focus-visible:border-none sm:text-lg"
                        placeholder={other.placeholder}
                    />
                </div>
            </div>
            <Button
                type={'submit'}
                className={'bg-secondary order-5 text-xs text-white sm:mx-16 sm:text-lg'}>
                {button.label}
            </Button>
        </div>
    );
}
