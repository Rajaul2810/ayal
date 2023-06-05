"use client"
import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div className='mt-20 pt-12 pb-12 bg-gradient-to-r from-gray-800 to-gray-900'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
                <div className=' flex justify-center  px-4 sm:px-4 md:px-12 mt-12'>
                    <div className=' gap-5 w-full md:w-3/4  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4'>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {
                                    counterOn && <p className=' text-center text-5xl text-green-500 font-extrabold '><CountUp duration={5} end={89} />+</p>
                                }
                                <p className='text-center text-white font-bold text-md'>Happy Client</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {counterOn && <p className=' text-center text-5xl text-green-500 font-extrabold '><CountUp duration={5} end={16} />+</p>
                                }
                                <p className='text-center text-white font-bold text-md'>Websites Launched</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                                {counterOn && <p className=' text-center text-5xl text-green-500 font-extrabold '><CountUp duration={5} end={60} />+</p>
                                }
                                <p className='text-center text-white font-bold text-md'>Social Campaigns</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-4 '>
                            <div>
                               {counterOn && <p className=' text-center text-5xl text-green-500 font-extrabold '><CountUp duration={5} end={7} />+</p>
                               }
                               <p className='text-center text-white font-bold text-md'>News</p>
                            </div>
                        </div>

                    </div>
                </div>
            </ScrollTrigger>

        </div>
    )
}

export default Counter