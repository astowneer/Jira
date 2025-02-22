import Image from "next/image";
import Link from "next/link";

const WorkManagementCard = ({ title, subtitle, imageUrl }: WorkManagementCard) => {
  return (
    <Link 
      href="/work-management/1" 
      className="w-[245px]"
    >
      <div className="pl-8 pt-8 bg-white w-[245px] h-[400px] overflow-hidden rounded-3xl shadow-xl border-[1px] border-white/20">
        <div className="flex flex-col space-y-2 w-full h-[100px]">
          <h3 className="uppercase text-xs">{title}</h3>
          <h4 className="text-2xl max-w-[180px] pb-5 pr-5 font-bold leading-6 hyphens-auto">{subtitle}</h4>
        </div>

        <div className="w-full h-full">
          <Image
            src={imageUrl}
            width={903}
            height={1449}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

export default WorkManagementCard;