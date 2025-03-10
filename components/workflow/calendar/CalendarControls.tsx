import React from 'react'

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

interface CalendarControlsProps {
  goToToday: () => void;
  goToPreviousMonth: () => void;
  goToNextMonth: () => void;
  value: Value
}

const CalendarControls = ({ goToToday, goToPreviousMonth, value, goToNextMonth }: CalendarControlsProps) => {
  return (
    <div className="flex gap-3 py-4">
      <button
        onClick={goToToday}
        className="border-[1px] border-gray-200 py-2 px-3 font-medium text-xs rounded-sm"
      >
        Today
      </button>

      <div className="flex items-center space-x-4 bg-white border-[1px] border-gray-200 w-fit rounded-sm">
        <button
          onClick={goToPreviousMonth}
          className="hover:bg-gray-100 text-xs h-full px-2"
        >
          ←
        </button>
        <span className="text-xs font-medium">
          {value instanceof Date && `${value.toLocaleString("en-US", { month: "long" })}. ${value.getFullYear()} y.`}
        </span>
        <button
          onClick={goToNextMonth}
          className="hover:bg-gray-100 text-xs h-full px-2"
        >
          →
        </button>
      </div>
    </div> 
  );
};

export default CalendarControls;