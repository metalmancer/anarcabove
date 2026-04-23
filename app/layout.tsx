import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "An Arc Above — Architecture + Design",
  description:
    "An Arc Above is a design consultancy with expertise in Architectural & Interior design, creating contextually relevant, authentic and timeless spaces.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
