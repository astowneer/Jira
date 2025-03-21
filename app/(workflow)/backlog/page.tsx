"use client"

import Image from "next/image";
import { useState } from "react";
import BacklogHeader from "../../../components/workflow/backlog/BacklogHeader";
import BacklogIssue from "../../../components/workflow/backlog/BacklogIssue";
import BacklogCreateIssue from "../../../components/workflow/backlog/BacklogCreateIssue";
import { backlogIssuesInitial } from "@/constants/constants";

export default function Backlog() {
  const [open, isOpen] = useState(true)
  const [backlogIssues, setBacklogIssues] = useState(backlogIssuesInitial);
  const [statusDropdownOpenIndex, setStatusDropdownOpenIndex] = useState(-1);
  const [checkedIssues, setCheckedIssues] = useState<string[]>([]);
  
  const handleCheckboxChange = (id: string) => {
    setCheckedIssues((prev) =>
      prev.includes(id) ? prev.filter((issueId) => issueId !== id) : [...prev, id]
    );
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
                      index={index} 
                      statusDropdownOpenIndex={statusDropdownOpenIndex} 
                      setStatusDropdownOpenIndex={setStatusDropdownOpenIndex} 
                      checkedIssues={checkedIssues} 
                      handleCheckboxChange={handleCheckboxChange} 
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
                      <span className="font-semibold">&nbsp;Start sprint</span>&nbsp;when you&apos;re ready.
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
  );
}