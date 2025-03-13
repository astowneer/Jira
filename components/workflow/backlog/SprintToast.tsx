import Image from "next/image";

const SprintToast = () => {
  return (
    <section className="flex flex-col gap-1 p-5 text-xs">
      <div className='flex items-center gap-2'>
        <Image src="/svg/ok.svg" width={16} height={16} alt="Toast Image" className="size-3" />
        <h5 className='font-semibold'>Your sprint started</h5>
      </div>
      <p>Now you can manage your issues in dashboard</p>
    </section>
  );
};

export default SprintToast;