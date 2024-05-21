import Image from 'next/image'
import React, { useState } from 'react'

const StepThree = () => {
  const [active,setActive] = useState()

  const stepOneData = [
    {
      icon : '/assets/rupees.jpg',
      amt : 10000,
      label  : "Furnituring"
    },
    {
      icon : '/assets/rupees.jpg',
      amt : 40000,
      label  : "Furnituring"
    },
    {
      icon : '/assets/rupees.jpg',
      amt : 50000,
      label  : "Furnituring"
    },
    {
      icon : '/assets/rupees.jpg',
      amt : 100000,
      label  : "Furnituring"
    },
  ]
  
  return (
    <div className='flex items-center flex-wrap py-4 gap-6'>
        {
          stepOneData.map((data,index)=>{
            return(
              <div key={data.label+index} onClick={()=>setActive(index)} className={`hover:text-black min-w-40  max-w-56 border p-1   cursor-pointer ${active === index ? "border-black" : "border-neutral-300" }`}>
                  <div className='flex'>
                    <Image
                        src={data.icon}
                        alt={data.label}
                        width={50}
                        height={30}

                    />
                    <p className='text-4xl'>{data.amt}</p>
                  </div>
                <p className='px-2'>{data.label}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default StepThree
