import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Top = () => {

    const topNavigation = [
        {
            label : "Live Shopping",
            href : "/live-shopping",
            icon : '/assets/liveshopping.svg'
        },
        {
            label : "Designer Request",
            href : "/designer-request",
            icon : ''
        },
        {
            label : "Free Sample Request",
            href : "/designer-request",
            icon : ''
        },
        {
            label : "Help",
            href : "/help",
            icon : ''
        }
    ]
  return (
    <section className='hidden lg:flex items-center font-medium px-4 py-2 bg-gray-100'>
        <nav className='flex items-center gap-3'>
            <Link href={"/"} className='hover:underline'>
                For you
            </Link>
            <Link href={"/"} className='hover:underline'>
                For business
            </Link>
        </nav>

        <nav className='ml-auto w-fit flex items-center gap-2 '>
            {
                topNavigation.map((nav,index)=>{
                    return(
                        <div className='text-sm font-light flex items-center gap-1' key={nav.label+index}>
                            { (index !== 0)  && (topNavigation.length !== index-1) && <span>|</span> }
                            <Link href={nav.href} className='hover:underline flex items-center gap-1'>
                            {
                               nav.icon && (
                                <Image
                                    src={nav.icon}
                                    alt={nav.label}
                                    width={18}
                                    height={18}
                                />
                               ) 
                            }
                            <span>{nav.label}</span>
                            </Link>
                        </div>
                    )
                })
            }
            
        </nav>
    </section>
  )
}

export default Top
