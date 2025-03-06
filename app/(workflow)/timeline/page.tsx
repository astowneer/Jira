import Search from "@/components/workflow/Search";
import Image from "next/image";
import UserTooltip from "../../../components/workflow/UserTooltip";
import { cn } from "@/lib/utils";
import ActionTooltip from "../../../components/workflow/ActionTooltip";
import TimelineControls from "../../../components/workflow/TimelineControls";

export default function Timeline() {
  return (
    <div className="py-5">
      <TimelineControls />
    </div>
  )
}