import { getPayload } from 'payload';
import config from '@payload-config';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';

export async function GET() {
    const SITE_URL =
        process.env.NEXT_PUBLIC_SERVER_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL ||
        'https://example.com';
    const payload = await getPayload({ config });

    const locales = ['fr', 'en', 'it'];
    const dateFallback = new Date().toISOString();

    const result = await payload.find({
        collection: 'pages',
        draft: false,
        depth: 0,
        where: {
            _status: { equals: 'published' },
        },
        limit: 1000,
    });

    const pages = result.docs || [];

    // We'll build an array of URLs for sitemap including alternates as <xhtml:link>
    // But since SitemapStream doesn't support alternates automatically,
    // we must manually generate XML for alternates or use sitemap v7+ with the right options.

    // The sitemap package supports passing 'links' for alternate hreflang,
    // but they need to be lowercase: 'links' array with { lang, url }

    const links = pages.flatMap((page) =>
        locales.map((locale) => ({
            url: page.slug === 'home' ? `/${locale}` : `/${locale}/${page.slug}`,
            lastmod: page.updatedAt || dateFallback,
            links: locales.map((alt) => ({
                lang: alt,
                url: page.slug === 'home' ? `${SITE_URL}/${alt}` : `${SITE_URL}/${alt}/${page.slug}`,
            })),
        })),
    );

    const stream = new SitemapStream({ hostname: SITE_URL });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString(),
    );

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
