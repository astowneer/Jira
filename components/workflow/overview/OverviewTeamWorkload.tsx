import React from 'react'
import OverviewHeader from './OverviewHeader'
import OverviewTypeOfWorkDefault from './OverviewTypeOfWorkDefault'
import OverviewTypeOfWorkItem from './OverviewTypeOfWorkItem'
import { teamWorkloadLinks } from '@/constants/constants'

const OverviewTeamWorkload = () => {
  return (
    <section className="bg-white w-full flex flex-col gap-5 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <OverviewHeader
        item={{ 
          title: 'Team workload', 
          description: 'To monitor the capacity of your team,', 
          descriptionTextRef: 'create some issues', 
          descriptionRef: '/'
        }} 
      />

      <div className="max-h-[220px] overflow-y-scroll">
        <OverviewTypeOfWorkDefault 
          item={{ 
            colName1: "Assignee", 
            colName2: "Work Distribution" 
          }} 
          className="gap-5"
        />

        {teamWorkloadLinks.map((item, index) => 
          <OverviewTypeOfWorkItem 
            key={index} 
            item={item} 
            className="gap-5"
          />
        )}
      </div>
    </section> 
  )
}

export default OverviewTeamWorkload