import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Controller } from 'react-hook-form';

interface HeaderProps {
    HeaderProps: {
        title: string;
        selectionArray: { label: string }[];
    };
    form: any;
}

export function Header(props: HeaderProps) {
    const { title, selectionArray } = props.HeaderProps;

    return (
        <div className="flex flex-col space-y-2 sm:order-1 sm:space-y-4 lg:order-1">
            <p className="text-secondary dark:text-primary/80 text-lg font-semibold sm:text-3xl">
                {title}
            </p>
            <div className="flex w-full flex-row space-x-4 rounded-xl">
                <Controller
                    control={props.form.control}
                    name="toggleValue"
                    render={({ field: { value, onChange } }) => (
                        <ToggleGroup
                            type="single"
                            value={value}
                            onValueChange={onChange}
                            className="grid w-full grid-cols-4 gap-2 rounded-xl">
                            {selectionArray.map((selection, index) => (
                                <ToggleGroupItem
                                    key={index}
                                    value={selection.label}
                                    className="border-chart-5 text-chart-5 rounded-xl border px-2 py-1 first:rounded-l-xl last:rounded-r-xl data-[state=on]:text-white sm:text-lg">
                                    {selection.label}
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    )}
                />
            </div>
        </div>
    );
}
