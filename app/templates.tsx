"use client";

import React, { useEffect } from "react";
import { animatePageIn } from "./utils/animate";

export default function Templates({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Foreground content with background */}
      <div className="relative z-0 min-h-screen bg-brand-black">
        {children}
      </div>

      {/* Transition stripes (sit above, animate out) */}
      <div className="absolute inset-0">
        <div className="template-section-1 fixed inset-0 z-40 bg-brand-black" />
        <div className="template-section-2 fixed inset-0 z-30 bg-brand-orange" />
        <div className="template-section-3 fixed inset-0 z-20 bg-brand-dark-gray" />
        <div className="template-section-4 fixed inset-0 z-10 bg-brand-light-gray" />
      </div>
    </div>
  );
}
