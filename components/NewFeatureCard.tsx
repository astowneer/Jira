import Image from "next/image";

const NewFeatureCard = ({ imageUrl, title, subtitle }: NewFeatureCard) => {
  return (
    <div className="flex flex-col gap-5 max-w-[569px] bg-white shadow-md border-[1px] border-gray-100">
      <Image
        src={imageUrl}
        width={2277}
        height={1860}
        alt={title}
        className="w-full h-auto"
      />

      <div className="text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm pt-2 pb-6 px-6">{subtitle}</p>
      </div>
    </div>
  );
};

export default NewFeatureCard;