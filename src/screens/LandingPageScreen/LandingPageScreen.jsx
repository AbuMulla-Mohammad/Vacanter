import { useEffect, useRef, useState } from "react";
import HeroSection from "../../components/LandingComponents/HeroSection";
import LatestJobs from "../../components/LandingComponents/LatestJobs";
import Team from "../../components/LandingComponents/Team";
import Navbar from "../../components/navbar/Navbar";
import AboutTeam from "../../components/LandingComponents/AboutTeam";
import OurServices from "../../components/LandingComponents/OurServices";

export default function LandingPageScreen() {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const [sectionRefToNavigate, setSectionRefToNavigate] = useState(null);
    const navbarRef = useRef(null);
    const heroSectionRef = useRef(null);
    const latestJobsSectionRef = useRef(null);
    const ourServicesRef = useRef(null);
    const aboutTeamRef = useRef(null);
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
        console.log(navbarHeight)
    }, [navbarHeight]);
    const scrollToSection = () => {
        window.scroll({
            top: sectionRefToNavigate?.current.offsetTop,
            behavior: 'smooth',
        })
    }
    return (
        <div className="bg-white  rounded-xl w-full">
            <div className="fixed top-0 w-full ">
                <div className="w-[85%] m-auto" ref={navbarRef}>
                    <Navbar
                        scrollToSection={scrollToSection}
                        heroSectionRef={heroSectionRef}
                        latestJobsSectionRef={latestJobsSectionRef}
                        ourServicesRef={ourServicesRef}
                        aboutTeamRef={aboutTeamRef}
                        setSectionRefToNavigate={setSectionRefToNavigate}
                        sectionRefToNavigate={sectionRefToNavigate}
                    />
                </div>
            </div>
            <div className={`h-[80vh]  `} style={{ marginTop: `${navbarHeight}px` }} ref={heroSectionRef}>
                <HeroSection />
            </div>
            <div ref={latestJobsSectionRef}>
                <LatestJobs />
            </div>
            <div ref={ourServicesRef}>
                <OurServices />
            </div>
            <div ref={aboutTeamRef}>
                <AboutTeam />
            </div>
        </div>
    )
}
