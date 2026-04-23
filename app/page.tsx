"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LandingPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleEnter = () => {
    router.push("/home");
  };

  return (
    <main
      className="flex items-center justify-center w-screen h-screen cursor-pointer"
      style={{ backgroundColor: "var(--stone)" }}
      onClick={handleEnter}
    >
      <div
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        <Image
          src="/img/AAA-logo.png"
          alt="An Arc Above — Architecture + Design"
          width={250}
          height={373}
          priority
        />
      </div>
    </main>
  );
}
