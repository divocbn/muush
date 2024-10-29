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
    <div className="min-h-screen flex flex-col p-8 tracking-[-0.0125em] bg-black/80">
      <div
        className="absolute inset-0 -z-10 bg-[35%_top] bg-no-repeat sm:bg-[38%_top] md:bg-[40%_top] lg:bg-[44%_top] xl:bg-top forced-colors:hidden"
        style={{
          backgroundImage: "url('/media/bg-top.jpg')"
        }}
      />

      <div
        className="absolute inset-0 -z-10 bg-top opacity-10 forced-colors:hidden"
        style={{
          backgroundImage: "url('/media/bg-noise.png')"
        }}
      />

      <div className="flex justify-between h-14">
        <Image
          src="/logo.png"
          width={141}
          height={0}
          className="relative h-fit"
          alt="Muush Cat Logo"
        />

        <div className="max-w-3xl flex items-center w-full h-12 rounded-xl bg-white/10 cursor-pointer border-white/5 border hover:border-white/10 group transition-all px-6 backdrop-blur-sm">
          <p className="group-hover:text-white/60 text-white/50 transition-colors font-medium text-xs">Nach Modell suchen...</p>
        </div>
      </div>

      <div className="flex flex-row gap-16 py-8 z-40 min-h-[calc(100vh_-_120px)]">
        {sidebar}
        {login}
        {children}
      </div>
    </div>
  );
}
