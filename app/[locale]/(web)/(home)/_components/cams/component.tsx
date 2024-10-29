import { checkUsername } from "@/lib/stripchat/users/check-username";
import { sleep } from "@/lib/utils/sleep";

import { Link } from 'next-view-transitions';
import Image from "next/image";
import { Model } from "./model";

export default async function HomeCamsComponent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-4xl tracking-tight">Empfohlene neue Cams</p>
        <div className="flex flex-col gap-3">
          <Link
            href="/de/erdal-goektas"
            className="w-60 h-32 p-2 flex items-end bg-blue-200/75 rounded-sm relative">
            { /*
              <Image
              className="rounded-sm"
              src=""
              alt="Cam Model Preview"
              fill
            /> */}
            <p className="text-xs font-medium hover:underline underline-offset-2 drop-shadow-[0_1px_1px_rgb(0_0_0_/_0.15)]">
              ErdalGöktas
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
