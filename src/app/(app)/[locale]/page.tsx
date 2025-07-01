import { getPayload } from 'payload';
import config from '@payload-config';
import { RenderBlocks } from '@/utilities/renderBlocks';
// import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation';
import type { Page as PageType } from '@/payload-types';
import React, { Fragment } from 'react';
import classes from '@/app/(app)/[locale]/[slug]/index.module.scss';

interface PageParams {
    params: Promise<{
        locale?: 'en' | 'fr' | 'it' | 'all';
    }>;
}

export default async function Page({ params: paramsPromise }: PageParams) {
    const { locale = 'fr' } = await paramsPromise;
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

// export async function generateMetadata(): Promise<Metadata> {
//     const page = await queryPageBySlug('home')
//     return generateMeta({ doc: page })
// }
