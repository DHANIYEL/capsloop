import LiquidGlass from "liquid-glass-react";
import React, { useRef, useState } from "react";

const NavBar = () => {
  const [scroll, setScroll] = useState(0);

  const [logoutDisplacementScale, setLogoutDisplacementScale] = useState(64);
  const [logoutBlurAmount, setLogoutBlurAmount] = useState(0.1);
  const [logoutSaturation, setLogoutSaturation] = useState(130);
  const [logoutAberrationIntensity, setLogoutAberrationIntensity] = useState(1);
  const [logoutElasticity, setLogoutElasticity] = useState(0.35);
  const [logoutCornerRadius, setLogoutCornerRadius] = useState(50);
  const [logoutOverLight, setLogoutOverLight] = useState(false);
  const scrollingOverBrightSection = scroll > 230 && scroll < 500;
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <LiquidGlass
        displacementScale={logoutDisplacementScale}
        blurAmount={logoutBlurAmount}
        saturation={logoutSaturation}
        aberrationIntensity={logoutAberrationIntensity}
        elasticity={logoutElasticity}
        cornerRadius={logoutCornerRadius}
        mouseContainer={containerRef}
        overLight={scrollingOverBrightSection || logoutOverLight}
        padding="16px 32px"
        style={{
          position: "fixed",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="flex items-center gap-6">
          <button
            onClick={() => console.log("Navigate to Home")}
            className="text-sm font-medium hover:opacity-70 transition-opacity duration-200 whitespace-nowrap px-2 text-white"
          >
            Home
          </button>
          <button
            onClick={() => console.log("Navigate to About")}
            className="text-sm font-medium hover:opacity-70 transition-opacity duration-200 whitespace-nowrap px-2"
          >
            About
          </button>
          <button
            onClick={() => console.log("Navigate to Projects")}
            className="text-sm font-medium hover:opacity-70 transition-opacity duration-200 whitespace-nowrap px-2"
          >
            Projects
          </button>
          <button
            onClick={() => console.log("Navigate to Contact")}
            className="text-sm font-medium hover:opacity-70 transition-opacity duration-200 whitespace-nowrap px-2"
          >
            Contact
          </button>
        </div>
      </LiquidGlass>
    </div>
  );
};

export default NavBar;