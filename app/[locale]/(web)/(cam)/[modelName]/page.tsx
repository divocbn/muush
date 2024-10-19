import { Suspense } from "react";
import CamPlayerLoading from "./_components/player/loading";
import CamPlayerComponent from "./_components/player/component";

export default function CamModelPage() {
  return (
    <Suspense fallback={<CamPlayerLoading />}>
      <CamPlayerComponent />
    </Suspense>
  );
}
