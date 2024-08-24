import { useEffect } from "react";
import { useSelector } from "react-redux"

export default function HomeScreen() {
    const userInfo = useSelector(state => state.userInfo.userInfo);

    return (
        <div className="mt-[70px]">
            Hello again {userInfo.username}
        </div>
    )
}
