import Image from "next/image";
import OverviewStatus from "../../../components/workflow/overview/OverviewStatus";
import OverviewBlock from "../../../components/workflow/overview/OverviewBlock";
import OverviewActivity from "../../../components/workflow/overview/OverviewActivity";
import OverviewPriority from "../../../components/workflow/overview/OverviewPriority";
import OverviewTypeOfWork from "../../../components/workflow/overview/OverviewTypeOfWork";
import OverviewTeamWorkload from "../../../components/workflow/overview/OverviewTeamWorkload";
import OverviewEpicProgres from "../../../components/workflow/overview/OverviewEpicProgres";
import { projectsInfo } from "@/constants/constants";

export default function Projects() {
  return (
    <article className="flex flex-col space-y-5 py-5">
      <header className="grid grid-cols-4 gap-6 max-lg:grid-cols-1 max-xl:grid-cols-2">
        {projectsInfo.map((item) => 
          <OverviewBlock key={item.title} item={item} />
        )}
      </header>

      <section className="w-full grid grid-cols-2 max-xl:grid-cols-1 gap-6">
        <OverviewStatus />
        <OverviewActivity />
        <OverviewPriority />
        <OverviewTypeOfWork />
        <OverviewTeamWorkload />
        <OverviewEpicProgres />
      </section>

      <footer className="flex justify-center items-center flex-row max-md:flex-col gap-1 p-3 text-xs">
        <p className="">Was the information shown in this page useful?</p>
        <p className="hover:bg-gray-200 p-2 font-medium rounded-md inline-flex gap-2">
          <Image src='/svg/message.svg' width={14} height={14} alt='email us'/>
          Give us feedback
        </p>
      </footer>
    </article>
  );
}