"use client";

import { useState } from "react";

const K = "'KoHo', sans-serif";

const categories = [
  { label: "Architecture", image: "/img/home_work.png" },
  { label: "Residential", image: "/img/home_work.png" },
  { label: "Commercial", image: "/img/home_work.png" },
  { label: "Ongoing", image: "/img/home_work.png" },
];

export default function WorkSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ borderTop: "1px solid rgba(26,25,24,0.1)", display: "flex", alignItems: "flex-start", padding: "4rem 0" }}>

      {/* Left — label + indented categories */}
      <div style={{ width: "320px", flexShrink: 0, padding: "0 2.5rem" }}>
        <span style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", display: "block", marginBottom: "1.5rem" }}>
          //The Work
        </span>
        <nav style={{ display: "flex", flexDirection: "column", gap: "1.5rem", paddingLeft: "1.5rem" }}>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              style={{
                fontFamily: K,
                fontWeight: 400,
                fontSize: "32px",
                color: "var(--ink)",
                opacity: active === i ? 1 : 0.3,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textAlign: "left",
                transition: "opacity 0.3s ease",
              }}
            >
              | {cat.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right — image */}
      <div style={{ flex: 1, padding: "0 2.5rem 0 2rem" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={categories[active].image}
          alt={categories[active].label}
          style={{ display: "block", width: "100%", height: "45vh", objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </section>
  );
}
