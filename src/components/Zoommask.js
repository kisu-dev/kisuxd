"use client"
import { useEffect } from 'react';
import gsap from 'gsap';

const ZoomComponent = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    gsap.timeline({
      scrollTrigger: {
        trigger: ".zoom",
        scrub: true,
        start: "top top",
        end: "+=1000%",
        pin: true,
      }
    })
    .to(".zoom-circle", {
      scale: 12
    }, "sameTime")
    .to(".zoom-content", {
      scale: 1 
    }, "sameTime");
  }, []);

  return (
  
<div class="zoom-container">
  <div class="zoom">
      <h2 class="zoom-heading">KEEP SCROLLING TO ZOOM</h2>
      <div class="zoom-circle"></div>
      <h3 class="zoom-content">ZOOM INNN</h3>
    <div class="footer">
      <p class="footer-content">Thanks for watching!</p>
  <a class="footer-content link" href="https://twitter.com/juxtopposed" target="_blank"><span class="link-text"  data-text="Let's connect">Let's connect</span></a>
    </div>
  </div>
</div>

  );
};

export default ZoomComponent;
