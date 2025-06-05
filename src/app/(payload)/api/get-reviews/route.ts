import { NextResponse } from 'next/server';
import { getPayload } from 'payload';
import config from '@payload-config';

export async function GET() {
    const payload = await getPayload({ config });

    const reviews = await payload.find({
        collection: 'googleReviews',
        sort: '-createdAt',
        limit: 10,
    });

    return NextResponse.json(reviews.docs);
}
