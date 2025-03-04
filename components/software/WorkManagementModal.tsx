"use client";

import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

const WorkManagementModal = ({ 
  title, 
  subtitle, 
  description, 
  posibilities, 
  imageMainUrl 
}: WorkManagementModalProps) => {
  const router = useRouter();

  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-black/80 w-full h-full z-50 flex justify-center overflow-y-scroll p-5 items-center">
      <div className="max-w-3xl w-full rounded-xl bg-white flex flex-col px-6 py-4">
        <button 
          className="w-fit self-end" 
          onClick={() => router.back()}
        >
          <XMarkIcon 
            width={24} 
            height={24} 
            className="text-gray-500 cursor-pointer"
          />
        </button>

        <h3 className="uppercase text-xs  lg:text-sm">{title}</h3>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold py-1 lg:py-2">{subtitle}</h4>
        <p className="text-sm lg:text-md">{description}</p>

        <ul className="flex flex-col gap-2 pt-2 pb-2 lg:pb-5 text-xs lg:text-sm">
          {posibilities.map((possibility) => (
            <li key={possibility.title} className="inline-flex items-center gap-2">
              <Image 
                src={possibility.icon}
                width={20}
                height={20}
                alt="icon"
              />
              {possibility.title}
            </li>
          ))}
        </ul>
        
        <button className="bg-blue-500 hover:bg-blue-700 w-fit px-5 py-2 rounded-3xl text-white font-bold mb-5">
          Get it free
        </button>

        <div className="w-full flex justify-center">
          <Image
            src={imageMainUrl}
            width={903}
            height={1449}
            alt="work management 1"
            className="hidden lg:block lg:max-w-[293px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkManagementModal;