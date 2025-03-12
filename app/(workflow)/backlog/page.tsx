"use client"

import ActionTooltip from "@/components/workflow/ActionTooltip";
import BacklogInfoTooltip from "@/components/workflow/BacklogInfoTooltip";
import UserTooltip from "@/components/workflow/UserTooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import BacklogHeader from "./BacklogHeader";
import BacklogIssue from "./BacklogIssue";
import BacklogCreateIssue from "./BacklogCreateIssue";



export const typesOfWorkLinks = [
  {
    title: 'Epic',
    ref: '/epic',
    icon: '/svg/bolt.svg',
    filter: 'invert(20%) sepia(90%) saturate(5000%) hue-rotate(250deg) brightness(100%) contrast(90%)'
  },
  {
    title: 'Task',
    ref: '/task',
    icon: '/svg/checkbox.svg',
    filter: "invert(58%) sepia(71%) saturate(5949%) hue-rotate(205deg) brightness(103%) contrast(93%)"
  },
  {
    title: 'Bug',
    ref: '/bug',
    icon: '/svg/bug.svg',
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)"
  },
  {
    title: 'Review',
    ref: '/review',
    icon: '/svg/review.svg',
    filter: "invert(55%) sepia(95%) saturate(5000%) hue-rotate(15deg) brightness(100%) contrast(90%)"
  },
  {
    title: 'Story',
    ref: '/story',
    icon: '/svg/bookmark.svg',
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)"
  },
]

const issues = [
  {
    title: "Story",
    icon: "/svg/bookmark.svg",
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)",
  },
  {
    title: "Bug",
    icon: "/svg/bug.svg",
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)"
  },
]


declare type UserTooltip = {
  color: string;
  fullName: string;
}
const backlogIssuesInitial = [
  {
    type: "Story",
    icon: "/svg/bookmark.svg",
    filter: "invert(40%) sepia(90%) saturate(3000%) hue-rotate(100deg) brightness(90%) contrast(100%)",
    id: "ASDF-1",
    issuesText: "LKJADLKFJ",
    status: "In progress",
    storyPoints: "0",
    assignedTo: [
      {
        fullName: "Drobidko Vladyslav Anatoliyovich",
        color: "red",
      },
      {
        fullName: "Donald Knuth",
        color: "blue",
      }
    ]
  },
  {
    type: "Bug",
    icon: "/svg/bug.svg",
    filter: "invert(20%) sepia(90%) saturate(5000%) hue-rotate(0deg) brightness(100%) contrast(90%)",
    id: "ASDF-2",
    issuesText: "aLKJFDLKj",
    status: "To do",
    storyPoints: "555",
    assignedTo: [
      {
        fullName: "Drobidko Vladyslav Anatoliyovich",
        color: "blue",
      }
    ]
  },
]

export default function Backlog() {
  const [open, isOpen] = useState(true)
  const [addIssueDropdown, setAddIssueDropdown] = useState(true)
  const [currentIssue, setCurrentIssue] = useState(issues[0])
  const [issuesText, setIssueText] = useState("")
  const [backlogIssues, setBacklogIssues] = useState(backlogIssuesInitial);
  const [statusDropdownOpenIndex, setStatusDropdownOpenIndex] = useState(-1);
  const [moreDropdownOpenIndex, setMoreDropdownOpenIndex] = useState(-1);

  const [checkedIssues, setCheckedIssues] = useState<string[]>([]);
  
  const handleCheckboxChange = (id: string) => {
    setCheckedIssues((prev) =>
      prev.includes(id) ? prev.filter((issueId) => issueId !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (issuesText.trim() !== "") {
      setIssueText("");
    }

  };

  const handleRemove = () => {
    setBacklogIssues([])
  };

  return (
    <main className="py-5">
      <article className="bg-gray-100 rounded-sm max-sm:overflow-y-scroll py-1 px-2">
        <BacklogHeader 
          open={open} 
          isOpen={isOpen} 
          backlogIssues={backlogIssues} 
          handleRemove={handleRemove} 
          checkedIssues={checkedIssues} 
          setCheckedIssues={setCheckedIssues} 
        />

        {open && (
          <>
            <section className="border-dashed border-[1px] border-gray-300 rounded-sm flex justify-center  min-w-[550px]">
              {backlogIssues.length > 0 ? (
                <div className="w-full">
                  {backlogIssues.map((item, index) => 
                    <BacklogIssue 
                      key={item.id} 
                      item={item} 
                      setBacklogIssues={setBacklogIssues} 
                      setMoreDropdownOpenIndex={setMoreDropdownOpenIndex} 
                      index={index} 
                      statusDropdownOpenIndex={statusDropdownOpenIndex} 
                      setStatusDropdownOpenIndex={setStatusDropdownOpenIndex} 
                      setCurrentIssue={setCurrentIssue} 
                      checkedIssues={checkedIssues} 
                      handleCheckboxChange={handleCheckboxChange} 
                      moreDropdownOpenIndex={moreDropdownOpenIndex} 
                    />
                  )}
                </div>
              ): (
                <div className="flex items-center gap-3 max-w-[600px] h-[160px] my-2">
                  <Image src='/svg/backlog-sprint.svg' width={77} height={64} alt='backlog sprint' />

                  <div className="text-sm">
                    <h4 className="font-medium">Plan your sprint</h4>
                    <p>
                      Drag issues from 
                      <span className="font-semibold">&nbsp;Backlog</span>&nbsp;section, or create new issues, to plan the work for this sprint. Select 
                      <span className="font-semibold">&nbsp;Start sprint</span>&nbsp;when you're ready.
                    </p>
                  </div>
                </div>
              )}
            </section>

            <BacklogCreateIssue setBacklogIssues={setBacklogIssues} />
          </>
        )}
       
      </article>
    </main>
  )
}