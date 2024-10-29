import { forwardRef } from "react";
import * as React from "react";
import { cn } from "@/lib/utils/cn";
import { Link } from "next-view-transitions";

interface ModelProps
  extends React.HTMLAttributes<HTMLDivElement> {
  name: string
}

const Model = forwardRef<HTMLDivElement, ModelProps>(
  ({ children, className, name, ...props }, ref) => {
    return (
      <Link
        className={cn(className, "w-60 h-32 bg-blue-200/75 rounded-sm relative flex items-end py-2 px-3")}
        href={`/de/${name}`}
      >
        <p className="text-sm font-semibold underline-offset-2">{name}</p>
      </Link>
    )
  }
)

export { Model }
