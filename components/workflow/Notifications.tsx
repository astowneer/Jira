import Image from 'next/image'
import React from 'react'
import NotificationItem from './NotificationItem';

const notifications = [
  {
    title: "Title",
    description: "Turn on notifications to track your projects, respond to and resolve Jira tasks in real time within Microsoft Teams."
  },
  {
    title: "Title2",
    description: "Turn on notifications to track your projects, respond to and resolve Jira tasks in real time within Microsoft Teams."
  },
]

const Notifications = () => {
  return (
    <div className="bg-white border-[1px] border-gray-200 p-5 drop-shadow-xl absolute right-0 max-sm:left-0 max-sm:-translate-x-1/2 translate-y-2 min-w-[450px] space-y-3">
      <h4 className="font-medium text-2xl text-center">Notifications</h4>

      <div className="space-y-2 max-h-[320px] overflow-y-scroll">
      <h5 className="text-xs">Today</h5>
        {notifications.map((item) => <NotificationItem key={item.title} item={item} />)}
      </div>

      <div className="flex flex-col justify-center items-center text-center py-3 space-y-4">
        <Image src="/svg/notification.svg" width={1200} height={814} alt="jira logo" className="size-12" />
        <p className="text-xs">That's all your notifications from<br/> the last 30 days.</p>
      </div>
    </div>
  );
};

export default Notifications;