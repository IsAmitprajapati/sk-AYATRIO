import React from 'react'

const StepDataShow = ({data}) => {
  return (
    <section className='w-full h-full p-2 py-5'>
        <div className='container mx-auto'>
            <p className='font-semibold text-lg'>Step {data.step}</p>
            <h2 className='font-bold text-4xl my-2'>{data.heading}</h2>
            <p>{data.tagline}</p>
            <div>
               { data.component }
            </div>
        </div>
    </section>
  )
}

export default StepDataShow
