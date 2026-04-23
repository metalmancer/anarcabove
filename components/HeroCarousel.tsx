"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
  const [activeImage, setActiveImage] = useState("/img/hero_bg.png");

  return (
    <section className="relative w-full h-screen">
      <Image
        src={activeImage}
        alt="An Arc Above — Featured Project"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />

      {/* Vertical nav — left side */}
      <nav className="absolute left-10 flex flex-col gap-6 z-10" style={{ top: "33%" }}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontFamily: "'KoHo', sans-serif",
              fontWeight: 400,
              fontSize: "32px",
              color: "#000000",
              textDecoration: "none",
            }}
          >
            //{link.label}
          </Link>
        ))}
      </nav>

      {/* Bottom project tiles — right half, equal width, no wrap */}
      <div
        className="absolute bottom-0 right-0 z-10"
        style={{
          width: "60%",
          height: "22vh",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onMouseEnter={() => setActiveImage(project.image)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "0 1.25rem 1.75rem 1.25rem",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <div style={{
              width: "45%",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.7)",
              marginBottom: "0.75rem",
            }} />
            <span style={{
              fontFamily: "'KoHo', sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "0.35rem",
              display: "block",
            }}>
              {project.id}
            </span>
            <span style={{
              fontFamily: "'KoHo', sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              color: "#ffffff",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}>
              {project.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
