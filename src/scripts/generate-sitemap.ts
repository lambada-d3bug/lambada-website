import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { getPayload } from 'payload';
import config from '@payload-config';

async function generateSitemap() {
    let SITE_URL =
        process.env.NEXT_PUBLIC_SERVER_URL ||
        process.env.VERCEL_PROJECT_PRODUCTION_URL ||
        'https://example.com';

    if (!SITE_URL.startsWith('http://') && !SITE_URL.startsWith('https://')) {
        SITE_URL = 'https://' + SITE_URL;
    }

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

    const links = pages.flatMap((page) =>
        locales.map((locale) => ({
            url:
                page.slug === 'home'
                    ? `${SITE_URL}/${locale}`
                    : `${SITE_URL}/${locale}/${page.slug}`,
            lastmod: page.updatedAt || dateFallback,
            links: locales.map((alt) => ({
                lang: alt,
                url:
                    page.slug === 'home' ? `${SITE_URL}/${alt}` : `${SITE_URL}/${alt}/${page.slug}`,
            })),
        })),
    );

    const stream = new SitemapStream({ hostname: SITE_URL });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
        data.toString(),
    );

    // Ensure the /public directory exists
    const publicDir = path.resolve(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
    }

    const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xml);

    console.log(`Sitemap generated at: ${sitemapPath}`);
}

// Run immediately if executed directly
const isMainModule = import.meta.url === `file://${process.argv[1]}`;
if (isMainModule) {
    generateSitemap()
        .then(() => {
            console.log('Sitemap generation complete.');
            process.exit(0); // <--- Add this line here!
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
}

export default generateSitemap;
