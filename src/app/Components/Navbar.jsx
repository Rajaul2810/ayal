"use client"
import React, { useState } from 'react'
import {  BsMenuButtonWideFill, BsFillBackspaceFill } from 'react-icons/bs';
import Link from 'next/link';
import logo from '../../../public/logo.png'
import Image from 'next/image';


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <section>
            <section>
                <div className='flex justify-center items-center'>
                    <nav className=' flex justify-between w-full   bg-white shadow-md pe-5 ps-5 pt-2 pb-2 border-b-4 border-indigo-600'>
                        

                        <div className=' flex items-center ms-10 max-md:ms-0'>
                            <Image src={logo} alt='logo' height={120} width={120}/>
                        </div> 
                        <div className=' hidden md:block'>
                            <div className=' flex justify-center items-center gap-5 h-16 text-gray-700'>
                                <p><Link href="/" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>HOME</Link></p>
                                <Link  href="/services" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>SERVICES</Link>
                                <Link  href="/whyUs" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>WHY US</Link>
                                <Link  href="/about" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>ABOUT</Link>
                                <Link  href="/contact" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>CONTACT</Link>
                            </div>
                        </div>

                        {/* mobile */}
                        <div className='ms-10 flex justify-evenly items-center md:hidden'>
                            <button onClick={() => setIsOpen(!isOpen)} aria-controls='mobile-menu' aria-expanded='false' className=' text-black p-2'>
                                {!isOpen ? (
                                    <BsMenuButtonWideFill size={20} />
                                ) : (
                                    <BsFillBackspaceFill size={20} />
                                )}
                            </button>

                        </div>

                    </nav>

                </div>
                {
                    isOpen && (
                        <div className='flex flex-col md:hidden justify-center items-center gap-1 p-2 bg-white rounded-lg m-2 text-gray-700'>
                            <p><Link  href="/" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>Home</Link></p>
                            <Link  href="/services" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>Services</Link>
                            <Link  href="/whyUs" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>Why Us</Link>
                            <Link href="/about" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>About</Link>
                            <Link  href="/contact" className=' cursor-pointer hover:bg-gradient-to-r from-indigo-600 to-indigo-500 p-2 rounded-md hover:text-white font-semibold '>Contact</Link>
                        </div>
                    )
                }
            </section>
        </section>
    )
}
