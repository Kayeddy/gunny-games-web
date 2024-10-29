// components/BoltyModel.tsx
"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer } from "three";

const BoltyModelContent: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/assets/3dModels/Bolty.glb");
  const mixer = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();

      // Log the names of all available animations
      gltf.animations.forEach((clip: any) => {
        // console.log("Animation name:", clip.name);
      });

      return () => {
        mixer.current?.stopAllAction();
      };
    }
  }, [gltf]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);
  });

  return <primitive object={gltf.scene} scale={60} />;
};

const BoltyModel: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          position: [0, 20, 40], // Keep the camera relatively close
          fov: 50, // Narrower field of view to keep the model looking large
          near: 0.1, // Near clipping plane
          far: 1000, // Far clipping plane
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 50, 50]} intensity={1.2} />

        <Suspense fallback={null}>
          <BoltyModelContent />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BoltyModel;
