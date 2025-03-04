import Image from "next/image";

const AccordeonItem = ({ 
  title, 
  isOpen = false, 
  description, 
  imageUrl, 
  onClick 
}: AccordeonItemProps) => {
  return (
    <section>
      <div className="px-8 py-3 select-none" onClick={onClick}>
        <div className="mb-4 flex flex-col gap-1">
          <div className="flex gap-3">
            <div className="bg-gray-300 w-[3px]">
              <h5 className="hidden">Progress bar</h5>
            </div>
            <h3 className="text-2xl font-bold">{title}</h3>
          </div>

          {isOpen && <p className="text-md">{description}</p>}
        </div>
        
        {isOpen && (
          <div className="flex 2xl:hidden justify-center items-center">
            <Image 
              src={imageUrl}
              width={2669}
              height={2080}
              alt="collaborate"
              className="max-w-[600px] max-h-[468px] w-full h-auto"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AccordeonItem;