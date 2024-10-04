import SectionsHeaderComp from './SectionsHeaderComp'
import { Link } from 'react-router-dom'

export default function OurServices() {
    return (
        <section>
            <div className="w-full bg-[url(/public/images/GetHired.png)] bg-cover h-[350px] flex flex-col gap-4 justify-center items-center p-[60px] text-white ">
                <h2 className="font-bold text-[48px] m-auto w-[50%]">Our Services: Empowering Employers and Job Seekers.</h2>
                <Link to={'../login'} className=" flex justify-center items-center bg-primary text-white font-semibold text-[16px] border border-primary w-[260px] h-[70px] rounded-md transition-all duration-500 hover:bg-primary-light  hover:text-primary">
                    Apply Now
                </Link>
            </div>
            <div className="container w-[85%] m-auto py-[150px]">
                <SectionsHeaderComp title={"Our Services"} link={"View all teams"} linkUrl={'../login'} />
                <div className="flex flex-row-reverse justify-between items-center">
                    <div className="start w-[62%] flex flex-wrap justify-between gap-y-7">
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Streamlined Job Posting for Employers
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Easily post job openings with our intuitive interface designed to simplify the recruitment
                                process. Our platform allows you to manage and organize job listings efficiently, ensuring
                                your positions reach the right candidates quickly
                            </p>
                        </div><div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Effortless Job Application Process
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Job seekers can apply seamlessly through our user-friendly platform. Upload your resume, fill out essential
                                details, and submit your application within minutes, making your job search easier and more effective.
                            </p>
                        </div>
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Advanced Applicant Matching Technology
                            </h3>
                            <p className="text-neutral-textSecondary">
                                Our platform uses intelligent algorithms to compare job postings and applications, analyzing key
                                details to measure similarity. This ensures that recruiters receive the most relevant applicants,
                                saving time and improving hiring outcomes.
                            </p>
                        </div>
                        <div className="item w-[45%] flex flex-col gap-4 ">
                            <h3 className="text-primary font-bold text-[24px]">
                                Top Candidates at Your Fingertips
                            </h3>
                            <p className="text-neutral-textSecondary">
                                For every job posted, our system ranks the top 10 applicants based on their qualifications and match to the job
                                requirements. Employers can focus on the best-suited candidates, speeding up the selection process and increasing
                                hiring accuracy.
                            </p>
                        </div>
                    </div>
                    <div className="end w-[35%] ">
                        <img src="/images/TeamSection.png" alt="" />
                    </div>
                </div>
            </div>

        </section>
    )
}
