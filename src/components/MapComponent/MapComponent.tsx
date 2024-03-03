"use client";
import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = ({ apiKey, center, zoom }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: apiKey,
            version: 'weekly',
        });

        loader.load().then(() => {
            const map = new google.maps.Map(mapRef.current, {
                center,
                zoom,
            });

            // اینجا می‌توانید مارکرها و سایر تنظیمات نقشه را اضافه کنید
        });
    }, [apiKey, center, zoom]);

    return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
