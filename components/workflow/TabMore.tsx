import Image from 'next/image';
import React, { SetStateAction } from 'react'
import { toast } from "sonner"

interface TabMoreProps {
  tab: Tab, 
  tabs: Tab[], 
  setTabs: React.Dispatch<SetStateAction<Tab[]>>
}

const TabMore = ({ tab, tabs, setTabs }: TabMoreProps) => {
  const index = tabs.findIndex(t => t.route === tab.route);

  const handleOnMoveRight = () => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs];
      if (index < newTabs.length - 1) {
        [newTabs[index], newTabs[index + 1]] = [newTabs[index + 1], newTabs[index]];
      }
      return [...newTabs]; 
    });
  };  

  const handleOnMoveLeft = () => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs]; 
      if (index > 0) {  
        [newTabs[index - 1], newTabs[index]] = [newTabs[index], newTabs[index - 1]];
      }
      return [...newTabs]; 
    });
  };

  const handleRemove = () => {
    setTabs(prevTabs => {
      const newTabs = [...prevTabs];
      newTabs.splice(index, 1);
      return [...newTabs];
    });
  };
  
  return (
    <section className='bg-white py-3 absolute top-11 flex flex-col border-[1px] border-gray-300 min-w-[180px] z-10'>
      <button
        className="w-full p-3 hover:bg-gray-200 text-left"
        onClick={() =>
          toast.custom((t) => (
            <div className="flex flex-col gap-2 p-5 text-sm">
              <div className='flex items-center gap-1'>
                <Image src="/svg/ok.svg" width={20} height={20} alt="Toast Image" className="mr-3 size-5" />
                <span className='font-semibold'>{`${tabs[index].title} set as default view`}</span>
              </div>
              <span>Summary will be the default view for everyone.</span>
            </div>
          ))
        }
      >
        Set As Default
      </button>
      <div className=" border-gray-300 border-y-[1px]">
        {index < tabs.length - 1 && (
          <button onClick={handleOnMoveRight} className="w-full p-3 hover:bg-gray-200 text-left">
            Move to Right
          </button>
        )}
        {index > 0 && (
          <button onClick={handleOnMoveLeft} className="w-full p-3 hover:bg-gray-200 text-left">
            Move to Left
          </button>
        )}
      </div>
      <button onClick={handleRemove} className="w-full p-3 hover:bg-gray-200 text-left">Remove</button>
    </section>
  );
}

export default TabMore;
