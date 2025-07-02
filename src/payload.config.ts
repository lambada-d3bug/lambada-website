import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { buildConfig } from 'payload';
import { resendAdapter } from '@payloadcms/email-resend';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';

import { Pages } from './collections/Pages';
import { Users } from './collections/Users';
import { MainMenu } from './globals/MainMenu';
import { Media } from '@/collections/Media';
import { header } from '@/globals/header/config';
import { Footer } from '@/globals/footer/config';
import { GoogleReviewsFr } from 'src/collections/google-reviews-fr';
import { GoogleReviewsEn } from '@/collections/google-reviews-en';
import { GoogleReviewsIt } from '@/collections/google-reviews-it';
import { plugins } from '@/plugins';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
    email: resendAdapter({
        defaultFromAddress: 'onboarding@resend.dev',
        defaultFromName: 'Payload CMS',
        apiKey: process.env.RESEND_API_KEY || '',
    }),
    admin: {},
    localization: {
        locales: [
            { label: 'English', code: 'en' },
            { label: 'Français', code: 'fr' },
            { label: 'italien', code: 'it' },
        ],
        defaultLocale: 'fr', // required
    },
    collections: [Pages, Users, Media, GoogleReviewsFr, GoogleReviewsIt, GoogleReviewsEn],
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
        connectOptions: {
            tls: true,
            tlsAllowInvalidCertificates: false,
        },
    }),
    editor: slateEditor({}),
    globals: [MainMenu, header, Footer],
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    plugins: [
        ...plugins,
        vercelBlobStorage({
            enabled: true, // Optional, defaults to true
            // Specify which collections should use Vercel Blob
            collections: {
                media: true,
            },
            // Token provided by Vercel once Blob storage is added to your Vercel project
            token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
    ],
});
