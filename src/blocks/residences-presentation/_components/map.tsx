'use client';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
    position: [number, number];
}

export function Map(props: MapProps) {
    const { position } = props;
    return (
        <div className={'h-[400px] w-full rounded-lg'}>
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className={'h-full'}>
                <TileLayer
                    className={'rounded-lg'}
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
            </MapContainer>
        </div>
    );
}
