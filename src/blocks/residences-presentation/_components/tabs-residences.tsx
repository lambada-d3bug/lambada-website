'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Media } from '@/payload-types';
import { DescriptionTab } from '@/blocks/residences-presentation/_components/description-tab';
import { LocalisationTab } from '@/blocks/residences-presentation/_components/localisation-tab';
import { EquipmentTab } from '@/blocks/residences-presentation/_components/equipment-tab';

interface TabsResidencesProps {
    tabs: {
        descriptionTab: {
            tabTitle: string;
            iconArray: {
                iconGroup: {
                    icon: Media;
                    label: string;
                };
            }[];
            descriptionGroup: {
                heading: string;
                description: string;
            };
            cautionGroup: {
                heading: string;
                descriptionCautionArray: { description: string; price: string }[];
            };
            button: {
                label: string;
                url: string;
            };
            expandToggleTexts: {
                expandLabel: string;
                collapseLabel: string;
            };
        };
        localisationTab: {
            tabTitle: string;
            longitude: number;
            latitude: number;
            adressGroup: {
                streetName: string;
                postCode: string;
                townName: string;
                country: string;
                houseNumber: string;
            };
        };
        equipementsTab: {
            equipement: { tabTitle: string; label: string; items: { label: string }[] };
        }[];
        reviewsTab: {
            tabTitle: string;
            overallGroup: {
                overallText: string;
                logo: Media;
            };
            reviewsGroup: {
                reviewArray: {
                    reviewGroup: {
                        overallRating: string;
                        author: string;
                        rating: number;
                        review: string;
                        date: string;
                        authorImage: string;
                        subReview: {
                            rating: number;
                            category: string;
                        };
                    };
                }[];
            };
        };
    };
}

export function TabsResidences(props: TabsResidencesProps) {
    const { tabs } = props;
    const { descriptionTab, localisationTab, equipementsTab, reviewsTab } = tabs;

    return (
        <div className={'flex w-full flex-col items-center'}>
            <Tabs defaultValue="description" className="w-full sm:px-16">
                <TabsList className="relative grid h-auto w-full grid-cols-4 bg-transparent p-0">
                    {/* Gray underline for the entire tab list */}
                    <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gray-200"></div>

                    <TabsTrigger
                        value="description"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 font-medium text-gray-600 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400">
                        {descriptionTab.tabTitle}
                    </TabsTrigger>
                    <TabsTrigger
                        value="localisation"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 font-medium text-gray-600 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400">
                        {localisationTab.tabTitle}
                    </TabsTrigger>
                    <TabsTrigger
                        value="equipements"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 font-medium text-gray-600 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400">
                        {equipementsTab[0].equipement.tabTitle}
                    </TabsTrigger>
                    <TabsTrigger
                        value="avis"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 font-medium text-gray-600 after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400">
                        {reviewsTab.tabTitle}
                    </TabsTrigger>
                </TabsList>

                <DescriptionTab descriptionTab={descriptionTab} />

                <LocalisationTab localisationTab={localisationTab} />
                <EquipmentTab equipementsTab={equipementsTab} />
                <TabsContent value="avis" className="mt-6">
                    <div className="rounded-lg bg-gray-50 p-4">
                        <h3 className="mb-2 text-lg font-semibold">Avis</h3>
                        <p className="text-gray-600">Content for the avis tab goes here.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
