'use client';

import { Mail, Phone } from 'lucide-react';

interface ContactInformationBlockProps {
    blockDisplayBoolean?: boolean;
    telGroup: {
        label: string;
        number: string;
    };
    emailGroup: {
        label: string;
        email: string;
    };
}

export function ContactInformationBlock(props: ContactInformationBlockProps) {
    const { telGroup, emailGroup, blockDisplayBoolean } = props;

    return (
        <div className={`${blockDisplayBoolean ? 'hidden' : ''} bg-primary text-white`}>
            <div className="container mx-auto px-6 py-8 md:py-12 lg:py-16">
                <div className="flex flex-col space-y-6 md:space-y-8 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-16">
                    {/* Phone Section */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="flex-shrink-0">
                            <Phone className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                            <span className="text-sm font-medium opacity-90 md:text-base">
                                {telGroup.label}
                            </span>
                            <a
                                href={`tel:${telGroup.number}`}
                                className="text-lg font-semibold transition-all duration-200 hover:underline md:text-xl lg:text-2xl">
                                {telGroup.number}
                            </a>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div className="flex items-center space-x-3 md:space-x-4">
                        <div className="flex-shrink-0">
                            <Mail className="h-5 w-5 md:h-6 md:w-6" />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
                            <span className="text-sm font-medium capitalize opacity-90 md:text-base">
                                {emailGroup.label}
                            </span>
                            <a
                                href={`mailto:${emailGroup.email}`}
                                className="text-lg font-semibold break-all transition-all duration-200 hover:underline md:text-xl lg:text-2xl">
                                {emailGroup.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
