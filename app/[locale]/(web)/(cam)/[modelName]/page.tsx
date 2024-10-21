import { Suspense } from "react";

/*
import CamPlayerLoading from "./_components/player/loading";
import CamPlayerComponent from "./_components/player/component";

import CamChatComponent from "./_components/chat/component";
import CamChatLoading from "./_components/chat/loading";

import CamInfoLoading from "./_components/info/loading";
import CamInfoComponent from "./_components/info/component";
*/


/**
 * actually we could just use parallel routing here
 * https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
 */
export default function CamModelPage() {
  return (
    <div className="flex flex-col gap-5  vt-name-[container] w-full">
      <div className="flex flex-row gap-2 w-full h-full">
        {
          /*
            <Suspense fallback={<CamPlayerLoading />}>
              <CamPlayerComponent />
            </Suspense>
            */
        }
        {
          /*
            <Suspense fallback={<CamChatLoading />}>
              <CamChatComponent />
            </Suspense>
          */
        }
      </div>

      {
        /*
        <Suspense fallback={<CamInfoLoading />}>
          <CamInfoComponent />
        </Suspense>
        */
      }
    </div>
  );
}
