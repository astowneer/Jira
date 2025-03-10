"use client";

import React, { useState } from 'react';
import TimelineDropdownCheckbox from './TimelineDropdownCheckbox';
import Image from 'next/image';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';

const TimelineDropdown = ({ title, items }: TimelineDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});
  const [clickedOutside, setClickedOutside] = useState(false);

  const dropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setClickedOutside(true)
    setIsOpen(false)
  });

  const toggleDropdown = () => {
    if (clickedOutside) {
      setClickedOutside(false)
      return
    }
    setIsOpen((prev) => !prev)
  }

  const handleCheckboxChange = (id: string) => {
    setSelectedItems((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  return (
    <section className="relative">
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-2 border-[1px] rounded-sm transition",
          isOpen ? "bg-gray-200 border-blue-500" : "border-gray-200 hover:bg-gray-200"
        )}
        onClick={toggleDropdown}
      >
        <span className={cn("font-medium text-sm text-gray-500", isOpen && "text-blue-500")}>{title}</span>

        <Image
          src="/svg/open-right.svg"
          width={18}
          height={18}
          alt="open dropdown"
          className="rotate-90"
          style={
            isOpen
              ? { filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)" }
              : {}
          }
        />
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute top-12 py-2 w-full min-w-[330px] max-h-[300px] overflow-y-auto bg-white border rounded-md shadow-md"
        >
          {items.map((item) => 
            <TimelineDropdownCheckbox 
              key={item.id} 
              item={item} 
              checked={selectedItems[item.id] || false} 
              onChange={() => handleCheckboxChange(item.id)}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default TimelineDropdown;
