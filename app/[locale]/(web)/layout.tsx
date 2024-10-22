import localFont from "next/font/local";
import { PropsWithChildren, Suspense } from "react";

import "@/app/globals.css";
import { Metadata } from "next";
import Image from "next/image";

import { fonts } from "@/styles/fonts";
import { ViewTransitions } from 'next-view-transitions'

type PublicRootLayoutProps = {
  login: React.ReactNode
  sidebar: React.ReactNode
}

export default async function PublicRootLayout(props: PropsWithChildren<PublicRootLayoutProps>) {
  const {
    children,
    sidebar,
    login
  } = props;

  return (
    <div className="min-h-screen flex flex-col p-8 tracking-[-0.0125em]">
      <div className="flex justify-between h-14">
        <Image
          src="/logo.png"
          width={141}
          height={0}
          className="relative h-fit"
          alt="Muush Cat Logo"
        />

        <div className="max-w-3xl flex items-center w-full h-12 rounded-xl bg-white/10 px-6">
          <p className="text-white/50 font-medium text-xs">Nach Modell suchen...</p>
        </div>
      </div>

      <div className="flex flex-row gap-16 py-8">
        {sidebar}
        {children}
      </div>
    </div>
  );
}
