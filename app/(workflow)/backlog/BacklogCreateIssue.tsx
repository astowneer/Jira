import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { SetStateAction } from 'react';

type Issue = {
  title: string;
  icon: string;
  filter: string;
}

type BacklogIssues = {
  type: string;
  icon: string;
  filter: string;
  id: string;
  issuesText: string;
  status: string;
  storyPoints: string;
  assignedTo: {
    fullName: string;
    color: string;
  }[];
}

const issues = [
  {
    title: "Story",
    icon: "/svg/bookmark.svg",
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)"
  },
   {
    title: "Bug",
    icon: "/svg/bug.svg",
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)"
  },
]

// currentIssue, setCurrentIssue,
// addIssueDropdown, setAddIssueDropdown
const BacklogCreateIssue = ({  setBacklogIssues }: {
  setBacklogIssues: React.Dispatch<SetStateAction<BacklogIssues[]>>
  // currentIssue: Issue, 
  // setCurrentIssue:  React.Dispatch<SetStateAction<Issue>>,  
  // addIssueDropdown: boolean, 
  // setAddIssueDropdown: React.Dispatch<SetStateAction<boolean>>,  
}) => {
  const [createIssueOpen, setCreateIssueOpen] = useState(false);
  const [currentIssue, setCurrentIssue] = useState(issues[0])
  const [issuesText, setIssueText] = useState("")
  const [addIssueDropdown, setAddIssueDropdown] = useState(false)

  const issueDropdownRef = useOutsideClick<HTMLDivElement>(() => {
    setTimeout(() => setAddIssueDropdown(false), 300);
  });

  const issueOpenRef = useOutsideClick<HTMLDivElement>(() => {
    setCreateIssueOpen(false);
  });
  

  const handleSubmit = () => {
    if (!issuesText.trim()) return; // Prevent adding empty issues

    setBacklogIssues((prev) => [
      ...prev,
      {
        type: currentIssue.title,
        icon: currentIssue.icon,
        filter: currentIssue.filter,
        id: crypto.randomUUID(), // Generates a unique ID
        issuesText: issuesText.trim(), // Use input text
        status: "to do",
        storyPoints: "0", // Default to "0" or let the user set it
        assignedTo: [], // Initially empty array
      },
    ]);

    setIssueText("");
    setCreateIssueOpen(false) 
  }

  if (!createIssueOpen) {
    return (
      <section className="hover:bg-gray-200 p-2 mt-1 min-w-[550px]" onClick={() => { setCreateIssueOpen(true)}}>
        <div className="flex items-center gap-1">
          <Image src='/svg/plus.svg' width={16} height={16} alt='add' />
          <p className="text-xs">Create Issue</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white border-[1px] border-blue-500 text-xs p-2 mt-1 min-w-[550px]"  ref={issueOpenRef} >
      <div className="flex items-center gap-3">

        <div className="relative inline-block">
          <button className="flex items-center gap-1 border px-2 py-1 rounded" onClick={() => setAddIssueDropdown((prev) => !prev)}>
            <Image src={currentIssue.icon} width={16} height={16} alt={currentIssue.title} style={{ filter: currentIssue.filter }} />
            <Image src='/svg/open-right.svg' width={12} height={12} alt='open' className={cn("rotate-90", { "-rotate-90":  addIssueDropdown})} />
          </button>
          
          {addIssueDropdown && (
            <div ref={issueDropdownRef} className="absolute top-10 min-w-max w-[120px] py-1 bg-white border-[1px] border-gray-300">
              {issues.map((item) => (
                <div 
                  key={item.title}
                  className="flex flex-col gap-3 hover:bg-gray-100 border-l-[3px] border-transparent hover:border-blue-500 p-2 select-none" 
                  onClick={() => setCurrentIssue(item)}
                >
                  <div className="flex gap-1 overflow-hidden" >
                    <Image 
                      src={item.icon}
                      width={16} 
                      height={16} 
                      alt={item.title}
                      style={{ filter: item.filter }}
                    />
                    <div className="truncate text-xs text-ellipsis whitespace-nowrap">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <input 
          type="text"
          value={issuesText} 
          onChange={(e) => setIssueText(e.target.value)} 
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(); 
            }
          }}
          placeholder="What needs to be done?" 
          className="outline-none border-none flex-1" 
        />
      </div>
    </section>
  )
}

export default BacklogCreateIssue