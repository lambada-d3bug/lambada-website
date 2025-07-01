import { CollectionAfterChangeHook } from 'payload';

type CollectionAfterChangeArgs = Parameters<CollectionAfterChangeHook>[0];

export const revalidatePageHook = async (args: CollectionAfterChangeArgs) => {
    const { doc } = args;

    if (!doc?.slug) {
        console.warn('[revalidatePageHook] No slug found, skipping revalidation');
        return;
    }

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/revalidate-page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REVALIDATE_SECRET}`, // Added secret
            },
            body: JSON.stringify({ slug: doc.slug }),
        });

        if (!res.ok) {
            console.error('[revalidatePageHook] Revalidation failed:', await res.text());
        } else {
            console.log('[revalidatePageHook] Revalidation succeeded for slug:', doc.slug);
        }
    } catch (err) {
        console.error('Failed to revalidate page:', err);
    }
};
