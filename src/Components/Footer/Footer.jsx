import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { RiInstagramLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
const Footer = () => {
    const bg = 'demo-charity-footer-bg.png'
    return (
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }} className=" pt-[90px] z-20 relative divide-y divide-white/10">
            <div className="pb-10 border-b-[#dee2e6]">
                <div className="font-oto text-[38px] text-white text-center ">We need your small help. <a className="text-primary hover:text-primary-light underline underline-offset-8" href="#">Get Involved</a></div>
            </div>
            <div>

                <div className="w-full px-3 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl xxl:max-w-xxl flex flex-wrap py-[3%] gap-x-5 gap-y-9">

                    <div className="w-full sm:w-[calc(50%-20px)] md:w-full lg:flex-1  lg:px-4">
                        <div className="flex flex-col h-full justify-center align-middle">
                            <Link href='/' className='flex relative items-center'>
                                <img src='/logo.jpg' alt='Logo' className='w-10 h-10' />
                                <h1 className='text-3xl font-oto text-white  ml-2'>Charity</h1>
                            </Link>
                            {/* <div>
                                <p className="uppercase text-sm font-semibold text-white tracking-wider">Rising Money</p>
                                <p className="text-primary text-3xl font-oto">$90,320</p>
                            </div> */}
                        </div>
                    </div>
                    <div className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:flex-1  lg:px-4">
                        <h3 className="uppercase text-white mb-1 text-sm font-semibold tracking-wide">Get In Touch</h3>
                        <p className="text-base text-white/50 mb-2 break-words leading-7
                        ">27 Sondanella, Eden walk, Eden centre,Paris</p>
                        <div>
                            <span className="flex items-center gap-[10px]">
                                <FiPhoneCall className="text-primary text-[17px]" /><a className="text-[17px] text-white hover:text-primary" href="#"> +1 234 567 890</a>
                            </span>
                            <span className="flex items-center gap-[10px]">
                                <MdOutlineMailOutline className="text-primary text-[17px]" /><a className="text-[17px] text-white underline underline-offset-[5px] hover:text-primary" href="#">info@charity.com</a>
                            </span>
                        </div>
                    </div>
                    <div className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:flex-1  lg:px-4">
                        <h3 className="uppercase text-white mb-1 text-sm font-semibold tracking-wide">About Foundation</h3>
                        <p className="text-base text-white/50 mb-2 break-words leading-7
                        ">Foundation was seeded on march 2008. Foundation is a non profit and registered society.</p>
                    </div>
                    <div className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.33%-20px)] lg:flex-1  lg:px-4">
                        <h3 className="uppercase text-white mb-4 text-sm font-semibold tracking-wide">Social Connect</h3>

                        <div className="flex ">
                            <a href="#" className="w-10 h-10 rounded-full border border-medium-grey hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center">
                                <ImFacebook className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-medium-grey hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center ml-4">
                                <RiInstagramLine className="text-white" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-medium-grey hover:border-primary hover:bg-primary hover:text-white flex items-center justify-center ml-4">
                                <BsTwitter className="text-white" />
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;