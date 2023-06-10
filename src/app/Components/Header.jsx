"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/logo_black.png'

const Header = () => {
    return (
        <section className=' w-full bg2 bg-cover pt-20 pb-20'>
            <div className=' grid grid-cols-1 md:grid-cols-2 place-items-center'>
                <div className=' p-5 md:ps-40'>
                    <h1 className=' text-black text-5xl font-extrabold '>WE <span > HELP </span>  YOU</h1><hr className=' w-1/4 pb-4' />
                    <h1 className=' text-pink-600 text-6xl font-extrabold font-serif'><span >TO</span> GROW </h1><hr className=' w-1/4 mt-4 ' />
                    <h1 className=' text-black text-5xl font-extrabold pb-10'><span >YOUR </span> BUSINESS</h1>
                    <Link href='/contact'>
                        <button className=' bg-indigo-500 border-none shadow-indigo-500/50 shadow-lg py-3 px-4 w-40  rounded-3xl text-white font-bold transform hover:scale-105 duration-150 cursor-pointer animate-pulse'>CONTACT</button>

                    </Link>
                
                </div>
                <div>
                    <Image src={logo} alt='logo' width={400}/>
                </div>
            </div>
        </section>
    )
}

export default Header