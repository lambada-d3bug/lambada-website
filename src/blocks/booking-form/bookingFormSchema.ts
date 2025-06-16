import { z } from 'zod';

// Helper to check if date is today or in the future
const notPastDate = z.date().refine((date) => date >= new Date(), {
    message: 'Date cannot be in the past',
});

export const formSchema = z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    mail: z.string().email('Invalid email address'),
    tel: z
        .string()
        .regex(
            /^\+?\d{1,4}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/,
            'Invalid phone number',
        ),
    other: z.string().optional(),
    dateRangeSchema: z
        .object({
            from: notPastDate,
            to: notPastDate,
        })
        .refine(({ from, to }) => from <= to, {
            message: 'Start date must be before end date',
            path: ['to'], // optional: attach error to "to" field
        }),
    toggleValue: z.string().min(1, 'You must select an option'),
});
