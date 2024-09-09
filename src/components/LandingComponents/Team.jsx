import { Link } from "react-router-dom";
import SectionsHeaderComp from "./SectionsHeaderComp";

export default function Team() {
    return (
        <section>
            <div className="w-full bg-[url(/public/images/GetHired.png)] bg-cover h-[350px] flex flex-col gap-4 justify-center items-center p-[60px] text-white ">
                <h2 className="font-bold text-[48px] m-auto w-[50%]">We are more than just a workplace. We are a family.</h2>
                <Link to={'../login'} className=" flex justify-center items-center bg-primary text-white font-semibold text-[16px] border border-primary w-[260px] h-[70px] rounded-md transition-all duration-500 hover:bg-primary-light  hover:text-primary">
                    Apply Now
                </Link>
            </div>
            <div className="container w-[85%] m-auto py-[150px]">
                <SectionsHeaderComp title={"Find your team"} link={"View all teams"} linkUrl={'../login'} />
                <div className="flex flex-row-reverse justify-between items-center">
                    <div className="start w-[62%] flex flex-wrap justify-between gap-y-7">
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Engineering & Tech
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus officia repellendus laudantium sunt magni a. Officiis
                                eveniet asperiores quam!

                            </p>
                        </div><div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                People
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus officia repellendus laudantium sunt magni a. Officiis
                                eveniet asperiores quam!

                            </p>
                        </div>
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Sales, Service, & Support
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus officia repellendus laudantium sunt magni a. Officiis
                                eveniet asperiores quam!

                            </p>
                        </div>
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Marketing
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, delectus officia repellendus laudantium sunt magni a. Officiis
                                eveniet asperiores quam!

                            </p>
                        </div>
                    </div>
                    <div className="end w-[35%] ">
                        <img src="/public/images/TeamSection.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
