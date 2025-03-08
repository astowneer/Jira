import React from 'react'
import OverviewHeader from './OverviewHeader'
import OverviewTypeOfWorkItem from './OverviewTypeOfWorkItem'
import OverviewTypeOfWorkDefault from './OverviewTypeOfWorkDefault'
import { typesOfWorkLinks } from '@/constants/constants'

const OverviewTypeOfWork = () => {
  return (
    <section className="bg-white w-full flex flex-col gap-5 p-5 rounded-md drop-shadow-sm border-[1px] border-gray-200 min-h-[260px]">
      <OverviewHeader
        item={{ 
          title: 'Types of work', 
          description: 'Create some issues to view a breakdown of total work by issue type.', 
          descriptionTextRef: 'What are issue types?', 
          descriptionRef: '/'
        }} 
      />

      <div className="max-h-[220px] overflow-y-scroll">
        <OverviewTypeOfWorkDefault item={{ colName1: "Type", colName2: "Distribution" }} />

        {typesOfWorkLinks.map((item, index) => 
          <OverviewTypeOfWorkItem key={index} item={item} />
        )}
      </div>
    </section>
  )
}

export default OverviewTypeOfWork