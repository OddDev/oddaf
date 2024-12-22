import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const bpreplaySans = localFont({
  src: [
    {
      path: '../../public/fonts/BPreplay/BPreplay.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/BPreplay/BPreplayBold.otf',
      weight: '700',
      style: 'normal'
    }
  ]
})

export const metadata: Metadata = {
  title: "Building Teams. With Heart.",
  description: "Odd portfolio website of Kai Klostermann",
  // TODO add more metadata (especially icons and stuff) - compare also with old version of oddaf
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bpreplaySans.className}>
        {children}
      </body>
    </html>
  );
}
