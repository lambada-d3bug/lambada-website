import { notFound, redirect } from 'next/navigation';
import { getPayload, RequiredDataFromCollectionSlug } from 'payload';
import React, { cache, Fragment } from 'react';

import type { Page as PageType } from '../../../../payload-types';

import config from '@payload-config';
import classes from './index.module.scss';
import { RenderBlocks } from '@/utilities/renderBlocks';
import { Metadata, ResolvingMetadata } from 'next';
import { generateMeta } from '@/utilities/generateMeta';

interface PageParams {
    params: Promise<{
        locale?: 'en' | 'fr' | 'it' | 'all';
        slug?: string;
    }>;
}

// eslint-disable-next-line no-restricted-exports
export default async function Page({ params: paramsPromise }: PageParams) {
    const { slug = 'home', locale = 'fr' } = await paramsPromise;

    if (slug === 'home') {
        redirect(`/${locale}`);
    }

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

export async function generateStaticParams() {
    const payload = await getPayload({ config });

    const pagesRes = await payload.find({
        collection: 'pages',
        depth: 0,
        draft: true,
        limit: 100,
    });

    const pages = pagesRes?.docs;

    return pages.map(({ slug }) =>
        slug !== 'home'
            ? {
                  slug,
              }
            : {},
    );
}

type Args = {
    params: Promise<{
        slug: string;
    }>;
};

export async function generateMetadata(
    { params }: Args,
    _parent: ResolvingMetadata,
): Promise<Metadata> {
    // Await the params
    const { slug } = await params;
    const finalSlug = slug || 'home';

    const page = await queryPageBySlug(finalSlug);
    return generateMeta({ doc: page });
}

// Cached query for page by slug
const queryPageBySlug = cache(
    async (slug: string): Promise<RequiredDataFromCollectionSlug<'pages'> | null> => {
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
        });

        return result.docs?.[0] || null;
    },
);
