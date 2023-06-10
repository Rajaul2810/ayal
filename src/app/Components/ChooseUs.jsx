import React from 'react'
import { AiOutlineSafety } from "react-icons/ai";
import { FiHeart } from 'react-icons/fi';
import { BiSupport } from 'react-icons/bi';
import { FaUserTie } from 'react-icons/fa';

const ChooseUs = () => {
    return (
        <div className='pt-20 pb-20 bg bg-no-repeat bg-cover bg-center bg-fixed bg-indigo-500 bg-opacity-40 '>
            <div className=' '>
                <h1 className=' text-white font-extrabold text-6xl ps-16'>WHY <br />CHOOSE US</h1>
                <div className='ps-16 pb-10'><div className=' bg-gradient-to-r from-indigo-600 to-indigo-500 h-2 w-20 shadow-indigo-500/50 shadow-md '></div></div>
                <div className=' flex justify-center  px-4 sm:px-4 md:px-12 '>
                    <div className=' gap-5 w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                        <div className='flex justify-center items-center gap-4   shadow-md bg-white rounded-md p-5 transform hover:-translate-x-4 duration-500'>
                            <p className=' rounded-full bg-indigo-500 p-3 shadow-indigo-500/50 shadow-lg'><AiOutlineSafety size={40} color='white' /></p>
                            <div>
                                <p className=' font-bold text-lg'>Safe</p>
                                {/* <p className=' text-gray-600 text-sm text-justify'>We ensure the safety of customer information and document. </p> */}
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4   shadow-md bg-white rounded-md p-5 transform hover:translate-x-4 duration-500'>
                            <p className=' rounded-full bg-indigo-500 p-3 shadow-indigo-500/50 shadow-lg'><FiHeart size={40} color='white' /></p>
                            <div>
                                <p className=' font-bold text-lg'>Passionate</p>
                                {/* <p className=' text-gray-600 text-sm text-justify'>When it comes to handling our customers’ projects we make sure that the project is handled by someone who is not only an expert but also has complete dedication towards work.</p> */}
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4   shadow-md bg-white rounded-md p-5 transform hover:-translate-x-4 duration-500'>
                            <p className=' rounded-full bg-indigo-500 p-3 shadow-indigo-500/50 shadow-lg'><FaUserTie size={40} color='white' /></p>
                            <div>
                                <p className=' font-bold text-lg'>Professional</p>
                                {/* <p className=' text-gray-600 text-sm text-justify'>We deliver solutions that are high quality, technically advanced & high performance. The solutions we develop are not only visually stunning or user-friendly but are also high performance solutions, which deliver tangible results.</p> */}
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4   shadow-md bg-white rounded-md p-5 transform hover:translate-x-4 duration-500'>
                            <p className=' rounded-full bg-indigo-500 p-3 shadow-indigo-500/50 shadow-lg'><BiSupport size={40} color='white' /></p>
                            <div>
                                <p className=' font-bold text-lg'>24x7 Support</p>
                                {/* <p className=' text-gray-600 text-sm text-justify'>We think providing exceptional customer service is our USP, our main strength. We take pride in providing outstanding services to our clients.</p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChooseUs