import { getPayload, RequiredDataFromCollectionSlug } from 'payload';
import config from '@payload-config';
import { RenderBlocks } from '@/utilities/renderBlocks';
// import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation';
import type { Page as PageType } from '@/payload-types';
import React, { cache, Fragment } from 'react';
import classes from '@/app/(app)/[locale]/[slug]/index.module.scss';
import { Metadata, ResolvingMetadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';

interface PageParams {
    params: Promise<{
        locale?: 'en' | 'fr' | 'it' | 'all';
    }>;
}

export default async function Page({ params: paramsPromise }: PageParams) {
    const { locale = 'fr' } = await paramsPromise;
    if (locale !== 'en' && locale !== 'fr' && locale !== 'it') {
        // If the locale is not supported, return a 404
        return notFound();
    }
    const slug = 'home';
    const payload = await getPayload({ config });
    const pageRes = await payload.find({
        collection: 'pages',
        draft: false,
        limit: 1,
        where: {
            slug: {
                equals: slug,
            },
        },
        locale,
    });
    const data = pageRes?.docs?.[0] as null | PageType;

    if (data === null) {
        return notFound();
    }

    return (
        <Fragment>
            <main className={classes.page}>
                <RenderBlocks blocks={data.layout} />
            </main>
        </Fragment>
    );
}
type Args = {
    params: {
        slug: string;
        locale?: 'en' | 'fr' | 'it';
    };
};

export async function generateMetadata(
    { params }: Args,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    const { slug, locale = 'fr' } = params;
    const finalSlug = slug || 'home';

    const page = await queryPageBySlug(finalSlug, locale);
    return generateMeta({ doc: page });
}

// Cached query for page by slug
const queryPageBySlug = cache(
    async (
        slug: string,
        locale: 'all' | 'en' | 'fr' | 'it' | undefined,
    ): Promise<RequiredDataFromCollectionSlug<'pages'> | null> => {
        const payload = await getPayload({ config });

        const result = await payload.find({
            collection: 'pages',
            limit: 1,
            pagination: false,
            where: {
                slug: {
                    equals: slug,
                },
            },
            locale,
        });

        return result.docs?.[0] || null;
    },
);
