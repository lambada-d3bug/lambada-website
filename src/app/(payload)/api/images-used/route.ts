import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export async function GET(req: NextRequest) {
    const payload = await getPayload({ config });

    try {
        const pagesResponse = await payload.find({
            collection: 'pages',
            limit: 0,
        });

        const mediaResponse = await payload.find({
            collection: 'media',
            limit: 0,
        });

        const pages = pagesResponse.docs;

        // Recursively find all objects that look like images (have an id and url)
        function findImages(obj: any, result = new Set<string>()): Set<string> {
            if (typeof obj !== 'object' || obj === null) return result;

            // Check if this object looks like an image with an id and url
            if (
                'id' in obj &&
                typeof obj.id === 'string' &&
                'url' in obj &&
                typeof obj.url === 'string'
            ) {
                result.add(obj.id);
            }

            // Recurse into all object properties
            for (const key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    const val = obj[key];
                    if (typeof val === 'object' && val !== null) {
                        findImages(val, result);
                    }
                }
            }

            return result;
        }

        const allImages = new Set<string>();
        const imagesInMedia = new Set<string>();

        const unusedImages = new Set([...allImages, ...imagesInMedia]);
        for (const page of pages) {
            if (Array.isArray(page.layout)) {
                for (const block of page.layout) {
                    findImages(block, allImages);
                }
            }
        }

        for (const media of mediaResponse.docs) {
            if (media && media.id && media.url) {
                imagesInMedia.add(media.id);
            }
        }

        return NextResponse.json({
            imagesUsed: Array.from(allImages),
            imagesInMedia: Array.from(imagesInMedia),
            unusedImages: Array.from(unusedImages),
        });
    } catch (error) {
        console.error('Error in /api/images-used:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
