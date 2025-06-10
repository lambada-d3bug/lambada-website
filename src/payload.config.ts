import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { slateEditor } from '@payloadcms/richtext-slate';
import { fileURLToPath } from 'node:url';
import path from 'path';
import { buildConfig } from 'payload';

import { Pages } from './collections/Pages';
import { Users } from './collections/Users';
import { MainMenu } from './globals/MainMenu';
import { Media } from '@/collections/Media';
import { header } from '@/globals/header/config';
import { Footer } from '@/globals/footer/config';
import { GoogleReviewsFr } from 'src/collections/google-reviews-fr';
import { GoogleReviewsEn } from '@/collections/google-reviews-en';
import { GoogleReviewsIt } from '@/collections/google-reviews-it';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// eslint-disable-next-line no-restricted-exports
export default buildConfig({
    admin: {
        livePreview: {
            breakpoints: [
                {
                    name: 'mobile',
                    height: 667,
                    label: 'Mobile',
                    width: 375,
                },
            ],
        },
    },
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
    }),
    editor: slateEditor({}),
    globals: [MainMenu, header, Footer],
    secret: process.env.PAYLOAD_SECRET || '',
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
});
