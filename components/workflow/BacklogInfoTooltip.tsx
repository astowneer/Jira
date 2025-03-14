import Image from 'next/image';
import React, { useState } from 'react';

const BacklogInfoTooltip = ({
  count,
  canEdit = false,
  color,
  tooltipText,
  tooltipSide = 'top',
  index = 0,
  handleChangeStoryPoints
}: {
  canEdit?: boolean;
  count: string;
  color: string;
  tooltipText: string;
  tooltipSide?: 'top' | 'bottom';
  index?: number;
  handleChangeStoryPoints?: (value: string, index: number) => void
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(count);

  const handleSave = () => {
    let value = inputValue;

    if (inputValue.startsWith('0')) {
      value = inputValue.replace(/^0+/, '');
    }

    if (handleChangeStoryPoints) {
      handleChangeStoryPoints(value, index); 
    }

    setIsEditing(false);
  };


  const handleCancel = () => {
    setInputValue(count);
    setIsEditing(false);
  };

  return (
    <div
      className={`relative hover:bg-gray-300 px-2 w-fit flex justify-center items-center border-[1px] border-gray-400 rounded-sm group bg-gray-200`}
    >
      {canEdit && isEditing ? (
        <div className="absolute flex items-center bg-white border p-1 z-10">
          <div className='relative'>
            <input
              type="number"
              className="w-12 text-xs border p-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="absolute flex-shrink-0 flex">
              <button onClick={handleSave} className="bg-white border-[1px] border-gray-300 p-2 drop-shadow-sm hover:bg-gray-100">
                <Image src="/svg/check.svg" width={16} height={16} alt="ok" />
              </button>
              <button onClick={handleCancel} className="bg-white border-[1px] border-gray-300 p-2 drop-shadow-sm hover:bg-gray-100">
                <Image src="/svg/x-mark.svg" width={16} height={16} alt="cancel" />
              </button>
            </div>
          </div>
          <div className='hidden'>{color}</div>
        </div>
      ) : (
        <div
          className="cursor-pointer"
          onClick={() => canEdit && setIsEditing(true)}
        >
          <div
            className={`absolute bg-black text-white text-[10px] -translate-x-1/2 px-2 py-1 hidden group-hover:block text-nowrap z-10 ${tooltipSide === 'top' ? 'bottom-7' : 'top-7'}`}
          >
            {tooltipText}
          </div>
          <p className="text-[10px]">{count}</p>
        </div>
      )}
    </div>
  );
};

export default BacklogInfoTooltip;
