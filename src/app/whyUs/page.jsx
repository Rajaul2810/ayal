import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { FiHeart } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';

const WhyUs = () => {
    return (
        <div className='pt-12 pb-12 bg-gradient-to-r from-green-400 to-lime-300'>
            <h1 className=' text-center text-4xl font-extrabold'>Why Choose Us</h1>
            <div className=' flex justify-center'>
                <div className=' bg-gradient-to-r from-green-500 to-lime-400 h-1 w-28 rounded-md shadow-green-500/50 shadow-md '></div>
            </div>
            <div className=' flex justify-center  px-4 sm:px-4 md:px-12 mt-12'>
                <div className=' gap-5 w-full md:w-3/4  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='flex justify-center items-center gap-4 border-l-4 border-indigo-500 shadow-sm bg-white rounded-md p-5'>
                        <p className=' rounded-full bg-green-200 p-3 shadow-green-500/50 shadow-lg'><AiOutlineSafety size={40}  /></p>
                        <div>
                            <p className=' font-bold text-lg'>Safe</p>
                            <p className=' text-gray-600 text-sm text-justify'>We ensure the safety of customer information and document. </p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-l-4 border-indigo-500 shadow-sm bg-white rounded-md p-5'>
                        <p className=' rounded-full bg-green-200 p-3 shadow-green-500/50 shadow-lg'><FiHeart size={40}  /></p>
                        <div>
                            <p className=' font-bold text-lg'>Passionate</p>
                            <p className=' text-gray-600 text-sm text-justify'>When it comes to handling our customers’ projects we make sure that the project is handled by someone who is not only an expert but also has complete dedication towards work.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-l-4 border-indigo-500 shadow-sm bg-white rounded-md p-5'>
                        <p className=' rounded-full bg-green-200 p-3 shadow-green-500/50 shadow-lg'><FaUserTie size={40}  /></p>
                        <div>
                            <p className=' font-bold text-lg'>Professional</p>
                            <p className=' text-gray-600 text-sm text-justify'>We deliver solutions that are high quality, technically advanced & high performance. The solutions we develop are not only visually stunning or user-friendly but are also high performance solutions, which deliver tangible results.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-4 border-l-4 border-indigo-500 shadow-sm bg-white rounded-md p-5'>
                        <p className=' rounded-full bg-green-200 p-3 shadow-green-500/50 shadow-lg'><BiSupport size={40}  /></p>
                        <div>
                            <p className=' font-bold text-lg'>Support</p>
                            <p className=' text-gray-600 text-sm text-justify'>We think providing exceptional customer service is our USP, our main strength. We take pride in providing outstanding services to our clients.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default WhyUs