"use client";

import "react-calendar/dist/Calendar.css"
import CalendarControls from "../../../components/workflow/calendar/CalendarControls";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarPage() {
  const [value, setValue] = useState<Value>(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setValue(new Date()); 
  }, []);

  const goToToday = () => {
    setValue(new Date());
  };

  const goToPreviousMonth = () => {
    if (value instanceof Date) {
      const prevMonth = new Date(value);
      prevMonth.setMonth(prevMonth.getMonth() - 1);
      setValue(prevMonth);
    }
  };

  const goToNextMonth = () => {
    if (value instanceof Date) {
      const nextMonth = new Date(value);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      setValue(nextMonth);
    }
  };

  if (!mounted) return null; 

  return (
    <main>
      <div className="h-[56vh] overflow-y-scroll border-y-[1px] border-gray-200 w-full mt-4">
        <Calendar onChange={setValue} value={value} showNavigation={false} locale="en-US" />
      </div>

      <div className="flex justify-end">
        <CalendarControls  goToToday={goToToday} goToPreviousMonth={goToPreviousMonth} value={value} goToNextMonth={goToNextMonth} />
      </div>
    </main>
  );
}