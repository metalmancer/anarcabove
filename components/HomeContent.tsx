import Link from "next/link";
import WorkSection from "@/components/WorkSection";
import Footer from "@/components/Footer";
import Image from "next/image";

const K = "'KoHo', sans-serif";

const logos = [
  { src: "/img/clients/logo_22_constanza.png", alt: "22 Constanza" },
  { src: "/img/clients/logo_ambur.png", alt: "Ambur Canteen" },
  { src: "/img/clients/logo_cream_centre.png", alt: "Cream Centre" },
  { src: "/img/clients/logo_double_roti.png", alt: "Double Roti" },
  { src: "/img/clients/logo_hot_breads.png", alt: "Hot Breads" },
  { src: "/img/clients/logo_kappa_chakka.png", alt: "Kappa Chakka Kandhari" },
  { src: "/img/clients/logo_little_soi.png", alt: "Little SOI" },
  { src: "/img/clients/logo_roll_baby_roll.png", alt: "Roll Baby Roll" },
  { src: "/img/clients/logo_savya_rasa.png", alt: "Savya Rasa" },
  { src: "/img/clients/logo_sweet_spot.png", alt: "Sweet Spot" },
  { src: "/img/clients/logo_the_bark.png", alt: "The Bark" },
  { src: "/img/clients/logo_the_marina.png", alt: "The Marina" },
];

export default function HomeContent() {
  return (
    <>
      {/* The Studio */}
      <section style={{ padding: "4rem 2.5rem", borderTop: "1px solid rgba(26,25,24,0.1)" }}>
        <span style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", display: "block", marginBottom: "2rem" }}>
          //The Studio
        </span>
        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "1.5rem" }}>
          We create emotionally transcendent experiences, however subliminal,
          allowing the energy of the spaces to shift and evolve timelessly.
        </p>
        <Link href="/about" style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", color: "var(--ink)", display: "inline-block", marginBottom: "3rem", textDecoration: "underline" }}>
          Read More
        </Link>

        <div className="relative w-full" style={{ height: "44vh" }}>
          <Image src="/img/studio_feature.png" alt="The Studio" fill style={{ objectFit: "cover", objectPosition: "center" }} />
        </div>

        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", marginTop: "3rem" }}>
          At An Arc Above, we strongly believe that design can be utilitarian
          and aesthetic at the same time and we strive to achieve this
          linearity across all facets of our projects — whether its
          residential, commercial or hospitality spaces.
        </p>
      </section>

      {/* The Work */}
      <WorkSection />

      {/* Select Client */}
      <section style={{ padding: "4rem 2.5rem", borderTop: "1px solid rgba(26,25,24,0.1)" }}>
        <span style={{ fontFamily: K, fontWeight: 400, fontSize: "32px", color: "var(--ink)", display: "block", marginBottom: "2rem" }}>
          //Select Client
        </span>
        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)", marginBottom: "3rem" }}>
          Over the last 7 years, we have had the honour of working with 35+
          reputed hospitality brands across the country.
        </p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[0, 1].flatMap((pass) =>
              logos.map((logo) => (
                <div key={`${pass}-${logo.alt}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 3rem", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={logo.src} alt={logo.alt} style={{ maxHeight: "60px", maxWidth: "140px", objectFit: "contain", opacity: 0.75 }} />
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: "4rem 2.5rem", borderTop: "1px solid rgba(26,25,24,0.1)" }}>
        <p style={{ fontFamily: K, fontWeight: 400, fontSize: "28px", lineHeight: 1.7, color: "var(--ink)" }}>
          "Empathy is at the heart of design. Without the understanding of what
          others see, feel, and experience, design is a pointless task." — IDEO
        </p>
      </section>

      <Footer />
    </>
  );
}
