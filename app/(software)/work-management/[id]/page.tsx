import Image from "next/image";
import { workManagements } from "@/constants/constants";

export default async function WorkManagement({ 
  params
}: {
  params: Promise<{ id: string }> 
}) {
  const { id } = await params;
  const numericId = Number(id);

  if (isNaN(numericId) || numericId < 0 || numericId >= workManagements.length) {
    return (
      <section className="flex flex-col items-center py-20 space-y-2">
        <h3 className="text-2xl font-bold text-red-500">Work Management Not Found</h3>
        <p className="text-lg">Please check the URL and try again.</p>
      </section>
    );
  }

  const {  
    subtitle,
    description,
    imageMainUrl
  } = workManagements[Number(id)];

  return (
    <section className="flex flex-col items-center">
      <div className="max-w-5xl w-full py-8 flex flex-col space-y-7 px-5">
        <div className="flex flex-col items-center space-y-3 text-center py-10">
          <h3 className="text-4xl font-bold">{subtitle}</h3>
          <p className="text-lg max-w-xl pb-5">{description}</p>

          <Image
            src={imageMainUrl}
            width={903}
            height={1449}
            alt="work management 1"
            className="max-w-md lg:max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
