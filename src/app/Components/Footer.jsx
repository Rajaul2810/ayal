// components/Footer.js

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800">
            <div className="max-w-7xl w-full md:w-3/4 mx-auto grid gap-5 grid-cols-1 md:grid-cols-3 py-8 px-4 sm:px-6 lg:px-8">
                <div className='mb-5'>
                    <h2 className="text-white text-xl font-semibold">Ayal Corp Limited</h2>
                    <p className="text-gray-400">Ayal Corp Limited, House 25, Road 35, Gulshan 2, Dhaka 1212, Bangladesh</p>
                </div>
                <div className="flex justify-between mb-6">

                    <div className="">
                        <h2 className="text-white text-lg font-semibold">Quick Link</h2>
                        <Link href="/services">
                            <p className="text-gray-400 hover:text-gray-300">Services</p>
                        </Link>
                        <Link href="/about">
                            <p className="text-gray-400 hover:text-gray-300">About</p>
                        </Link>
                        <Link href="/contact">
                            <p className="text-gray-400 hover:text-gray-300">Contact</p>
                        </Link>
                        <Link href="/whyUs">
                            <p className="text-gray-400 hover:text-gray-300">Why Us</p>
                        </Link>
                    </div>
                </div>
                <div className='mb-5'>
                    <h2 className="text-white text-lg font-semibold">Social Link</h2>
                    <div className="mt-4">

                        <ul className="flex space-x-4">

                            <li>
                                <p
                                    href="https://www.facebook.com/profile.php?id=100088669787964"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                >
                                    <FaFacebook size={20} />
                                </p>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100088669787964"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                >
                                    <FaTwitter size={20} />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://www.facebook.com/profile.php?id=100088669787964"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                >
                                    <FaInstagram size={20} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Ayal Corp Limited. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
