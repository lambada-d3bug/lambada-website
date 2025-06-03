import {Media} from "@/payload-types";

export const isMedia = (logo: unknown): logo is Media =>
    typeof logo === 'object' &&
    logo !== null &&
    'url' in logo &&
    typeof (logo as Media).url === 'string';