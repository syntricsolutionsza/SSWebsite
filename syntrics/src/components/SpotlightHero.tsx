import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { PageType } from '../types';

interface SpotlightHeroProps {
  onNavigate: (page: PageType) => void;
  key?: string;
}

export default function SpotlightHero({ onNavigate }: SpotlightHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const revealImgRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const headlineText = "We build compelling digital stories, high-performance Android applications & websites.";
  const words = headlineText.split(' ');

  useEffect(() => {
    const canvas = canvasRef.current;
    const revealImg = revealImgRef.current;
    if (!canvas || !revealImg) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const SPOTLIGHT_R = 260;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const smooth = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const loop = () => {
      // Smooth interpolation
      smooth.x += (mouse.x - smooth.x) * 0.12;
      smooth.y += (mouse.y - smooth.y) * 0.12;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const grad = ctx.createRadialGradient(smooth.x, smooth.y, 0, smooth.x, smooth.y, SPOTLIGHT_R);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.4, 'rgba(255,255,255,1)');
      grad.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      grad.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');

      ctx.beginPath();
      ctx.arc(smooth.x, smooth.y, SPOTLIGHT_R, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      try {
        const dataUrl = canvas.toDataURL();
        revealImg.style.webkitMaskImage = `url(${dataUrl})`;
        revealImg.style.maskImage = `url(${dataUrl})`;
        revealImg.style.webkitMaskSize = '100% 100%';
        revealImg.style.maskSize = '100% 100%';
      } catch (err) {
        // Fallback if toDataURL fails in highly sandboxed canvas contexts
        revealImg.style.opacity = '1';
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="hero-creative-showcase" ref={containerRef} id="creative-showcase-landing">
      {/* Big background layout label */}
      <div className="hero-big-text-container creator-text-animate-wrapper">
        <h2>Syntrics</h2>
      </div>

      {/* Base monochrome design layout layer */}
      <div
        className="hero-base-img-layer"
        style={{
          backgroundImage: "url('https://soft-zoom-63098134.figma.site/_assets/v11/5c9f982199fde1d9b85a20e5396f0fa7bacaf9a3.png?w=2560')"
        }}
        id="spotlight-base-img"
      />

      {/* Canvas spotlight drawing element */}
      <canvas id="reveal-canvas-element" ref={canvasRef} />

      {/* Masked reveal visual accent layer */}
      <div
        className="hero-reveal-img-layer"
        ref={revealImgRef}
        style={{
          backgroundImage: "url('https://soft-zoom-63098134.figma.site/_assets/v11/6be2165e31648955b4e071f4cf2a50bc572b9bfd.png?w=1536')"
        }}
        id="spotlight-reveal-img"
      />

      {/* Interactive text and CTAs overlay */}
      <div className="hero-content-showcase" id="spotlight-content-overlay">
        <div className="hero-content-inner-showcase">
          {/* Animated word reveal headline */}
          <h1 className="hero-headline-showcase" id="spotlight-headline">
            {words.map((word, i) => (
              <span
                key={i}
                className="word-reveal-span"
                style={{ animationDelay: `${1 + i * 0.05}s` }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Premium customized CTA triggers */}
          <div className="cta-animate-wrapper" id="spotlight-ctas-row">
            <button
              className="showcase-cta-btn"
              onClick={() => onNavigate('services')}
              id="showcase-cta-trigger"
            >
              <span className="showcase-cta-btn-bg"></span>
              <span className="showcase-cta-btn-text">Start your project now</span>
              <span className="showcase-cta-btn-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 13L13 5M13 5H6M13 5V12"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
