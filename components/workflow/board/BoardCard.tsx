"use client"

import { cn } from '@/lib/utils';
import { useState } from 'react';
import Image from 'next/image';
import React from 'react'
import { SetStateAction } from 'react';
import useOutsideClick from '@/hooks/useOutsideClick';
import Link from 'next/link';

type BoardCardItem = {
  title: string;
  isDone: boolean,
}

interface BoardCardProps {
  index: number, 
  item: BoardCardItem,
  onDragStart: (index: number) => void,
  onDrop: (index: number) => void,
  cardContextMenuIndex: number,
  setCardContextMenuIndex: React.Dispatch<SetStateAction<number>>
}

const BoardCard = ({ 
  index, 
  item,
  onDragStart, 
  onDrop,
  cardContextMenuIndex,
  setCardContextMenuIndex
}: BoardCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [columnName, setColumnName] = useState(item.title);
  const [tempName, setTempName] = useState(columnName);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempName(columnName);
  };

  const handleSave = () => {
    setColumnName(tempName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };
  
  const tabMoreRef = useOutsideClick<HTMLDivElement>(() => {
    if (cardContextMenuIndex === index) {
      setTimeout(() => {
        setCardContextMenuIndex((prev) => (prev === index ? -1 : prev));
      }, 200);
    }
  });

  return (
    <section 
      className='bg-gray-100 rounded-md min-w-[270px] max-w-[270px] h-[370px] flex flex-col'
      draggable="true"
      onDragStart={() => onDragStart(index)}
      onDrop={() => onDrop(index)}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className='sticky top-0 h-[45px] flex justify-between items-center p-2 gap-2 rounded-tl-md rounded-tr-md text-xs'>
        {isEditing ? (
          <div className="relative flex-1 mt-2">
            <textarea
              rows={1}
              cols={1}
              value={tempName}
              onChange={(e) => setTempName(e.target.value)}
              className="resize-none outline-none bg-white border-[2px] border-blue-500 w-full text-sm px-2 py-2 overflow-hidden whitespace-nowrap"
            />

            <div className="absolute right-0 flex gap-1 flex-shrink-0">
              <button onClick={handleSave} className="bg-white border-[1px] border-gray-300 p-2 drop-shadow-sm hover:bg-gray-100">
                <Image src="/svg/check.svg" width={16} height={16} alt="ok" />
              </button>
              <button onClick={handleCancel} className="bg-white border-[1px] border-gray-300 p-2 drop-shadow-sm hover:bg-gray-100">
                <Image src="/svg/x-mark.svg" width={16} height={16} alt="cancel" />
              </button>
            </div>
          </div>
        ) : (
          <div className='overflow-hidden w-full flex-1'>
            <div 
              onClick={handleEditClick} 
              className="hover:bg-gray-200 w-full px-2 py-1 flex items-center gap-1 whitespace-nowrap truncate"
            >
              {columnName} 
              {item.isDone && <Image src="/svg/check.svg" width={16} height={16} alt="ok" />}
            </div>
          </div>
        )}

        <div>
          <div 
            ref={tabMoreRef} 
            onClick={() => setCardContextMenuIndex((prev) => prev === index ? -1 : index)} 
            className={cn(
              "opacity-0 hover:opacity-100 bg-gray-200 p-2 h-full", 
              { "hidden": isEditing }
            )}
            >
            <Image src="/svg/more.svg" width={16} height={16} alt="more" />
          </div>
        </div>
      </div>
          
      {index === 0 && (
        <div className="flex-1 bg-gray-100 flex flex-col justify-center items-center space-y-5 overflow-y-scroll p-5 rounded-bl-md rounded-br-md">
          <Image 
            src="/svg/move-to-backlog.svg"
            width={128}
            height={128}
            alt="open right"
          />

          <div className="text-center flex flex-col gap-2 text-sm">
            <h4 className="font-semibold">Get started in the Backlog</h4>
            <p className="max-w-[196px]">Plan and start a sprint to see issues here.</p>
          </div>
          
          <Link 
            href="/backlog" 
            className="text-sm border-[1px] border-gray-300 p-2 rounded-md hover:bg-gray-300 hover:underline hover:text-blue-600"
          >
            Go to Backlog
          </Link>
        </div>
      )}
    </section>
  );
};

export default BoardCard;