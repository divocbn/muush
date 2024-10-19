import { Suspense } from "react";

import HomeCamsLoading from "./_components/cams/loading";
import HomeCamsComponent from "./_components/cams/component";

export default function Page() {
  return (
    <Suspense fallback={<HomeCamsLoading />}>
      <HomeCamsComponent />
    </Suspense>
  );
}
