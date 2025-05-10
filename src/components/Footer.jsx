import React from 'react'
import { footerLinks } from '../utils/helper'
import iniIcon from '../assets/images/svg/in.svg'
import faceIcon from '../assets/images/svg/face.svg'
import cemraIcon from '../assets/images/svg/cemra.svg'
import xIcon from '../assets/images/svg/x.svg'
import billIcon from '../assets/images/png/bill.png'
import CustomContent from './common/CustomContent'

const Footer = () => {
    return (
        <footer className="bg-[url(./assets/images/png/Footer.png)] bg-cover bg-center text-white " >
            <div className=' container max-w-[1140px] mx-auto pt-[120px] md:pt-[180px] lg:pt-[234px] p-2 '>
                <div className="flex flex-col md:flex-row justify-between gap-10 ">
                    <div className="md:w-1/2">
                        <img src={billIcon} className='cursor-pointer'></img>
                        <CustomContent content=" Ut auctor nisi mauris eu tincidunt facilisi. Diam amet sollicitudin pretium
                        maecenas ornare lacus arcu adipiscing." className=" md:max-w-[297px] mt-7 opacity-90 text-white" />

                        <div>
                            <h4 className="font-bold mb-2 text-xl leading-[110%] mt-9">Follow Us</h4>
                            <div className="flex space-x-4 mt-4">
                                <a href="#"><img src={iniIcon} className='hover:transform hover:scale-125 transition duration-300'></img></a>
                                <a href="#"> <img src={faceIcon} className='hover:transform hover:scale-125 transition duration-300'></img></a>
                                <a href="#"> <img src={cemraIcon} className='hover:transform hover:scale-125 transition duration-300'></img></a>
                                <a href="#"><img src={xIcon} className='hover:transform hover:scale-125 transition duration-300'></img></a>

                            </div>
                        </div>
                    </div>
                    <div className="flex  gap-4 sm:gap-16 md:w-1/2 justify-between  md:justify-end">
                        <div>
                            <h4 className="text-xl font-bold mb-3 leading-[150%]">Quick Link</h4>
                            <ul className="space-y-3 ">
                                {footerLinks.quickLinks.map((link, index) => (
                                    <li key={index} className='text-base font-normal leading-[18px]  opacity-90 text-transform:capitalize '>
                                        <a href="#" className="hover:underline">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold mb-3 leading-[150%]">Services</h4>
                            <ul className="space-y-2 ">
                                {footerLinks.services.map((item, index) => (
                                    <li key={index} className='text-base font-normal leading-[18px]  opacity-90 text-transform:capitalize'>
                                        <a href="#" className="hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border-1 border-gray-500 w-full mt-[56px] opacity-90  '></div>
                <p className=' text-center justify-center items-center py-[20px] font-normal text-sm leading-[150%] opacity-90'>© 2025 BILL CENTRAL, Inc. All Rights Reserved.
                </p>
        </footer>
    )
}

export default Footer

