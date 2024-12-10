import React, { useEffect, useRef } from "react";

interface Pixel {
  x: number;
  y: number;
  r: number;
}

interface PageTransitionIntermediaryProps {
  onComplete?: () => void;
  text?: string;
  color?: string;
}

const PageTransitionIntermediary: React.FC<PageTransitionIntermediaryProps> = ({
  onComplete,
  text = "VANISH",
  color = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;

  const startAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.font = "100px Arial";
    ctx.fillStyle = color;
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (canvasWidth - textWidth) / 2, canvasHeight / 2);

    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const pixels: Pixel[] = [];
    for (let i = 0; i < imageData.data.length; i += 4) {
      const alpha = imageData.data[i + 3];
      if (alpha > 0) {
        const x = (i / 4) % canvasWidth;
        const y = Math.floor(i / 4 / canvasWidth);
        pixels.push({ x, y, r: 1 });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      pixels.forEach((pixel) => {
        pixel.x += (Math.random() - 0.5) * 2;
        pixel.y += (Math.random() - 0.5) * 2;
        pixel.r -= 0.02;
        if (pixel.r > 0) {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(pixel.x, pixel.y, pixel.r, 0, Math.PI * 2);
          ctx.fill();
        }
      });
      if (pixels.some((pixel) => pixel.r > 0)) {
        requestAnimationFrame(animate);
      } else {
        if (onComplete) onComplete();
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }}
    />
  );
};

export default PageTransitionIntermediary;
