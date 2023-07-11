import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

function TextWithMouseFollow() {
    const textRef = useRef();

    useFrame(({ mouse }) => {
      const { x, y } = mouse;
      textRef.current.position.x = x*-3;
      textRef.current.position.y = y*-3;
    }); 

  return (
    <Text
    ref={textRef}
    position={[10, 50, 10]}
    color="black"
    fontSize={50}
    anchorX="center"
    anchorY="middle"
  >
    KISU
  </Text>
  );
}

export default TextWithMouseFollow;
