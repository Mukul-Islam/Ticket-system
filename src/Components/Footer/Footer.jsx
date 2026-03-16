import React from 'react';
import img1 from '../../assets/facebook.png';
import img2 from '../../assets/gmail.png';
import img3 from '../../assets/Group.png';
import img4 from '../../assets/linkdin.png';

const Footer = () => {
    return (
        <div className='px-6 md:px-[120px] bg-black py-10'>
            <div className='flex flex-wrap justify-between gap-6'>

                {/* First Column */}
                <div className='w-full md:flex-1'>
                    <h1 className='font-bold text-white text-lg mb-3'>CS — Ticket System</h1>
                    <p className='text-gray-300 text-sm leading-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>

                {/* Company */}
                <div className='w-full md:flex-1'>
                    <h1 className='font-bold text-white mb-3'>Company</h1>
                    <p className='text-gray-300 mb-1'>About Us</p>
                    <p className='text-gray-300 mb-1'>Our Mission</p>
                    <p className='text-gray-300 mb-1'>Contract Sales</p>
                </div>

                {/* Services */}
                <div className='w-full md:flex-1'>
                    <h1 className='font-bold text-white mb-3'>Services</h1>
                    <p className='text-gray-300 mb-1'>Products & Services</p>
                    <p className='text-gray-300 mb-1'>Customer Stories</p>
                    <p className='text-gray-300 mb-1'>Download Apps</p>
                </div>

                {/* Information */}
                <div className='w-full md:flex-1'>
                    <h1 className='font-bold text-white mb-3'>Information</h1>
                    <p className='text-gray-300 mb-1'>Privacy Policy</p>
                    <p className='text-gray-300 mb-1'>Terms & Condition</p>
                    <p className='text-gray-300 mb-1'>Join Us</p>
                </div>

                {/* Social Links */}
                <div className='w-full md:flex-1'>
                    <h1 className='font-bold text-white mb-3'>Social Links</h1>
                    <div className='flex items-center mb-2 gap-2'>
                        <img src={img1} alt="" className='w-6 h-6' />
                        <p className='text-gray-300 text-sm'>@CS — Ticket System</p>
                    </div>
                    <div className='flex items-center mb-2 gap-2'>
                        <img src={img2} alt="" className='w-6 h-6' />
                        <p className='text-gray-300 text-sm'>@CS — Ticket System</p>
                    </div>
                    <div className='flex items-center mb-2 gap-2'>
                        <img src={img3} alt="" className='w-6 h-6' />
                        <p className='text-gray-300 text-sm'>@CS — Ticket System</p>
                    </div>
                    <div className='flex items-center mb-2 gap-2'>
                        <img src={img4} alt="" className='w-6 h-6' />
                        <p className='text-gray-300 text-sm'>@CS — Ticket System</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;