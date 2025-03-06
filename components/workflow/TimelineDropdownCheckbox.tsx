import Image from "next/image";
import React from "react";

const TimelineDropdownCheckbox = ({
  item,
  checked,
  onChange,
}: TimelineDropdownCheckboxProps) => {
  return (
    <label
      htmlFor={item.id}
      className="flex gap-3 hover:bg-gray-100 border-l-[3px] border-transparent hover:border-blue-500 px-6 py-2 select-none"
    >
      <input
        id={item.id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="cursor-pointer"
      />
      <div className="flex gap-1">
        {item.icon && <Image src={item.icon} width={18} height={18} style={{ filter: item.filter }} alt={item.title} />}
        <span className="truncate">{item.title}</span>
      </div>
    </label>
  );
};

export default TimelineDropdownCheckbox;
