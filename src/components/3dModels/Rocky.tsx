// components/RockyModel.tsx
"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const RockyModelContent: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/assets/3dModels/Rockie.glb");
  const mixer = useRef<THREE.AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();
    }

    // Thoroughly log the structure of the GLTF model
    // console.log("GLTF Scene Structure (Detailed):", gltf.scene);

    // Traverse and find different types of objects
    gltf.scene.traverse((node: any) => {
      if (node.isMesh) {
        // console.log("Found a Mesh:", node);
      } else if (node.isGroup) {
        // console.log("Found a Group:", node);
      } else if (node.isSkinnedMesh) {
        // console.log("Found a SkinnedMesh:", node);
      } else {
        // console.log("Found an Object3D:", node);
      }
    });

    // Adjust the entire scene's Y position
    gltf.scene.position.y -= 10;
    // console.log("Adjusted Y Position:", gltf.scene.position.y);
  }, [gltf]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={gltf.scene} scale={100} />;
};

const RockyModel: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          position: [0, 20, 200],
          fov: 20,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 50, 50]} intensity={1.2} />

        <Suspense fallback={null}>
          <RockyModelContent />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RockyModel;
