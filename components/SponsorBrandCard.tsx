import Image from "next/image";

const SponsorBrandCard = ({ imageUrl, width, height, imageAlt }: SponsorBrandCardProps) => {
  return (
    <div className="flex justify-center items-center max-h-[50px]">
      <Image 
        src={imageUrl}
        width={width}
        height={height}
        alt={imageAlt}
        // className="max-h-[50px] bg-yellow-500 w-auto px-10 xl:px-40 2xl:px-20 py-6 xl:py-3 grayscale"
        className="max-w-[60px] w-fit max-h-[40px] py-1 grayscale"
      />
    </div>
  );
};

export default SponsorBrandCard;