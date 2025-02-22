import Image from 'next/image';

const IntegrationCard = ({ imageUrl, width, height, imageAlt }: IntegrationCardProps) => {
  return (
    <div className="h-[64px] w-[64px] 2xl:h-[100px] 2xl:w-[100px] p-3 bg-white shadow-md rounded-2xl flex justify-center items-center">
      <Image
        src={imageUrl}
        width={width}
        height={height}
        alt={imageAlt}
      />
    </div>
  );
};

export default IntegrationCard;