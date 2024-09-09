import { useEffect, useRef, useState } from "react";
import HeroSection from "../../components/LandingComponents/HeroSection";
import LatestJobs from "../../components/LandingComponents/LatestJobs";
import Team from "../../components/LandingComponents/Team";
import Navbar from "../../components/navbar/Navbar";

export default function LandingPageScreen() {
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);
    useEffect(() => {
        if (navbarRef.current) {
            setNavbarHeight(navbarRef.current.offsetHeight);
        }
        console.log(navbarHeight)
    }, [navbarHeight]);
    return (
        <div className="bg-white  rounded-xl w-full">
            <div className="fixed top-0 w-full ">
                <div className="w-[85%] m-auto" ref={navbarRef}>
                    <Navbar />
                </div>
            </div>
            <div className={`h-[80vh]  `} style={{ marginTop: `${navbarHeight}px` }}>
                <HeroSection />
            </div>
            <div>
                <LatestJobs />
            </div>
            <div>
                <Team />
            </div>
        </div>
    )
}
