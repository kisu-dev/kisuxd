"use client"
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let container = document.querySelector(".horizontal-scroller");
    let containerWidth = container.scrollWidth - document.documentElement.clientWidth;

    gsap.to(container, {
      x: () => -containerWidth,
      scrollTrigger: {
        markers: false,
        trigger: '.horizontal-wrapper',
        start: 'top top',
        scrub: 0.5,
        pin: '.horizontal-container',
        end: () => "+=" + containerWidth,
        invalidateOnRefresh: true,
      }
    });
  }, []);

  return (
    <div className="horizontal-container">
      <div className="horizontal-wrapper">
        <div className="horizontal-scroller">
          <div className="row">
            <div className="item filled">
              <p>We have some amazing content on this site. Wanna check 'em out?</p>
              <a className="link item-link"><span className="link-text" data-text="Check our content">Check our content</span></a>
            </div>
            <div className="item filled">
              <p>Fun fact: Did you know that minimalism is on the rise? UIs now use fewer colors, simple and clear typography, and a generous amount of white space.</p>
            </div>
            <div className="item big">
              <p>5,667 Cups of Coffee</p>
            </div>
            <div className="item filled">
              <p>Did you know that users can memorize only around 6-7 chunks of data while browsing a webpage?</p>
              <a className="link item-link"><span className="link-text" data-text="Learn more">Learn more</span></a>
            </div>
            <div className="item filled big">
              <p>How is your UX doing?</p>
            </div>
            <div className="item">
              <p>Fun fact 3: CSS Grids were first introduced in 2011 by Microsoft. How did we ever do without 'em?</p>
            </div>
          </div>
          <div className="row">
            <div className="item big">
              <p>Scroll is the new click.</p>
            </div>
            <div className="item filled">
              <p>Do you like scrolling forever? Check out our infinite scrolling page. This site fulfills your passion for scrolling. It just won't stop!</p>
              <a className="link item-link"><span className="link-text" data-text="Check it out">Check it out</span></a>
            </div>
            <div className="item filled">
              <p>Fun fact 2: None of these links actually lead anywhere except the last link on this page.</p>
            </div>
            <div className="item big">
              <p># I lov3 GSAP</p>
            </div>
            <div className="item filled">
              <p><b>Tip:</b> Search 'GSAP Horizontal Scroll' in the HTML, CSS, or JS parts of the code.</p>
            </div>
            <div className="item filled">
              <p>Gotta go already? That was a short visit. Check back later some time. Ba-bye!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
