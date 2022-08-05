import React, { useEffect } from "react";

export default function Background() {
    useEffect(() => {
        document.body.classList.add('stop_scroll');
    }, []);

    return (
        <>
            <div className="flex_backing rotatePlanets" >
                <div className="circle9" title="Uranus" style={{ overflow: 'hidden' }}>
                    <div className="circle10" title="Ariel"></div>
                    <div className="circle11" title="Titania"></div>
                    <div className="circle12" title="Umbriel"></div>
                    <div className="circle13" title="Oberon"></div>
                </div>
                <div className="circle3 " title="Mars"></div>
                <div className="circle5 " title="Mercury"></div>
            </div>
            <div className="comet" title="comet"></div>
            <div></div>
            <div className="circle15" title="Sun/Sol"></div>

        </>
    );
}