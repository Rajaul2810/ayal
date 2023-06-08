"use client"
import Link from 'next/link'
import React from 'react'
// import bg from '../../../public/bg2'

const Header = () => {
    return (
        <section className=' w-full bg-indigo-600 pt-5 pb-5'>
            <div >
                <div className=' p-5 md:ps-40'>
                    <h1 className=' text-white text-6xl font-extrabold '>WE <span ><br /> HELP </span> <br /> YOU</h1><hr className=' w-1/4 pb-8' />
                    <h1 className=' text-pink-600 text-6xl font-extrabold font-serif'><span >TO</span> GROW </h1><hr className=' w-1/4 pb-8' />
                    <h1 className=' text-white text-6xl font-extrabold pb-10'><span >YOUR <br /></span> BUSINESS</h1>
                    <Link href='/contact'>
                        <button className=' bg-yellow-300 border-none shadow-yellow-500/50 shadow-lg py-3 px-4 w-40  rounded-3xl text-black font-bold transform hover:scale-105 duration-150 cursor-pointer animate-pulse'>CONTACT</button>

                    </Link>

                </div>
            </div>
        </section>
    )
}

export default Header