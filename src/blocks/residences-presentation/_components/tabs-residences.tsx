'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
            expandToggleTexts: {
                expandLabel: string;
                collapseLabel: string;
            };
            starLogo: Media;
        };
    };
}

export function TabsResidences(props: TabsResidencesProps) {
    const { tabs } = props;
    const { descriptionTab, localisationTab, equipementsTab } = tabs;

    return (
        <div className={'flex w-full flex-col items-center'}>
            <Tabs defaultValue="description" className="w-full sm:px-16">
                <TabsList className="relative grid h-auto w-full grid-cols-3 bg-transparent p-0">
                    {/* Gray underline for the entire tab list */}
                    <div className="absolute right-0 bottom-0 left-0 h-0.5 bg-gray-200"></div>

                    <TabsTrigger
                        value="description"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 text-xs font-semibold text-gray-600 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400 sm:text-base">
                        {descriptionTab.tabTitle}
                    </TabsTrigger>
                    <TabsTrigger
                        value="localisation"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 text-xs font-semibold text-gray-600 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400 sm:text-base">
                        {localisationTab.tabTitle}
                    </TabsTrigger>
                    <TabsTrigger
                        value="equipements"
                        className="relative rounded-none border-0 bg-transparent px-4 py-3 text-xs font-semibold text-gray-600 uppercase after:absolute after:right-0 after:bottom-0 after:left-0 after:z-10 after:h-0.5 after:bg-transparent data-[state=active]:bg-transparent data-[state=active]:text-gray-900 data-[state=active]:shadow-none data-[state=active]:after:bg-yellow-400 sm:text-base">
                        {equipementsTab[0].equipement.tabTitle}
                    </TabsTrigger>
                </TabsList>

                <DescriptionTab descriptionTab={descriptionTab} />

                <LocalisationTab localisationTab={localisationTab} />
                <EquipmentTab equipementsTab={equipementsTab} />
            </Tabs>
        </div>
    );
}
