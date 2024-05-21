import React, { useState } from 'react'
import Storeicon from './icons/Storeicon'

const StepOne = () => {
  const [active,setActive] = useState()

  const stepOneData = [
    {
      icon : <Storeicon/>,
      label  : "Furnituring"
    },
    {
      icon : <Storeicon/>,
      label  : "Furnishing"
    },
    {
      icon : <Storeicon/>,
      label  : "Storage plan"
    }
  ]
  
  return (
    <div className='flex items-center flex-wrap py-4 gap-6'>
        {
          stepOneData.map((data,index)=>{
            return(
              <div key={data.label+index} onClick={()=>setActive(index)} className={` min-w-28  max-w-28 border-2 border-neutral-600 p-2 cursor-pointer ${active === index ?  "border-black text-black " : "text-neutral-500 border-neutral-500" }`}>
                <div className='w-12 h-12 '>
                  { data.icon }
                </div>
                <p>{data.label}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default StepOne
