'use client';

import { TabsContent } from '@/components/ui/tabs';

interface EquipmentTabProps {
    equipementsTab: {
        equipement: { tabTitle: string; label: string; items: { label: string }[] };
    }[];
}

export function EquipmentTab(props: EquipmentTabProps) {
    const { equipementsTab } = props;
    return (
        <TabsContent value="equipements" className="mt-6 space-y-4">
            <div className={'flex flex-row items-center justify-start space-x-4'}>
                <div className={'border-t-primary h-0 w-8 border-t-4 lg:w-16'}></div>
                <p className={'text-primary text-sm capitalize md:text-xl lg:text-3xl'}>
                    {equipementsTab[0].equipement.tabTitle}
                </p>
            </div>
            {equipementsTab.map((tab, i) => (
                <div key={i} className={'space-y-2'}>
                    <p>{tab.equipement.label}</p>
                    <div className={'flex flex-row space-x-4 overflow-x-scroll'}>
                        {tab.equipement.items.map((item, id) => (
                            <p key={id} className={'rounded-2xl border px-3 py-2'}>
                                {item.label}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </TabsContent>
    );
}
