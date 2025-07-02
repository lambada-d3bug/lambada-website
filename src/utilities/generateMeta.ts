import type { Metadata } from 'next';

import type { Config, Media, Page } from '@/payload-types';

import { getServerSideURL } from './getUrl';
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph';

export const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null): string => {
    const serverUrl = getServerSideURL();
    // Default OG image
    let path = '/website-template-OG.webp';

    if (image && typeof image === 'object' && image.url) {
        // Prefer thumbnailURL if provided, else full URL
        path = image.thumbnailURL || image.url;
    }

    return serverUrl + path;
};

export const generateMeta = async (args: { doc: Partial<Page> | null }): Promise<Metadata> => {
    const { doc } = args;

    const ogImage = getImageURL(doc?.meta?.image);

    const title = doc?.meta?.title ? doc?.meta?.title : 'Payload Website Template';

    return {
        description: doc?.meta?.description,
        openGraph: mergeOpenGraph({
            description: doc?.meta?.description || '',
            images: ogImage
                ? [
                      {
                          url: ogImage,
                      },
                  ]
                : undefined,
            title,
            url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : '/',
        }),
        title,
    };
};
