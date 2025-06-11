'use client';

import { TabsContent } from '@/components/ui/tabs';
import dynamic from 'next/dynamic';

interface MapProps {
    position: [number, number];
}

// Dynamically import the Map component with proper typing
const Map = dynamic<MapProps>(() => import('@/blocks/residences-presentation/_components/map'), {
    ssr: false,
});

interface LocalisationTabProps {
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
}

export function LocalisationTab(props: LocalisationTabProps) {
    return (
        <TabsContent value="localisation" className="mt-6">
            <Map position={[props.localisationTab.latitude, props.localisationTab.longitude]} />
        </TabsContent>
    );
}
