import { Link } from "react-router-dom";
import SectionsHeaderComp from "./SectionsHeaderComp";

export default function AboutTeam() {
    return (
        <div>
            <section id="about-us" className="">
                <div className="relative w-full bg-[url(/public/images/AboutTeamSectionimg.jpg)] bg-cover h-[500px] flex flex-col gap-4 justify-center items-center p-[60px] text-white">
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(4,173,230,0.5)] to-transparent"></div>
                    <h2 className="font-bold text-[48px] m-auto w-[50%] relative z-10">Get to Know Our Team</h2>
                </div>
                <div className="container m-auto w-[85%] py-[160px]">
                    <SectionsHeaderComp title={"About Us"} link={""} linkUrl={'../login'} />
                    <div className="items flex justify-between flex-wrap ">
                        <div className="item ideaAndSupervision w-[33%] rounded-xl p-4 bg-secondary-lightBackground flex flex-col gap-7">
                            <h3 className="capitalize text-2xl font-bold " >idea And Supervision</h3>
                            <div className="members flex flex-col ">
                                <div className="member  p-3 flex items-center  gap-4">
                                    <div className="imageWraper w-[75px] h-[75px] ">
                                        <img src="/images/teamImages/DrMohammedMareeimg.jpg" className="w-full aspect-square object-cover rounded-full" alt="Dr Mohammed Maree img" />
                                    </div>
                                    <div className="text">
                                        <h4 className="capitalize font-semibold">Dr.Mohammed Maree</h4>
                                        <div className="social flex gap-4">
                                            <Link className="linkedin" target="_blank" to={"https://www.linkedin.com/in/mohammed-maree-a52ba131/"}>
                                                <img src="/icons/linkedinIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member  p-3 flex items-center  gap-4">
                                    <div className="imageWraper w-[75px] h-[75px] ">
                                        <img src="/images/teamImages/DrSanadMalayshaimg.jpg" className="w-full aspect-square object-cover rounded-full" alt="Dr Sanad Malaysha img" />
                                    </div>
                                    <div className="text">
                                        <h4 className="capitalize font-semibold">Dr.Sanad Malaysha</h4>
                                        <div className="social flex gap-4">
                                            <Link className="linkedin" target="_blank" to={"https://www.linkedin.com/in/sanad-malaysha/"}>
                                                <img src="/icons/linkedinIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item ideaAndSupervision w-[33%] rounded-xl p-4 bg-secondary-lightBackground flex flex-col gap-7">
                            <h3 className="capitalize text-2xl font-bold " >Development Team</h3>
                            <div className="members flex flex-col ">
                                <div className="member  p-3 flex items-center  gap-4">
                                    <div className="imageWraper w-[75px] h-[75px] ">
                                        <img src="/images/teamImages/MohammedAbuMuallaimg.jpg" className="w-full aspect-square object-cover rounded-full" alt="Mohammed abu muall img" />
                                    </div>
                                    <div className="text">
                                        <h4 className="capitalize font-semibold">Mohammed Abu Mualla</h4>
                                        <div className="social flex gap-4">
                                            <Link className="linkedin" target="_blank" to={"https://www.linkedin.com/in/mohammad-burhan-abu-mualla/"} >
                                                <img src="/icons/linkedinIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                            <Link className="github" target="_blank" to={"https://github.com/AbuMulla-Mohammad"}>
                                                <img src="/icons/githubIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="member  p-3 flex items-center  gap-4">
                                    <div className="imageWraper w-[75px] h-[75px] ">
                                        <img src="/images/teamImages/AmirSubaih.jpg" className="w-full aspect-square object-cover rounded-full" alt="Amir Subaih img" />
                                    </div>
                                    <div className="text flex flex-col gap-2">
                                        <h4 className="capitalize font-semibold">Amirr Subaih</h4>
                                        <div className="social flex gap-4">
                                            <Link className="linkedin" target="_blank" to={"https://www.linkedin.com/in/amir-subaih-b7ba002a1/"}>
                                                <img src="/icons/linkedinIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                            <Link className="github" target="_blank" to={"https://github.com/Amir-Subaih"}>
                                                <img src="/icons/githubIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item ideaAndSupervision w-[33%] rounded-xl p-4 bg-secondary-lightBackground flex flex-col gap-7">
                            <h3 className="capitalize text-2xl font-bold " >Hosted at</h3>
                            <div className="members flex flex-col ">
                                <div className="member  p-3 flex items-center  gap-4">
                                    <div className="imageWraper w-[75px] h-[75px] ">
                                        <img src="/images/teamImages/HassibSabbaghInformationTechnologyCenterOfExcellence(HSITCE)img.jpg" className="w-full aspect-square object-cover rounded-full" alt="Mohammed abu muall img" />
                                    </div>
                                    <div className="text">
                                        <h4 className="capitalize font-semibold">Hassib Sabbagh Information Technology Center of Excellence(HSITCE)</h4>
                                        <div className="social flex gap-4">
                                            <Link className="linkedin" target="_blank" to={"https://www.linkedin.com/company/hassib-sabbagh-it-center-of-excellence/"}>
                                                <img src="/icons/linkedinIcon.svg" className="w-[20px] transition-all duration-300 hover:scale-110" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
