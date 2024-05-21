'use client'

import React from 'react'
import Top from './Top'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

   const headerNavigation = [
        {
            label : "Home Decor",
            href : "/home-decor",
        },
        {
            label : "Wall Decor",
            href : "/wall-decor",
        },
        {
            label : "Floor",
            href : "/floor",
        },
        {
            label : "Rooms",
            href : "/rooms",
        },
        {
            label : "Offers",
            href : "/offers",
        },
        {
            label : "New",
            href : "/new",
        },
   ] 
  return (
    <header className='sticky top-0 w-full h-14 bg-white px-4 flex items-center justify-between'>
        <div className=''>
                <Image
                    src={'/assets/logo.webp'}
                    alt='logo'
                    width={150}
                    height={64}
                />
        </div>

        <nav className='hidden lg:flex items-center gap-2'>
            {
                headerNavigation.map((nav,index)=>{
                    return(
                        <Link href={nav.href} key={nav.label+index+"headerNavigation"} className='font-bold px-1'>
                            {nav.label}
                        </Link>  
                    )
                })
            }
        </nav>

        <div className='flex items-center gap-4'>
            <div className='flex items-center bg-white max-w-36 px-3 py-2 rounded-full border border-transparent focus-within:border-black'>
                <Image
                    src={"/assets/search.svg"}
                    alt='search'
                    width={20}
                    height={20}
                />
                <input 
                    type='text'
                    className='bg-transparent px-1 outline-none border-none'
                    placeholder='Search'
                />
            </div>

            <Link href={"/like"}>
                <Image
                        src={"/assets/like.svg"}
                        alt='like'
                        width={23}
                        height={23}
                />
            </Link>
            <Link href={"/adtocart"}>
                <Image
                        src={"/assets/adtocart.svg"}
                        alt='like'
                        width={23}
                        height={23}
                />
            </Link>
            <Link href={"/profile"}>
                <Image
                        src={"/assets/profile.svg"}
                        alt='like'
                        width={23}
                        height={23}
                />
            </Link>
        </div>
        
    </header>
  )
}

export default Header
