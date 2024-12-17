"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

export default function RenderModel({ children, className }) {
  return (
    <Canvas className={clsx(className, "w-screen h-screen relative")}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
}
