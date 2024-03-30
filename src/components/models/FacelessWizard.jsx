'use client'

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function FacelessWizard(props) {
    const { nodes, materials } = useGLTF('/models/wizard.glb')
    const modelRef = useRef(null);

    useFrame((state) => {
        modelRef.current.position.y =
          -1.5 + Math.sin(state.clock.elapsedTime) * 0.15;
      });

    return (
        <group
            {...props}
            dispose={null}
            ref={modelRef}
            position={[0, -3, 0.00002]}
            scale={[0.02, 0.02, 0.07]}
            rotation={[0.25, 0, 0]}

        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials.lambert4}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_1.geometry}
                        material={materials.lambert7}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_2.geometry}
                        material={materials.lambert2}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_3.geometry}
                        material={materials.lambert5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_4.geometry}
                        material={materials.lambert3}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_5.geometry}
                        material={materials.lambert6}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/wizard.glb')
