import BacklogInfoTooltip from '@/components/workflow/BacklogInfoTooltip';
import UserTooltip from '@/components/workflow/UserTooltip';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { SetStateAction } from 'react';
import BacklogDropdownStatus from './BacklogDropdownStatus';
import useOutsideClick from '@/hooks/useOutsideClick';
import BacklogDropdown from './BacklogDropdown';

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

type Issue = {
  title: string;
  icon: string;
  filter: string;
}

type StatusDropdown = {
  status: string;
}

const issuesStatusDropdownList: StatusDropdown[] = [
  {
    status: "Done"
  },
  {
    status: "In Progress"
  },
  {
    status: "To Do"
  },
  {
    status: "Review"
  },
]

const BacklogIssue = ({ 
  item,
  index, 
  statusDropdownOpenIndex, 
  setStatusDropdownOpenIndex, 
  setCurrentIssue, 
  checkedIssues, 
  handleCheckboxChange, 
  setBacklogIssues, 
  moreDropdownOpenIndex, 
  setMoreDropdownOpenIndex 
}: { 
  item: BacklogIssues, 
  index: number, 
  statusDropdownOpenIndex: number, 
  setStatusDropdownOpenIndex: React.Dispatch<SetStateAction<number>>, 
  setCurrentIssue: React.Dispatch<SetStateAction<Issue>>,  
  checkedIssues: string[], 
  handleCheckboxChange: (id: string) => void, 
  setBacklogIssues: React.Dispatch<SetStateAction<BacklogIssues[]>>, 
  moreDropdownOpenIndex: number, 
  setMoreDropdownOpenIndex: React.Dispatch<SetStateAction<number>> 
}) => {
  const handleChangeStatus = (value: string, index: number) => {
    setBacklogIssues((prev) => 
      prev.map((issue, i) => 
        i === index ? { ...issue, status: value } : issue
      )
    );
  };    

  const handleChangeStoryPoints = (value: string, index: number) => {
    setBacklogIssues((prev) =>
      prev.map((issue, i) =>
        i === index ? { ...issue, storyPoints: value } : issue
      )
    );
  };

  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const dropdownRef = useOutsideClick<HTMLButtonElement>(() => {
  //   setTimeout(() => setDropdownOpen(false), 300);
  // });


  const dropdownStatusRef = useOutsideClick<HTMLDivElement>(() => {
    setTimeout(() => setStatusDropdownOpenIndex(-1), 300)
  })

  const dropdownMoreRef = useOutsideClick<HTMLButtonElement>(() => {
    setTimeout(() => setMoreDropdownOpenIndex(-1), 300)
  })

  const handleRemove = () => {
    
  }


  return (
    <label 
      key={item.issuesText} 
      htmlFor={item.id} 
      className="flex items-center justify-between hover:bg-gray-200 gap-2 w-full px-4 py-1 h-[50px] select-none"
    >
      <div className="flex items-center gap-2 flex-1 flex-shrink-0 overflow-hidden text-xs ">
        <input
          type="checkbox"
          id={item.id}
          checked={checkedIssues.includes(item.id)}
          onChange={() => handleCheckboxChange(item.id)}
        />

        <Image 
          src={item.icon} 
          width={14} 
          height={14} 
          alt='more' 
          style={{ filter: item.filter }} 
        />
        <p className="text-xs uppercase text-gray-600">{item.id}</p>
        <p className="">{item.issuesText}</p>
      </div>

      <div className="flex items-center gap-5 flex-shrink-0 text-xs">
        <div className="flex items-center gap-10">
          <div className="relative inline-block min-w-[100px]">
            <div 
              className="bg-blue-400 w-fit uppercase font-semibold rounded-sm flex gap-1 px-1" 
              onClick={(e) => {
                e.preventDefault()
                setStatusDropdownOpenIndex((prev) => prev === index ? -1 : index)
              }}
            >
              <p className="text-[10px]">{item.status}</p>
              <Image src='/svg/open-right.svg' width={12} height={12} alt='open' className={cn("rotate-90")} />
            </div>

            {statusDropdownOpenIndex === index && (
              <div className="absolute top-5 min-w-max w-[120px] py-1 bg-white border-gray-300 border-[1px] z-30" onClick={(e) => e.preventDefault()}  ref={dropdownStatusRef}>
                {issuesStatusDropdownList.map((item) =>
                  <BacklogDropdownStatus 
                    key={item.status} 
                    item={item} 
                    index={index} 
                    handleChangeStatus={handleChangeStatus} 
                  />
                )}
              </div>
            )}
          </div>
            
          <div className="min-w-[50px]">
            <BacklogInfoTooltip 
              canEdit={true} 
              count={item.storyPoints} 
              tooltipText="Story point" 
              color="gray" 
              tooltipSide="bottom" 
              index={index} 
              handleChangeStoryPoints={handleChangeStoryPoints}  
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className='flex min-w-[80px] justify-end'>
            {item.assignedTo.map((user) => 
              <UserTooltip key={user.fullName} user={user}/>
            )}
          </div>
          {/* <button className="hover:bg-gray-200">
            <Image src='/svg/more.svg' width={20} height={20} alt='more' />
          </button> */}
        </div>
      </div>
    </label>
  )
}

export default BacklogIssue

// <div className="relative">
// <button 
//   className="hover:bg-gray-200 bg-red-500" 
//   onClick={(e) => {
//     setMoreDropdownOpenIndex((prev) => prev === index ? -1 : index)
//   }}
// >
//   <Image src='/svg/more.svg' width={20} height={20} alt='more' />
// </button>

// {moreDropdownOpenIndex === index && (
//   <section ref={dropdownMoreRef} className='bg-white py-2 absolute top-5 right-0 flex flex-col border-[1px] border-gray-200 min-w-[180px] text-xs z-30'>
//     <BacklogDropdown title='Remove' handle={handleRemove} />
//   </section>
// )}
// </div>