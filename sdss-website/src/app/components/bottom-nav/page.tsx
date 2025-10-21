// components/BottomNav.js
import Link from 'next/link';

const BottomNav = () => (
    <>
        <div className="w-full h-20 bg-transparent sticky top-0 lg:pb-60 padding-bottom ">
            <div className="container mx-auto px-4 h-full">
                <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center h-full">
                    <div className='flex lg:flex-row flex-row gap-x-8 mt-6 items-start mb-10 lg:order-1 order-2'>
                        <div className='flex flex-row items-center'>
                            <img className='w-10 object-contain' src="/sdss-icon-bottom.png" alt="SDSS Logo" />
                            <div className='heading bottom-nav-sdss-gradient lg:pl-5 pl-2'>SDSS</div>
                        </div>

                        <img className='h-10 object-contain lg:pl-10 pl-0' src="/uoft-icon.png" alt="UofT Logo" />
                    </div>

                    <ul className="flex lg:flex-row flex-col gap-x-20 gap-y-4 lg:order-2 order-1">
                        <div className='flex flex-col gap-y-2'>
                            <div className='body-regular black'>CONTACT US</div>
                            <li>
                                <Link className="body-regular purple" href="mailto:sdss.uoft@gmail.com">
                                    <u>sdss.uoft@gmail.com</u>
                                </Link>
                            </li>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='body-regular black'>SOCIALS</div>

                            <ul>
                                <li>
                                    <Link className="body-regular purple" href="https://www.instagram.com/sdssuoft" target="_blank" rel="noopener noreferrer">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link className="body-regular purple" href="https://www.linkedin.com/company/sdssuoft" target="_blank" rel="noopener noreferrer">
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link className="body-regular purple" href="https://discord.com/invite/GWEtFzvBBe" target="_blank" rel="noopener noreferrer">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </ul>
                </div>
            </div>
        </div>
    </>
);

export default BottomNav;