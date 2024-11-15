import { Model } from "./model";
import { getModels } from "@/lib/stripchat/models/models";

export default async function HomeCamsComponent() {
  const models = await getModels("10", "10", "10", "girls");

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        {/* <p className="font-semibold text-4xl tracking-tight">Empfohlene neue Cams</p> */}
        <div className="flex flex-wrap gap-6 overflow-y-scroll max-h-[80vh] scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">

          {models.blocks.map((block) => (
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-2xl tracking-tight">{block.id}</p>
              <div className="flex flex-wrap gap-3">
                {block.models.map((model) => (
                  <Model key={model.username} name={model.username} />
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
