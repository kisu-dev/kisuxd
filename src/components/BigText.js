"use client"
import { useEffect } from 'react';
import React from 'react'
import { gsap } from 'gsap';
function BigText() {
    useEffect(()=>{

window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fadein');
    elements.forEach((element) => {
      if (isElementInMiddleViewport(element)) {
        element.style.opacity = '1';
        element.classList.add('move-up');
      }
    });
  });
  
  function isElementInMiddleViewport(element) {
    const rect = element.getBoundingClientRect();
    const elementMiddle = rect.top + rect.height / 2;
    return elementMiddle >= 0 && elementMiddle <= window.innerHeight;
  }
    },[])
  return (

<div class="part1">
  <p class="sitename">UI ROAD TRIP</p>
  
  <div class="spacer"></div>
  
  <div class="big-text">
    <p class="fadein">SAY HELLO</p>
    <p class="fadein">TO THESE</p>
    <p class="fadein">HUGE TEXTS</p>
  </div>
</div>

  )
}

export default BigText