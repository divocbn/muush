import { PropsWithChildren } from "react";

type PublicLayoutProps = {
  modal: React.ReactNode
}

export default function PublicLayout({ children, modal }: PropsWithChildren<PublicLayoutProps>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
