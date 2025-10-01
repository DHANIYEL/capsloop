"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import NavBar from "./components/NavBar";

gsap.registerPlugin(SplitText);

export default function Page() {
  useGSAP(() => {
    const splitTitle = new SplitText(".title", { type: "chars" });
    gsap.set(splitTitle.chars, { yPercent: 100, opacity: 0 });
    gsap.to(splitTitle.chars, {
      yPercent: -100,
      duration: 0.5,
      opacity: 1,
      delay: 3,
      ease: "power2.out",
      stagger: 0.05,
    });
  }, []);

  return (
    <div className="flex h-[200vh] items-center justify-center">
      <NavBar />
      {/* <img src="https://unblast.com/wp-content/uploads/2018/08/Gradient-Mesh-30-1600x1200.jpg
" alt="" /> */}
      <h1 className="title text-4xl  z-0 text-brand-orange">CAPS LOOP</h1>
    </div>
  );
}
// https://untold.site/en