'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
    const pointsRef = useRef<THREE.Points>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.1;
        pointsRef.current.rotation.x = t * 0.05;
    });

    return (
        <points ref={pointsRef} scale={2}>
            <sphereGeometry args={[1, 64, 64]} />
            <pointsMaterial
                color="#3b82f6"
                size={0.02}
                sizeAttenuation={true}
                transparent={true}
                opacity={0.8}
            />
        </points>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 h-full w-full opacity-50">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
