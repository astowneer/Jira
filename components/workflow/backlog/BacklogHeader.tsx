import BacklogInfoTooltip from '@/components/workflow/BacklogInfoTooltip'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import { SetStateAction } from 'react'
import BacklogDropdown from './BacklogDropdown'
import useOutsideClick from '@/hooks/useOutsideClick'
import { toast } from 'sonner'
import SprintToast from './SprintToast'

const backlogInfos = [
  {
    count: "0",
    tooltipText: "To Do",
    color: "red"
  },
  {
    count: "2",
    tooltipText: "In Progress",
    color: "blue"
  },
  {
    count: "3",
    tooltipText: "Done",
    color: "yellow"
  },
]

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


const BacklogHeader = ({ 
  backlogIssues, 
  open, 
  isOpen, 
  handleRemove, 
  checkedIssues, 
  setCheckedIssues  
}: {
  backlogIssues: BacklogIssues[], 
  open: boolean, 
  isOpen: React.Dispatch<SetStateAction<boolean>>, 
  handleRemove: () => void, checkedIssues: string[], 
  setCheckedIssues: React.Dispatch<SetStateAction<string[]>>
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useOutsideClick<HTMLButtonElement>(() => {
    setTimeout(() => setDropdownOpen(false), 300);
  });

  return (
    <section className="flex justify-between gap-3 p-2 min-w-[550px]">
      <div className="flex items-center gap-2 text-xs flex-shrink-0">
        <input 
          type="checkbox" 
          checked={checkedIssues.length > 0}
          onChange={() => {
            const allChecked = checkedIssues.length === backlogIssues.length;
            if (allChecked) {
              handleRemove(); 
            } else {
              setCheckedIssues(backlogIssues.map(issue => issue.id));
            }
          }} 
        />
        <Image 
          src='/svg/open-right.svg' 
          width={16} 
          height={16} 
          alt='open' 
          onClick={() => isOpen((prev) => !prev)} 
          className={cn({ "rotate-90" : open})} 
        />
        <h3 className="font-semibold">{backlogIssues.length > 0 ? backlogIssues[0].id : "ASDF"} Spint 1</h3>
        <p>10 Mar - 11 Mar ({backlogIssues.length} issues)</p>
      </div>

      <div className="flex items-center gap-2 text-xs flex-shrink-0">
        <div className="flex items-center gap-1">
          {backlogInfos.map((item) => 
            <BacklogInfoTooltip 
              key={item.tooltipText} 
              count={item.count} 
              tooltipText={item.tooltipText + `: 0 of ${item.count} (story points)`} 
              color={item.color} 
              tooltipSide="bottom"  
            />
          )}
        </div>
        <button 
          disabled={backlogIssues.length === 0} 
          className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-sm disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
          onClick={() =>
            toast.custom(() => (
              <SprintToast />
            ))
          }          
        >
          Start sprint
        </button>

        <div className="relative">
          <button 
            ref={dropdownRef} 
            className="hover:bg-gray-200" 
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <Image src='/svg/more.svg' width={20} height={20} alt='more' />
          </button>

          {backlogIssues.length > 0 && dropdownOpen && (
            <section className='bg-white py-2 absolute top-5 right-0 flex flex-col border-[1px] border-gray-200 min-w-[180px] text-xs z-30'>
              <BacklogDropdown title='Remove' handle={handleRemove} />
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default BacklogHeader;