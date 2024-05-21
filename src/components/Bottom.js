'use client'
import { handleSetStep } from '@/store/ayatrioSlice'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Bottom = () => {
    const dataStep = useSelector(state => state.stepData)
    const dispatch = useDispatch()

    const steps = [
        {
            step : 1,
            selected : dataStep.step > 0
        },
        {
            step : 2,
            selected : dataStep.step > 1
        },
        {
            step : 3,
            selected : dataStep.step > 2
        }
    ]
    const handleNext = ()=>{
        dispatch(handleSetStep(dataStep.step + 1))
    }

    const handlePrevious = ()=>{
        dispatch(handleSetStep(dataStep.step - 1))
    }

  return (
    <section className='sticky bottom-0 h-16 bg-white'>
        <div className='flex items-center gap-2 w-full'>
            {
                steps.map((step,index)=>{
                    return(
                        <div key={step.step+index} className={` h-2 w-full rounded ${step.selected ? "bg-black" : "bg-gray-300"} `}>
                        </div>
                    )
                })
            }
        </div>
        <div className='h-14 flex justify-between items-center  container mx-auto '>
            <button className='text-lg font-bold border-2 border-transparent hover:border-black  py-1 px-6 rounded-full' disabled={dataStep.step === 1} onClick={()=>handlePrevious()}>Back</button>
            <button className='text-lg font-bold bg-black text-white py-1 px-6 rounded-full hover:bg-gray-800' disabled={dataStep.step === 3} onClick={()=>handleNext()}>Next</button>
        </div>
    </section>
  )
}

export default Bottom
