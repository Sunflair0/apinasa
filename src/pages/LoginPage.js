import React, { useRef, useEffect } from 'react'
import Logo from '../components/Logo'
import gsap from 'gsap'
import Background from '../components/Background'
import Cardflip from '../components/Cardflip'

export default function LoginPage() {
    let tl = gsap.timeline();
    let cursor = useRef(null);
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;
    useEffect(() => {
        tl.to({},0.016,{
            repeat: -1,
            onRepeat: function(){
                posX += (mouseX - posX) / 10;
                posY += (mouseY - posY) / 10;
                tl.set(cursor,{
                    css: {
                        left: posX - 50,
                        top: posY - 50,
                    }
                })
            }
        })
        document.addEventListener("mousemove", function(e){
            mouseX = e.pageX;
            mouseY = e.pageY;
        })
    })
    return (
        <>
            <div className="flex_backing">
                <div><Background /></div>
                <div className='ship cursor_follow' ref={el => cursor = el}><Logo /></div>
                <div><Cardflip /></div>
            </div>
        </>
    )
}