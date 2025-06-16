import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export async function GET() {
    const payload = await getPayload({ config });

    const reviews = await payload.find({
        collection: 'googleReviewsFr',
        sort: '-createdAt',
        limit: 1,
    });

    return NextResponse.json(reviews.docs);
}
