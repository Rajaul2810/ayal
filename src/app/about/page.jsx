import Image from 'next/image'
import React from 'react'
import about from '../../../public/about.jpg'

const About = () => {
    return (
        <div className='pt-12 pb-12 bg-green-50'>
            <h1 className=' text-center text-4xl font-extrabold'>Our Story</h1>
            <div className=' flex justify-center'>
                <div className=' bg-gradient-to-r from-green-500 to-lime-400 h-1 w-28 rounded-md shadow-green-500/50 shadow-md '></div>
            </div>
            <div className=' flex justify-center  px-4 sm:px-4 md:px-12 mt-12'>
                <div className=' gap-4 w-full md:w-3/4  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className=' text-justify'>
                     <p className=' text-gray-500 pt-5 pb-5'>AyAl Corp was founded in 2010 with the goal of providing IT-enabled services to the local clients. After a few initial projects, it invested in a startup offering innovative services to mobile phone users incorporating artificial intelligence technology and also salesforce monitoring system.</p>
                     <p className=' text-gray-500 pb-5'>The Company was transformed into a private limited company in 2015 after its portfolio started growing. Since then, it has invested in a number of local startups offering products and services I the areas of software & ITES, EdTech & HR development, and BPO. Now, it has become a one-stop solution for all types of Technological needs.</p>

                    </div>
                    <div className=' flex justify-center'>
                            <Image className=' rounded-lg place-self-center ' src={about} alt="h" height={500} width={450} />
                    </div>
                    

                </div>
            </div>

        </div>
    )
}

export default About