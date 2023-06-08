import Image from 'next/image'
import React from 'react'
import about from '../../../public/about.jpg'

const About = () => {
    return (
        <div className=' bg_about bg-cover bg-fixed'>
            <div className='bg-indigo-500 bg-opacity-60 pt-12 pb-12'>
                <h1 className='ps-4 md:ps-16 text-6xl font-extrabold text-white'>OUR <br /> STORY</h1>
                <div className='ps-4 md:ps-16 pb-10'><div className=' bg-gradient-to-r from-indigo-400 to-indigo-300 h-2 w-20 shadow-indigo-500/50 shadow-md '></div></div>
                <div className='  px-4 sm:px-4 md:px-12'>
                    <div className=' text-justify md:ps-16 md:pe-16'>
                        <p className=' text-white pt-5 pb-8 text-lg font-medium '>AyAl Corp was founded in 2010 with the goal of providing IT-enabled services to the local clients. After a few initial projects, it invested in a startup offering innovative services to mobile phone users incorporating artificial intelligence technology and also salesforce monitoring system.</p>
                        <p className=' text-white pb-8 text-lg font-medium'>The Company was transformed into a private limited company in 2015 after its portfolio started growing. Since then, it has invested in a number of local startups offering products and services I the areas of software & ITES, EdTech & HR development, and BPO. Now, it has become a one-stop solution for all types of Technological needs.</p>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default About