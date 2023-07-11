"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { toArray } from "gsap/all";

export default function ButtonAnimation() {
  useEffect(() => {
    gsap.registerPlugin(toArray);

    const buttons = toArray(".button");
    buttons.forEach((item) => {
      let span = item.querySelector("span");
      let tl = gsap.timeline({ paused: true });

      tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
      tl.set(span, { yPercent: 150 });
      tl.to(span, { duration: 0.2, yPercent: 0 });

      item.addEventListener("mouseenter", () => {
        tl.play(0);
        span.innerText = `hover${item.dataset.index}`;
      });

      item.addEventListener("mouseleave", () => {
        tl.reverse();
        span.innerText = item.dataset.originalText;
      });
    });
  }, []);

  return (
    <div>
      <a href="#" className="button" data-index="1" data-original-text="Link 1">
        <span>Link 1</span>
      </a>

      <a href="#" className="button" data-index="2" data-original-text="Link 2">
        <span>Link 2</span>
      </a>

      <a href="#" className="button" data-index="3" data-original-text="Link 3">
        <span>Link 3</span>
      </a>
    </div>
  );
}
