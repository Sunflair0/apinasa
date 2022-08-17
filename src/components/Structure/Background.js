import React, { useEffect } from "react";

export default function Background() {
// Overflow hidden for auth page
    useEffect(() => {
        document.body.classList.add('stop_scroll');
    }, []);

    return (
        <>
            <div className="flex_backing rotatePlanets"  >
                <div className="uranus" title="Uranus">
                    <div className="ariel" title="Ariel"></div>
                    <div className="titania" title="Titania"></div>
                    <div className="umbriel" title="Umbriel"></div>
                    <div className="oberon" title="Oberon"></div>
                </div>
                <div className="mars " title="Mars"></div>
                <div className="mercury " title="Mercury"></div>
            </div>
            <div className="comet" title="comet"></div>
            <div>
            </div>
            <div className="sun" title="Sun/Sol"></div>
        </>
    );
}