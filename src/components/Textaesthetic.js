"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';

const CubeAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: 'expo.inOut',
        stagger: 0.12,
        duration: 2,
      },
      repeat: -1,
    });

    tl.to('.cube', { rotateY: -90 }, 0);
    tl.to('.cube .cube__face--front', { skewX: 30 }, 0);
    tl.from('.cube .cube__face--right', { skewX: 30 }, 0.15);
    tl.to('.cube .cube__face--front', { backgroundPosition: '0% 50%' }, 0);
    tl.to('.cube .cube__face--right', { backgroundPosition: '0% 50%' }, 0.15);
  }, []);

  return (
    <div className="scene" style={{paddingLeft:"50%"}}>
      <div className="cube">
        <div className="cube__face cube__face--front">KEEP</div>
        <div className="cube__face cube__face--right">KEEP</div>
      </div>
      <div className="cube">
        <div className="cube__face cube__face--front">scroll</div>
        <div className="cube__face cube__face--right">scroll</div>
      </div>
      <div className="cube">
        <div className="cube__face cube__face--front">TURN</div>
        <div className="cube__face cube__face--right">TURN</div>
      </div>
      <div className="cube">
        <div className="cube__face cube__face--front">TURN</div>
        <div className="cube__face cube__face--right">TURN</div>
      </div>
      <div className="cube">
        <div className="cube__face cube__face--front">TURN</div>
        <div className="cube__face cube__face--right">TURN</div>
      </div>
    </div>
  );
};

export default CubeAnimation;
