import Image from "next/image";
import { workManagements } from "@/constants/constants";

export default async function WorkManagement({ 
  params
}: {
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const { 
    title, 
    subtitle,
    description,
    imageMainUrl
  } = workManagements[Number(id)];

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-5xl w-full py-8 flex flex-col space-y-5 px-5">
        <div>
          <h2 className="text-xl">{title}</h2>
          <h3 className="text-5xl font-bold">{subtitle}</h3>
        </div>
       
        <p className="text-xl">{description}</p>
        
        <Image
          src={imageMainUrl}
          width={903}
          height={1449}
          alt="work management 1"
          className="max-w-md lg:max-w-xl h-auto"
        />
      </div>
    </section>
  )
}
