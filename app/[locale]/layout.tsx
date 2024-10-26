import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";

import "@/app/globals.css";
import { Metadata } from "next";
import Image from "next/image";

import { fonts } from "@/styles/fonts";
import { ViewTransitions } from 'next-view-transitions'

type AppLayoutProps = {
  params: {
    locale: string
  }
}

export const metadata: Metadata = {
  title: "muush",
  description: "Experience Live Cam.",
};

export default async function AppLayout(props: PropsWithChildren<AppLayoutProps>) {
  /**
   * kinda weird, but Next.js 15 RC Codemod did this
   */
  const params = await props.params;

  const {
    children,
  } = props;

  const locale = await params.locale;

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body
          className={`${fonts.interSans.className} antialiased dark`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}
