"use client"

import Image from 'next/image';
import React from 'react'
import { SetStateAction } from 'react';
import { useState } from 'react';

type BoardCardItem = {
  title: string;
  isDone: boolean,
}

interface BoardCardAddProps {
  setCards: React.Dispatch<SetStateAction<BoardCardItem[]>>;
  setCardOpen: React.Dispatch<SetStateAction<boolean>>;
}

const BoardCardAdd = ({ setCards, setCardOpen }: BoardCardAddProps) => {
  const [tempName, setTempName] = useState("");

  const handleSave = () => {
    const trimmedName = tempName.trim();
    if (!trimmedName) return;
    setCards((prev) => [...prev, { title: trimmedName, isDone: false }]);
    setTempName("");
    setCardOpen(false)
  };
  
  const handleCancel = () => {
    setCardOpen(false)
  };
  
  return (
    <div className="min-w-[270px] max-w-[270px] h-[370px] shadow-inner px-2">
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
    </div>
  );
};

export default BoardCardAdd;