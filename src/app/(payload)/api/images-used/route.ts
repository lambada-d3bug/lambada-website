import { NextRequest, NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export async function POST(req: NextRequest) {
    // Check authorization header for admin token
    if (!ADMIN_API_KEY) {
        throw new Error('ADMIN_API_KEY is not set in environment variables.');
    }
    const authHeader = req.headers.get('authorization');
    if (!authHeader || authHeader.trim() !== `Bearer ${ADMIN_API_KEY}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const payload = await getPayload({ config });

    try {
        // Fetch pages and media docs
        const [pagesResponse, mediaResponse] = await Promise.all([
            payload.find({ collection: 'pages', limit: 0 }),
            payload.find({ collection: 'media', limit: 0 }),
        ]);

        const pages = pagesResponse.docs;

        // Recursive function to find image IDs in page layouts
        function findImages(obj: any, result = new Set<string>()): Set<string> {
            if (typeof obj !== 'object' || obj === null) return result;

            if (
                'id' in obj &&
                typeof obj.id === 'string' &&
                'url' in obj &&
                typeof obj.url === 'string'
            ) {
                result.add(obj.id);
            }

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
        for (const page of pages) {
            if (Array.isArray(page.layout)) {
                for (const block of page.layout) {
                    findImages(block, allImages);
                }
            }
        }

        const imagesInMedia = new Set<string>(
            mediaResponse.docs.filter((m) => m?.id && m?.url).map((m) => m.id),
        );

        // Find unused images
        const unusedImages = [...imagesInMedia].filter((id) => !allImages.has(id));

        // Delete unused images concurrently, with error handling
        const deletedIds: string[] = [];
        const failedDeletes: { id: string; error: string }[] = [];

        await Promise.all(
            unusedImages.map(async (id) => {
                try {
                    await payload.delete({
                        collection: 'media',
                        id,
                    });
                    deletedIds.push(id);
                } catch (err: any) {
                    failedDeletes.push({
                        id,
                        error: err?.message || 'Unknown error',
                    });
                }
            }),
        );

        return NextResponse.json({
            message: `${deletedIds.length} unused images deleted.`,
            deletedIds,
            failedDeletes,
        });
    } catch (error) {
        console.error('Error deleting unused images:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
