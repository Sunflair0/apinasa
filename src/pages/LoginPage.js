/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import Ship from '../components/Animations/Ship'
import gsap from 'gsap'
import Background from '../components/Structure/Background'
import Cardflip from '../components/Animations/Cardflip'
import Brand from '../components/Structure/Brand'

export default function LoginPage() {
    // let tl = gsap.timeline();
    // let cursor = useRef();
    // let posX = 0;
    // let posY = 0;
    // let mouseX = 0;
    // let mouseY = 0;

    // useEffect(() => {
    //     tl.to({}, 0.016, {
    //         repeat: -1,
    //         onRepeat: function () {
    //             posX += (mouseX - posX) / 30;
    //             posY += (mouseY - posY) / 30;
    //             tl.set(cursor, {
    //                 css: {
    //                     left: posX - 20,
    //                     top: posY - 150,
    //                 }
    //             })
    //         }
    //     })
    //     document.addEventListener("mousemove", function (e) {
    //         mouseX = e.pageX;
    //         mouseY = e.pageY;
    //     })
    // })
    return (
        <><Background />
            {/* <div className='cursor_follow' ref={el => cursor = el}> */}
                <Ship />
            {/* </div> */}

            <div className='center_tourguide'>
                <div className='brand_center'><Brand /></div>
                <Cardflip /></div>
        </>
    )
}