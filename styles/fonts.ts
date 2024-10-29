import localFont from "next/font/local";

const geistSans = localFont({
  src: "./geist.woff",
  variable: "--font-geist-sans",
  weight: "100 500 900",
});

const geistMono = localFont({
  src: "./geist-mono.woff",
  variable: "--font-geist-mono",
  weight: "100 500 900",
});

const interSans = localFont({
  src: "./inter.woff2",
  variable: "--font-inter",
  weight: "100 500 900",
});

export const fonts = {
  geistSans,
  geistMono,

  interSans
}
