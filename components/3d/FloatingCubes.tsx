'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        meshRef.current.rotation.x += 0.01 * speed;
        meshRef.current.rotation.y += 0.01 * speed;
        meshRef.current.position.y += Math.sin(state.clock.getElapsedTime() * speed) * 0.01;
    });

    return (
        <Box ref={meshRef} position={position} args={[1, 1, 1]}>
            <meshStandardMaterial color={color} opacity={0.8} transparent />
        </Box>
    );
}

export default function FloatingCubes() {
    return (
        <div className="h-[400px] w-full bg-gradient-to-br from-pink-50/50 to-blue-50/50 rounded-xl overflow-hidden">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <FloatingBox position={[-2, 0, 0]} color="#ec4899" speed={1} />
                <FloatingBox position={[2, 0, 0]} color="#3b82f6" speed={1.2} />
                <FloatingBox position={[0, 2, -2]} color="#8b5cf6" speed={0.8} />
                <FloatingBox position={[0, -2, -2]} color="#06b6d4" speed={1.5} />
            </Canvas>
        </div>
    );
}
