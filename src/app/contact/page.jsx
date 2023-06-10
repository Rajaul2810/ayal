import React from 'react'
import contact from '../../../public/contact.svg'
import Image from 'next/image'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'


const Contact = () => {

    return (
        <section className=''>
            <div className=' flex justify-center items-center pt-20 pb-10 p-5 bg-white'>
                <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-content-center '>
                    <div>
                        <p className=' text-6xl font-bold'>GET IN <br /> TOUCH</p>
                        <div className=''><div className=' bg-gradient-to-r from-indigo-600 to-indigo-500 h-2 w-20 shadow-indigo-500/50 shadow-md '></div></div>
                        <p className=' text-lg pb-5 pt-5'>Send us a note and we will be in touch shortly.</p>
                        <div className=' flex mb-2'>
                            <p className=' bg-gradient-to-r from-indigo-600 to-indigo-500 p-3 w-10 h-10 rounded-full  shadow-indigo-500/50 shadow-md'><FiMapPin color='white' /></p>
                            <p className=' ms-5 text-gray-500'>House 25, Road 35, Gulshan 2,<br /> Dhaka 1212, Bangladesh</p>
                        </div>
                        <div className=' flex mb-2'>
                            <p className=' bg-gradient-to-r from-indigo-600 to-indigo-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiMail color='white' /></p>
                            <p className=' ms-5 text-gray-500 pt-3'>info@ayalcorp.com</p>
                        </div>
                        <div className=' flex mt-4'>
                            <p className=' bg-gradient-to-r from-indigo-600 to-indigo-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiPhone color='white' /></p>
                            <p className=' ms-5 text-gray-500 pt-3'>+880 1854555534</p>
                        </div>
                        {/* <Image src={contact} alt='contact' height='100%' /> */}
                    </div>
                    <div className='shadow-md rounded-md p-5 w-full'>
                        <form action="">
                            <div className='pb-3 pt-3'>
                                <label htmlFor="">Name</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='name' required placeholder='Enter name' />
                            </div>
                            <div className='pb-3 pt-3'>
                                <label htmlFor="">Email</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='email' placeholder='Enter email' />
                            </div>
                            <div className='pb-3 pt-3'>
                                <label htmlFor="">Phone</label><br />
                                <input className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="number" name='phone' placeholder='Enter phone number' />
                            </div>
                            
                            <div className='pb-3 pt-3'>
                                <label htmlFor="">Message</label><br />
                                <textarea rows={2} className=' bg-gray-50 p-3 border border-gray-400 w-full rounded-md' type="text" name='message' placeholder='Enter message' />
                            </div>
                            <input className=' bg-gradient-to-r from-indigo-600 to-indigo-500 border-none shadow-indigo-500/50 shadow-lg py-3 px-4 w-40  rounded-3xl text-white font-bold transform hover:scale-105 duration-150 cursor-pointer' type="button" value='SEND' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact