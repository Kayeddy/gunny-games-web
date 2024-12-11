// components/TailyModel.tsx
"use client";

import React, { useEffect, useRef, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer, Group, AnimationClip } from "three";
import { MeshoptDecoder } from "meshoptimizer";

interface GLTFResult {
  scene: Group;
  animations: AnimationClip[];
}

const TailyModelContent: React.FC = () => {
  const gltf = useLoader(GLTFLoader, "/assets/3dModels/Taily.glb", (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  }) as unknown as GLTFResult; // Cast to GLTFResult

  const mixer = useRef<AnimationMixer | null>(null);

  useEffect(() => {
    if (gltf.animations.length) {
      mixer.current = new AnimationMixer(gltf.scene);
      const action = mixer.current.clipAction(gltf.animations[0]);
      action.play();

      // Log the names of all available animations
      gltf.animations.forEach((clip) => {
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

const TailyModel: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{
          position: [0, 20, 40],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 50, 50]} intensity={1.2} />

        <Suspense fallback={null}>
          <TailyModelContent />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TailyModel;
