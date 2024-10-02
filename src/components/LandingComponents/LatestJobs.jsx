import { Link } from "react-router-dom";
import SectionsHeaderComp from "./SectionsHeaderComp";

export default function LatestJobs() {
    return (
        <section className="py-[150px]">
            <div className="container m-auto w-[85%]">
                <SectionsHeaderComp title={"Latest featured jobs"} link={"Explore more"} linkUrl={'../login'} />
                <div className="sectionContent">
                    <div className="items flex justify-evenly items-center ">
                        <div className="item w-[31%] shadow-md  flex flex-col  overflow-hidden rounded-[20px] bg-white ">
                            <div className="imageWraper w-full ">
                                <img className="w-full h-[170px] " src={`/public/images/img2LatestJobSection.jpg`} alt="item image " />
                            </div>
                            <div className="p-[25px] flex flex-col gap-[25px]">
                                <div className="itemHeader">
                                    <h3 className="font-bold text-[24px]">Customer Service</h3>
                                    <span>Sales, Service, & Support</span>
                                </div>
                                <div className="itemFooter flex flex-col gap-[11px]">
                                    <div className="type flex gap-3 items-center">
                                        <img src="/icons/clock.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="location flex gap-3 items-center">
                                        <img src="/icons/location.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Jenin</span>
                                    </div>
                                </div>
                                <Link to={"../login"} className={`flex justify-center items-center px-6 py-[14px] bg-primary rounded-md text-white font-semibold  border-2 border-primary transition-all duration-500 hover:bg-primary-light hover:text-primary  `}>Apply Now</Link>
                            </div>
                        </div><div className="item w-[31%] shadow-md  flex flex-col  overflow-hidden rounded-[20px] bg-white ">
                            <div className="imageWraper w-full ">
                                <img className="w-full h-[170px] object-cover " src={`/public/images/jobSectionImg4.png`} alt="item image " />
                            </div>
                            <div className="p-[25px] flex flex-col gap-[25px]">
                                <div className="itemHeader">
                                    <h3 className="font-bold text-[24px]">Full Stack</h3>
                                    <span>Full Stack</span>
                                </div>
                                <div className="itemFooter flex flex-col gap-[11px]">
                                    <div className="type flex gap-3 items-center">
                                        <img src="/icons/clock.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="location flex gap-3 items-center">
                                        <img src="/icons/location.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Ramallah</span>
                                    </div>
                                </div>
                                <Link to={"../login"} className={`flex justify-center items-center px-6 py-[14px] bg-primary rounded-md text-white font-semibold  border-2 border-primary transition-all duration-500 hover:bg-primary-light hover:text-primary  `}>Apply Now</Link>
                            </div>
                        </div><div className="item w-[31%] shadow-md  flex flex-col  overflow-hidden rounded-[20px] bg-white ">
                            <div className="imageWraper w-full ">
                                <img className="w-full h-[170px] " src={`/public/images/jobSectionImg3.png`} alt="item image " />
                            </div>
                            <div className="p-[25px] flex flex-col gap-[25px]">
                                <div className="itemHeader">
                                    <h3 className="font-bold text-[24px]">UI/UX</h3>
                                    <span>UI/UX Designer </span>
                                </div>
                                <div className="itemFooter flex flex-col gap-[11px]">
                                    <div className="type flex gap-3 items-center">
                                        <img src="/icons/clock.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Full-Time</span>
                                    </div>
                                    <div className="location flex gap-3 items-center">
                                        <img src="/icons/location.svg" alt="" className="w-[18px] h-[22px]" />
                                        <span>Nablus </span>
                                    </div>
                                </div>
                                <Link to={"../login"} className={`flex justify-center items-center px-6 py-[14px] bg-primary rounded-md text-white font-semibold  border-2 border-primary transition-all duration-500 hover:bg-primary-light hover:text-primary  `}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
