import { getTags } from "@/lib/stripchat/tags/get-tags";
import { CategorieComponent } from "./_components/categorie/component";

export default async function TagsPage() {
  const tags = await getTags();

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {tags.tagCategories.map((category) => (
          <CategorieComponent
            key={category.category}
            category={category.category}
            tags={category.tags} />
        ))}
      </div>
    </div>
  );
}
