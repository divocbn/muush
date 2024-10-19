import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";

import "@/app/globals.css";
import { Metadata } from "next";
import Image from "next/image";

import { fonts } from "@/styles/fonts";
import { ViewTransitions } from 'next-view-transitions'

type PublicRootLayoutProps = {
  params: {
    locale: string
  }

  sidebar: React.ReactNode
}

export const metadata: Metadata = {
  title: "muush",
  description: "Experience Live Cam.",
};

export default async function PublicRootLayout(props: PropsWithChildren<PublicRootLayoutProps>) {
  /**
   * kinda weird, but Next.js 15 RC Codemod did this
   */
  const params = await props.params;

  const {
    children,
    sidebar
  } = props;

  const locale = await params.locale;

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body
          className={`${fonts.geistSans.variable} ${fonts.geistMono.variable} antialiased`}
        >
          <div className="min-h-screen flex flex-col p-8 tracking-[-0.0125em]">
            <div className="flex justify-between h-14">
              <Image
                src="/logo.png"
                width={141}
                height={0}
                className="relative h-fit"
                alt="Muush Cat Logo"
              />
            </div>

            <div className="flex flex-row gap-16 py-8">
              {sidebar}
              {children}
            </div>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
