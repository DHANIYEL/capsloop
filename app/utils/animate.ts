import gsap from "gsap";

export const animatePageIn = () => {
  const sections = [
    ".template-section-1",
    ".template-section-2",
    ".template-section-3",
    ".template-section-4",
  ];

  const tl = gsap.timeline();

  tl.set(sections, { yPercent: -100 });

  tl.to(sections, {
    yPercent: 0,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.out",
  })

  .to(sections, {
    yPercent: 100,
    stagger: 0.2,
    duration: 0.6,
    ease: "power2.in",
  }, "-=0.5");
};
