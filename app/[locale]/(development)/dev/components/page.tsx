import { Button } from "@/components/ui/button";

export default function DevComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col gap-2 p-8">
      <h1 className="text-4xl font-semibold tracking-tight">Components</h1>

      <div className="flex flex-row flex-wrap gap-4 py-4">
        <Button>Test button</Button>
        <Button>Button</Button>
      </div>
    </div>
  );
}
