"use client"
import * as THREE from 'three'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, extend, useThree, useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls, Sky , Text, Stars} from '@react-three/drei'
import TextWithMouseFollow from './text'
import { Water } from 'three-stdlib'
extend({ Water })

function Ocean() {
  const ref = useRef()
  const gl = useThree((state) => state.gl)
  const waterNormals = useLoader(THREE.TextureLoader, '/waternormals.jpeg')
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping
  const geom = useMemo(() => new THREE.PlaneGeometry(10000, 10000), [])
  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: "pink",
      waterColor: "black",
      distortionScale: 3.7,
      fog: false,
      format: gl.encoding
    }),
    [waterNormals]
  )
  useFrame((state, delta) => (ref.current.material.uniforms.time.value += delta))
  return <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2}  />
}



export default function OceanCanvas() {
    
  return (
    <Canvas  style={{height:"100vh",width:"100vw"}} camera={{ position: [0, 5, 100], fov: 55, near: 1, far: 20000 }}>
      <pointLight color={"pink"} position={[100, 100, 100]} />
      <pointLight color={"blue"} position={[-100, -100, -100]} />
    <TextWithMouseFollow/>
      <Suspense fallback={null}>
        <Ocean />
      </Suspense>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      <Sky rayleigh={10.5} mieCoefficient={0.2} mieDirectionalG={0.16} azimuth={0.11} scale={1000} sunPosition={[500, 150, -1000]} turbidity={100} />
    </Canvas>
  )
}
