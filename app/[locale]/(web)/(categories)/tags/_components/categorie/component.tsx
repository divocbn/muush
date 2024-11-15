import { Link } from "next-view-transitions";
import { forwardRef } from "react";

interface CategorieComponentProps {
  category: string;
  tags: string[];
}

const CategorieComponent = forwardRef<HTMLDivElement, CategorieComponentProps>(
  ({ category, tags, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-1/3">
        <p className="text-3xl font-semibold">{category}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link href={`/de/${tag}`}>{tag}</Link>
          ))}
        </div>

      </div>
    );
  }
)

export { CategorieComponent }

