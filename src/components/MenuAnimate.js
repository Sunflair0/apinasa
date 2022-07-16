import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Logo from './Logo';
import Navbar from './Navbar';

function MenuAnimate() {
  const [reversed, setReversed] = useState(true);
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef(); // store the timeline in a ref.

  useEffect(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(q(".ship"), {
        scale: 1,
      })
      .to(q(".ship"), {
        duration: .3,
        rotation: 32,
        scale: 1,
        outlineColor: '000'
      })
      .to(q(".ship"), {
        duration: 2,
        x: '15%',
        rotation: 32,
        scale: 2.5,
        ease: 'ease-in'
      })
        .to(q(".menu1items"), {
        duration: 1,
        y: "-350%",
        stagger: .3,
        scale: 0,
      })
      .to(q(".ship"), {
        rotation: 32,
        scale: 2.5,
      })
      .to(q(".ship"), {
        duration: .3,
        x: '150%',
        y: "60%",
        rotation: -32,
        scale: .8,
        outlineColor: '#00ff2a'
      })
      .to(q(".ship"), {
        duration: .2,
        rotation: 0,
        x: '-60%',
        y: '0%',
        scale: .2,
      });
  }, []);

  useEffect(() => {
    // toggle the direction of our timeline
    tl.current.reversed(reversed);
  }, [reversed]);

  return (
    <div className="app" ref={el}>
      <div>
        <button className='ship'
          onClick={() => setReversed(!reversed)} ><Logo /></button>
      </div>
      <Navbar />
    </div>
  );
}
export default (MenuAnimate)