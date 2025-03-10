import TimelineControls from "@/components/workflow/timeline/TimelineControls";
import TimelineComponent from "./TimelineComponent";

export default function TimelinePage() {
  return (
    <main>
      <TimelineControls />

      <div className="w-screen">
        <div className="max-w-full text-xs font-medium">
          <TimelineComponent />
        </div>
      </div>
    </main>
  );
}