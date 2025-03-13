import Image from 'next/image'
import React from 'react'

const IssueFormToast = () => {
  return (
    <section className="flex flex-col gap-1 p-5 text-xs">
      <div className='flex items-center gap-2'>
        <Image src="/svg/ok.svg" width={16} height={16} alt="Toast Image" className="size-3" />
        <h5 className='font-semibold'>Create new issues will be implemented soon.</h5>
      </div>
      <p>Just wait latest updates.</p>
    </section>
  );
};

export default IssueFormToast;