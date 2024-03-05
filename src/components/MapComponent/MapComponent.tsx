"use client";
import { MapComponent, MapTypes } from "@neshan-maps-platform/mapbox-gl-react";
import "@neshan-maps-platform/mapbox-gl-react/dist/style.css";
import { useEffect, useState } from "react";

function App() {
    const [isBrowser, setIsBrowser] = useState(false);
    useEffect(() => {
        // Update the state if window is available (i.e., we are in the browser)
        if (typeof window !== 'undefined') {
            setIsBrowser(true);
        }
    }, []);
    return (

        < MapComponent options={{ mapKey: "web.2a4f93a5aebb4391b3076584731cc3bc", mapType: MapTypes.neshanRasterNight }
        } />

    );
}

export default App;