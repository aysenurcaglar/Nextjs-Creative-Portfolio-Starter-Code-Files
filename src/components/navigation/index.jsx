"use client";
import { BtnList } from "@/app/data";
import React from "react";

export default function Navigation() {
  const angleIncrement = 360 / BtnList.length;

  return (
    <div className="fixed flex w-full h-screen items-center justify-center">
      <div className="w-max flex items-center justify-between relative">
        {BtnList.map((btn, index) => {
          const angleRad = angleIncrement * index * (Math.PI / 180);
          const radius = "calc(20vw - 1rem)";
          const x = `calc(${radius} * ${Math.cos(angleRad)})`;
          const y = `calc(${radius} * ${Math.sin(angleRad)})`;

          console.log(angleRad, radius, x, y);

          return (
            <button
              key={index}
              style={{ transform: `translate(${x}, ${y})` }}
              className="absolute"
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
