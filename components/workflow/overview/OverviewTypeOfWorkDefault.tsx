import React from 'react'

type OverviewTypeOfWorkDefault = {
  colName1: string;
  colName2: string;
}

const OverviewTypeOfWorkDefault = ({ item, className }: { item: OverviewTypeOfWorkDefault, className?: string }) => {
  return (
    <div className={`flex items-center gap-2 p-1 pr-0 text-xs font-semibold text-gray-700 ${className}`}>
      <p className="min-w-[100px]">{item.colName1}</p>
      <p className="flex-1">{item.colName2}</p>
    </div>
  );
};

export default OverviewTypeOfWorkDefault;