import { useEffect, useRef } from "react";

export const FlickerText = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = targetRef.current;

    if (!target) return;

    const flickerLetter = (letter: string, isBlue: boolean) => {
      const animationName = isBlue
        ? "text-flicker-in-glow-blue"
        : "text-flicker-in-glow";
      return `<span style="animation: ${animationName} ${
        Math.random() * 3
      }s linear both">${letter}</span>`;
    };

    const colorLetter = (letter: string, index: number, textLength: number) => {
      const isBlue = index >= textLength - 2; // Last two letters
      const className = isBlue ? "blue-glow" : "";
      return `<span class="${className}">${flickerLetter(
        letter,
        isBlue
      )}</span>`;
    };

    const flickerAndColorText = (text: string) =>
      text
        .split("")
        .map((letter, index) => colorLetter(letter, index, text.length))
        .join("");

    const neonGlory = (target: HTMLElement) => {
      target.innerHTML = flickerAndColorText(target.textContent || "");
    };

    neonGlory(target);
    target.onclick = () => neonGlory(target);
  }, []);

  return (
    <h1
      ref={targetRef}
      className="text-white font-clash text-[68px] sm:text-8xl md:text-9xl font-[650] text-center"
    >
      ODDS<span className="blue-glow">UP</span>
    </h1>
  );
};
