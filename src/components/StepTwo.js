import Image from 'next/image'
import React, { useState } from 'react'

const StepTwo = () => {
  const [active,setActive] = useState()

  const stepOneData = [
    {
      icon : '/assets/kids.png',
      label  : "Kids Room"
    },
    {
      icon : '/assets/beedroom.jpg',
      label  : "Beed Room"
    },
    {
      icon : '/assets/kids.png',
      label  : "Kids Room"
    },
    {
      icon : '/assets/beedroom.jpg',
      label  : "Beed Room"
    },
    {
      icon : '/assets/kids.png',
      label  : "Kids Room"
    },
    {
      icon : '/assets/beedroom.jpg',
      label  : "Beed Room"
    },
    {
      icon : '/assets/kids.png',
      label  : "Kids Room"
    },
    {
      icon : '/assets/beedroom.jpg',
      label  : "Beed Room"
    },
    {
      icon : '/assets/kids.png',
      label  : "Kids Room"
    },
    {
      icon : '/assets/beedroom.jpg',
      label  : "Beed Room"
    },
  ]
  
  return (
    <div className='flex items-center flex-wrap py-4 gap-6'>
        {
          stepOneData.map((data,index)=>{
            return(
              <div key={data.label+index} onClick={()=>setActive(index)} className={`hover:text-black min-w-40  max-w-40 border   cursor-pointer ${active === index ? "border-black text-black" : "border-transparent text-neutral-500" }`}>
                  <Image
                      src={data.icon}
                      alt={data.icon}
                      width={160}
                      height={160}

                  />
                <p className='px-2'>{data.label}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default StepTwo
