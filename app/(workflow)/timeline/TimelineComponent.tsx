"use client";

import moment from "moment";
import Timeline from "@/components/timeline/lib/Timeline"
import "react-calendar-timeline/style.css"
import { useState } from "react";
import { useEffect } from "react";
import TimeRange from "./TimeRange";
import { itemsOnTimeline, timelineGroups } from "@/constants/constants";

type TimelineItem = {
  id: number;
  group: number;
  title: string;
  start_time: moment.Moment;
  end_time: moment.Moment;
};

const TimelineComponent = () => {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [timeRangeOpen, setTimeRangeOpen] = useState(true)
  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().startOf("day").valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().endOf("day").valueOf());
  const [timeRangeSelectedIndex, setTimeRangeSelectedIndex] = useState(-1);

  useEffect(() => {
    setItems(itemsOnTimeline);
  }, []);

  if (items.length === 0) {
    return <p>Loading timeline...</p>;
  } 

  return (
    <div>
      <Timeline
        groups={timelineGroups}
        items={items}
        className="border-2 border-gray-200"
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        onTimeChange={(start, end, updateScrollCanvas) => {
          setVisibleTimeStart(start);
          setVisibleTimeEnd(end);
          updateScrollCanvas(start, end);
        }}
      />

      <TimeRange 
        timeRangeOpen={timeRangeOpen} 
        timeRangeSelectedIndex={timeRangeSelectedIndex} 
        setTimeRangeSelectedIndex={setTimeRangeSelectedIndex} 
        setVisibleTimeStart={setVisibleTimeStart} 
        setVisibleTimeEnd={setVisibleTimeEnd}
        setTimeRangeOpen={setTimeRangeOpen}
      />
    </div>
  );
}

export default TimelineComponent;