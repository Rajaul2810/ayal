"use client"
import React from 'react'
import services1 from '../../../public/services1.png'
import services2 from '../../../public/services2.png'
import services3 from '../../../public/services3.png'
import services4 from '../../../public/services4.png'
import services5 from '../../../public/services5.png'
import Image from 'next/image'
import { motion } from "framer-motion"

const services = [
    {
        id: 1,
        name: 'Business Email & Hosting Solutions',
        description: 'Your capacity to effectively compete with bigger companies is made possible by the solution provided by AyAl Corp Ltd. Our feature set gives you access to “big company capabilities” in email collaboration, user and domain setup, and the certainty that your interactions are safe and dependable. Utilize your resources by using a high-end outsourced email solution that is priced to provide you with a genuine return on what may be your most significant investment: communication.',
        icon: services1
    },
    {
        id: 2,
        name: 'Digital Marketing & SEO',
        description: 'For your brand to differentiate itself from the competition, AyAl Corp. Ltd. offers customized digital marketing solutions. Our committed SEO team, which is made up of an auditor, a researcher, and an SEO specialist, can provide a strong foundation for your website. Whether you are looking for short-term services like keyword research, page speed optimization, or on-site SEO, We are totally capable of offering you a long-term solution to develop organic internet growth.',
        icon: services2
    },
    {
        id: 3,
        name: 'Web Design & Development',
        description: 'AyAl Corp Ltd. is a leading Web design and development company. We provide flexible, and affordable web design and development services for our global clients. We offer top-notch web design services and solutions for eCommerce, Mobile, Web app and more. With decades of experience in web design and development, we can help you with custom web design and development services.',
        icon: services3
    },
    {
        id: 4,
        name: 'Cloud Storage',
        description: 'Access your data from nearly anywhere in the world using Cloud Storage, a secure and easy way to store, access, and protect your data via our high-speed network.',
        icon: services4
    },
    {
        id: 5,
        name: 'Social Media Management',
        description: 'Social Media has changed the way we interact & do business while creating a new avenue to grow our earning exponentially.',
        icon: services5
    },
    {
        id: 6,
        name: 'Content Writing',
        description: 'A content writer can improve website engagement and motivate visitors.',
        icon: services2
    },
    {
        id: 7,
        name: 'Graphic Design',
        description: 'We can convey ideas creatively through texts & images.',
        icon: services1
    },

]

const Services = () => {
    return (
        <div className='pt-12 pb-12 bg-gray-50'>
            <h1 className=' text-center text-4xl font-extrabold'>Our Services</h1>
            <div className=' flex justify-center'>
                <div className=' bg-gradient-to-r from-green-500 to-lime-400 h-1 w-28 rounded-md shadow-green-500/50 shadow-md '></div>
            </div>
            <div className=' flex justify-center  px-4 sm:px-4 md:px-6 mt-12'>
                <div className=' gap-4 w-full sm:w-full  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 md:m-5'>

                    {
                        services.map(service =>
                            <motion.div animate='show'
                                transition={{ ease: "easeOut", duration: 2 }} className=' flex justify-center shadow-gray-300/30 shadow-lg ' key={service.id}>
                                <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                    <div className=' flex justify-center'>
                                        <Image src={service.icon} alt='service' height={150} />
                                    </div>
                                    <h1 className=' font-bold pt-5 text-xl text-center'>{service.name}</h1>
                                    <p className=' text-gray-500 text-sm pt-2 pb-2 p-2 text-justify'>{service.description}</p>
                                </div>
                            </motion.div>
                        )
                    }


                </div>
            </div>

        </div>
    )
}

export default Services