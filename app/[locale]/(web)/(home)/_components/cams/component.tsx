import { checkUsername } from "@/lib/stripchat/users/check-username";
import { sleep } from "@/lib/utils/sleep";

import { Link } from 'next-view-transitions';
import Image from "next/image";
import { Model } from "./model";

export default async function HomeCamsComponent() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="font-semibold text-4xl tracking-tighter">Empfohlene neue Cams</p>
        <div className="flex flex-wrap gap-2 w-full">
          {/* <div className="w-64 h-36 bg-blue-200/75 rounded-md relative flex items-end py-2 px-3">
            <div className="flex flex-col tracking-tight">
              <Link className="text-sm font-semibold underline-offset-2" href="/de/erdal-goektas">ErdalGöktas</Link>
            </div>
          </div> */}
          <Model name="divancoban" />
        </div>
      </div>
    </div>
  );
}
