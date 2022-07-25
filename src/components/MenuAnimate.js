import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Logo from './Logo';
import Navbar from './Navbar';
import {CSSRulePlugin} from "gsap/all";

function MenuAnimate() {
  const [reversed, setReversed] = useState(true);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef(); // store the timeline in a ref.
  const rule = CSSRulePlugin.getRule(".ship:after");

  useEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()

      .to(q(".ship"), {
        duration: .5,
        rotation: 32,
        scale: 1,
        ease: 'ease-in',
      })
      .to(q(".ship"), {
        duration: .6,
        rotation: 32,
        x: '10%',
        y: '-30%',
        scale: 1.7,
        ease: 'ease-in'
      })
     
      .to(q(".menu1items"), {
        duration: 1,
        y: "-380%",
        stagger: .3,
        scale: 0,
      })
          
      .to(q(".ship"), {
        duration: 1,
        rotation: -10,
        x: '150%',
        y: "70%",
      })
      .to(q(".ship"), {
        duration: 1.2,
        scale: 2.5,
        ease: 'ease-in'
      }, "<")
      .to(q(".ship"), {
        duration: .2,
        rotation: 0,
        x: '-50%',
        y: '-50%',
        scale: .05,
        outlineColor: '#00ff2a'
      });
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="app" ref={el}>
      <div className='logo_flexbox'>
        <button className='ship'
          onClick={() => setReversed(!reversed)} >
          <Logo />
        </button></div>
      <div className='menu_flexbox'>
        <Navbar />
      </div>
    </div>
  );
}
export default (MenuAnimate)