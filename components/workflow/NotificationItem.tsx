import Image from 'next/image'
import React from 'react'

const notifications = [
  {
    title: "Title",
    description: "Turn on notifications to track your projects, respond to and resolve Jira tasks in real time within Microsoft Teams."
  }
]

type NotificationItem = {
  title: string;
  description: string;
}

const NotificationItem = ({ item }: { item: NotificationItem }) => {
  return (
    <div>
      <div className="p-3 flex gap-4 text-xs hover:bg-gray-100">
        <Image src="/svg/atlassian.svg" width={1200} height={814} alt="jira logo" className="size-6" />
        <div>
          <h6 className="font-semibold">Title</h6>
          <p>Turn on notifications to track your projects, respond to and resolve Jira tasks in real time within Microsoft Teams.</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;