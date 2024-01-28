"use client";
import Sparkles from "@/components/ui/Sparkles";
import { cn } from "@/utils/cn";
import React from "react";

export function BgSparkles({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        className,
        "max-h-full relative w-full bg-black flex  items-center justify-center overflow-hidden rounded-md"
      )}
    >
      <div className="w-full absolute inset-0 min-h-screen">
        <Sparkles
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {children}
    </div>
  );
}
