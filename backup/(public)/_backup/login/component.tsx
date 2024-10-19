"use client"

type PublicLoginComponentProps = {
  renderedAsModal?: boolean
}

export default function PublicLoginComponent({ renderedAsModal = false }: PublicLoginComponentProps) {
  return (
    <div className="bg-white/10">Modal</div>
  );
}
