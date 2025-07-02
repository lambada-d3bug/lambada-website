import type { Metadata } from 'next';
import { getServerSideURL } from './getUrl';

const defaultOpenGraph: Metadata['openGraph'] = {
    type: 'website',
    description:
        'L’Ambada offers seaside apartments and a beachfront restaurant on the stunning beaches of Corsica — the perfect place for a relaxing holiday by the sea.',
    images: [
        {
            url: `${getServerSideURL()}/website-template-OG.webp`,
        },
    ],
    siteName: "L'ambada",
    title: 'L’Ambada – Beachfront Apartments & Restaurant in Corsica',
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
    return {
        ...defaultOpenGraph,
        ...og,
        images: og?.images ? og.images : defaultOpenGraph.images,
    };
};
