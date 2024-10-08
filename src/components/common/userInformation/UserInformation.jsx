import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function UserInformation() {
    const userInfo = useSelector(state => state.userInfo);
    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])
    return (
        <div>
            <div className="CoverImage w-full h-[200px] bg-[#eee] rounded-md overflow-hidden relative ">
                <img src={userInfo?.userInfo?.coverUrl || "/images/altCoverPhoto.png"} className="w-full h-full object-cover" alt="Cover Image" />
            </div>
            <div className="-translate-y-[65%] flex items-end gap-5 px-4 ">
                <div className="personalimage w-[200px] h-[200px] bg-neutral-textSecondary rounded-full overflow-hidden  flex justify-center items-center ">
                    <img src={userInfo?.userInfo?.imageUrl || "/images/altUserPhoto.png"} className="rounded-full w-full h-full" alt="user Image" />
                </div>
                <div className="info">
                    <div className="flex flex-col mb-6">
                        <span className=" font-semibold">
                            {
                                userInfo?.userInfo?.username
                            }
                        </span>
                        <span>
                            {
                                userInfo?.userInfo?.email
                            }
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
