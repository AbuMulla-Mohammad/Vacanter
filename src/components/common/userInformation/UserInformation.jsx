import { useSelector } from "react-redux";

export default function UserInformation() {
    const userInfo = useSelector(state => state.userInfo.userInfo);
    return (
        <div>
            <div className="CoverImage w-full h-[150px] bg-[#eee] rounded-md">

            </div>
            <div className="-translate-y-[65%] flex items-end gap-5 px-4 ">
                <div className="personalimage w-[200px] h-[200px] bg-neutral-textSecondary rounded-full overflow-hidden p-2 flex justify-center items-center ">
                    <img src="/images/EmployerImg.jpg" className="rounded-full w-full h-full" alt="" />
                </div>
                <div className="info">
                    <div className="flex flex-col mb-6">
                        <span className=" font-semibold">
                            {
                                userInfo?.username
                            }
                        </span>
                        <span>
                            {
                                userInfo?.email
                            }
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}
