"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const K = "'KoHo', sans-serif";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const projects = [
  { id: "01", name: "22 CONSTANZA", image: "/img/projects/proj_22_constanza.jpg" },
  { id: "02", name: "LITTLE SOI", image: "/img/projects/proj_little_soi.jpg" },
  { id: "03", name: "THE AMBUR CANTEEN", image: "/img/projects/proj_ambur.jpg" },
  { id: "04", name: "CREAM CENTER", image: "/img/projects/proj_cream_centre_ra_puram.jpg" },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) setActiveIndex((prev) => (prev + 1) % projects.length);
    if (diff < -50) setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    touchStartX.current = null;
  };

  return (
    <section className="relative w-full h-screen">
      <Image
        src={projects[activeIndex].image}
        alt="An Arc Above — Featured Project"
        fill
        style={{ objectFit: "cover", objectPosition: "center", transition: "opacity 0.5s ease" }}
        priority
      />

      {/* Vertical nav — desktop only */}
      <nav className="desktop-nav absolute left-10 flex-col gap-6 z-10" style={{ top: "33%", display: "none" }}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} style={{
            fontFamily: K, fontWeight: 400, fontSize: "32px",
            color: "#000000", textDecoration: "none",
          }}>
            //{link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop tiles */}
      <div
        className="desktop-nav absolute bottom-0 right-0 z-10"
        style={{ width: "60%", height: "22vh", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}
      >
        {projects.map((project, i) => (
          <button
            key={project.id}
            onClick={() => setActiveIndex(i)}
            style={{
              display: "flex", flexDirection: "column", justifyContent: "flex-end",
              padding: "0 1.25rem 1.75rem 1.25rem",
              backgroundColor: "transparent", border: "none",
              cursor: "pointer", textAlign: "left",
            }}
          >
            <div style={{ width: "45%", height: "1px", backgroundColor: activeIndex === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.4)", marginBottom: "0.75rem", transition: "background-color 0.3s ease" }} />
            <span style={{ fontFamily: K, fontWeight: 400, fontSize: "20px", color: "rgba(255,255,255,0.75)", marginBottom: "0.35rem", display: "block" }}>
              {project.id}
            </span>
            <span style={{ fontFamily: K, fontWeight: 600, fontSize: "20px", color: "#ffffff", textTransform: "uppercase", whiteSpace: "nowrap" }}>
              {project.name}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile swipeable tile */}
      <div
        className="mobile-hero-tile"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          zIndex: 10, padding: "1.5rem",
          display: "none",
        }}
      >
        <div style={{ width: "30%", height: "1px", backgroundColor: "rgba(255,255,255,0.7)", marginBottom: "0.75rem" }} />
        <span style={{ fontFamily: K, fontWeight: 400, fontSize: "16px", color: "rgba(255,255,255,0.75)", display: "block", marginBottom: "0.25rem" }}>
          {projects[activeIndex].id}
        </span>
        <span style={{ fontFamily: K, fontWeight: 600, fontSize: "18px", color: "#ffffff", textTransform: "uppercase", display: "block", marginBottom: "1.5rem" }}>
          {projects[activeIndex].name}
        </span>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {projects.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                width: i === activeIndex ? "24px" : "8px",
                height: "2px",
                backgroundColor: i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
          <span style={{ fontFamily: K, fontWeight: 400, fontSize: "12px", color: "rgba(255,255,255,0.5)", marginLeft: "8px" }}>
            swipe
          </span>
        </div>
      </div>
    </section>
  );
}
