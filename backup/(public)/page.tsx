import { Suspense } from "react";

import Image from "next/image";
import PublicCamsLoading from "./(cams)/loading";
import PublicCamsComponent from "./(cams)/component";

export default function Page() {
  return (
    <>
    <p>s</p>
    <Suspense fallback={<PublicCamsLoading />}>
      <PublicCamsComponent />
    </Suspense>
    </>
  );
}
