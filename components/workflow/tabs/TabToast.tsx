import Image from 'next/image'
import React from 'react'

const TabToast = ({ title }: { title: string}) => {
  return (
    <section className="flex flex-col gap-1 p-5 text-xs">
      <div className='flex items-center gap-2'>
        <Image src="/svg/ok.svg" width={16} height={16} alt="Toast Image" className="size-3" />
        <h5 className='font-semibold'>{`${title} set as default view`}</h5>
      </div>
      <p>Summary will be the default view for everyone.</p>
    </section>
  );
};

export default TabToast;