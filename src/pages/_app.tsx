import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

const title = "HandleOne Social Handle Checker";
const description = "Discover if your social media handler is up for grabs";

export const metadata: Metadata = {
  metadataBase: new URL("https://handleone.social"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
