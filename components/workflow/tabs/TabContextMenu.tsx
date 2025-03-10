import React from 'react'
import { toast } from 'sonner';
import TabToast from './TabToast';

type Tab = {
  title: string;
}

interface TabContextMenu {
  title: string,
  index: number,
  tabs: Tab[],
  tabContextMenuIndex: number,
  handleOnMoveRight: (index: number) => void,
  handleOnMoveLeft: (index: number) => void,
  handleRemove: (index: number) => void,
}

const TabContextMenu = ({
  title,
  index,
  tabs,
  tabContextMenuIndex,
  handleOnMoveRight,
  handleOnMoveLeft,
  handleRemove
}: TabContextMenu) => {
  return (
    <section className='bg-white py-2 absolute top-11 flex flex-col border-[1px] border-gray-200 min-w-[180px] text-xs z-30'>
      <button
        className="w-full p-2 hover:bg-gray-200 text-left"
        onClick={() =>
          toast.custom((t) => (
            <TabToast title={title} />
          ))
        }
      >
        Set As Default
      </button>

      <div className=" border-gray-300 border-y-[1px]">
        {index < tabs.length - 1 && (
          <button 
            onClick={() => handleOnMoveRight(tabContextMenuIndex)} 
            className="w-full p-2 hover:bg-gray-200 text-left"
          >
            Move to Right
          </button>
        )}

        {index > 0 && (
          <button 
            onClick={() => handleOnMoveLeft(tabContextMenuIndex)} 
            className="w-full p-2 hover:bg-gray-200 text-left"
          >
            Move to Left
          </button>
        )}
      </div>

      <button onClick={() => handleRemove(tabContextMenuIndex)} className="w-full p-2 hover:bg-gray-200 text-left">
        Remove
      </button>
    </section>
  );
};

export default TabContextMenu;