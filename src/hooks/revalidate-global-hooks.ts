import { GlobalAfterChangeHook } from 'payload';

type GlobalAfterChangeArgs = Parameters<GlobalAfterChangeHook>[0];

export const revalidateGlobalHook = async (args: GlobalAfterChangeArgs): Promise<void> => {
    const { global } = args;
    const logPrefix = '[revalidateGlobalHook]';

    if (!global?.slug) {
        console.warn(`${logPrefix} No slug found in global config, skipping revalidation`);
        return;
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-globals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REVALIDATE_SECRET}`,
            },
            body: JSON.stringify({ slug: global.slug }),
        });

        if (!res.ok) {
            const errorText = await res.text();
            console.error(`${logPrefix} Revalidation failed for slug "${global.slug}":`, errorText);
        } else {
            console.log(`${logPrefix} Revalidation succeeded for slug: "${global.slug}"`);
        }
    } catch (err) {
        console.error(`${logPrefix} Error during fetch:`, err);
    }
};
