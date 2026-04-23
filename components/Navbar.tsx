"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const K = "'KoHo', sans-serif";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        height: "100px", backgroundColor: "var(--stone)",
        borderBottom: "1px solid rgba(26,25,24,0.1)",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", padding: "0 2.5rem",
      }}>
        <Link href="/home" className="fs-brand" style={{ fontFamily: K, fontWeight: 400, fontSize: "clamp(18px, 3vw, 32px)", color: "var(--ink)", textDecoration: "none" }}>
          AN ARC ABOVE
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "3rem" }} className="desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                fontFamily: K, fontWeight: 400, fontSize: "32px",
                color: "var(--ink)", textDecoration: "none",
                opacity: isActive ? 1 : 0.35,
                transition: "opacity 0.3s ease",
              }}>
                //{link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          style={{
            background: "none", border: "none", cursor: "pointer",
            padding: "8px", display: "none", flexDirection: "column",
            gap: "6px",
          }}
        >
          <span style={{ display: "block", width: "28px", height: "2px", backgroundColor: "var(--ink)" }} />
          <span style={{ display: "block", width: "28px", height: "2px", backgroundColor: "var(--ink)" }} />
          <span style={{ display: "block", width: "28px", height: "2px", backgroundColor: "var(--ink)" }} />
        </button>
      </header>

      {/* Mobile slide-in menu from right */}
      <div
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 100,
          width: "80vw", maxWidth: "360px",
          backgroundColor: "var(--stone)",
          borderLeft: "1px solid rgba(26,25,24,0.1)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s ease",
          display: "flex", flexDirection: "column",
          padding: "2rem",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            alignSelf: "flex-end", background: "none", border: "none",
            cursor: "pointer", fontFamily: K, fontSize: "28px",
            color: "var(--ink)", marginBottom: "3rem",
          }}
        >
          ✕
        </button>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="fs-nav"
                style={{
                  fontFamily: K, fontWeight: 400, fontSize: "32px",
                  color: "var(--ink)", textDecoration: "none",
                  opacity: isActive ? 1 : 0.35,
                }}
              >
                //{link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 99,
            backgroundColor: "rgba(26,25,24,0.3)",
          }}
        />
      )}
    </>
  );
}
