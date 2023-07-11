"use client"

import { useEffect } from 'react';
import gsap from 'gsap';
const CursorComponent = () => {
    useEffect(() => {
      const cursor = document.querySelector('.cursor');
      const cursorScale = document.querySelectorAll('.cursor-scale');
      let mouseX = 0;
      let mouseY = 0;
  
      gsap.to({}, 0.009, {
        repeat: -1,
        onRepeat: function () {
          gsap.set(cursor, {
            css: {
              left: mouseX,
              top: mouseY,
            },
          });
        },
      });
  
      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
  
      cursorScale.forEach((link) => {
        link.addEventListener('mousemove', () => {
          cursor.classList.add('grow');
          if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
          }
        });
  
        link.addEventListener('mouseleave', () => {
          cursor.classList.remove('grow');
          cursor.classList.remove('grow-small');
        });
      });
    }, []);
  
    return <div className="cursor"></div>;
  };
  
  export default CursorComponent;
  