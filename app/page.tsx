"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function Page() {
  useGSAP(() => {
    const splitTitle = new SplitText(".title", { type: "chars" });

    gsap.to(splitTitle.chars, {
      yPercent: -100,
      duration: 0.5,
      opacity: 1,
      delay: 3,
      ease: "power2.out",
      stagger: 0.05, // animate each char one by one
    });
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="title text-4xl text-brand-orange opacity-0">CAPS LOOP</h1>
    </div>
  );
}
