"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const K = "'KoHo', sans-serif";

const navLinks = [
  { label: "Home", href: "/home" },
  { label: "About us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      height: "100px", backgroundColor: "var(--stone)",
      borderBottom: "1px solid rgba(26,25,24,0.1)",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", padding: "0 2.5rem",
    }}>
      <Link href="/home" style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", textDecoration: "none" }}>
        AN ARC ABOVE
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
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
    </header>
  );
}
