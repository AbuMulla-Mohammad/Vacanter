import ChangeProfileCoverPhoto from "../../components/common/setting/ChangeProfileCoverPhoto";
import ChangeProfilePhoto from "../../components/common/setting/ChangeProfilePhoto";

export default function ProfileSettingsScreen() {
    return (
        <div className="bg-white p-3 rounded-xl min-h-screen ">
            <div className="relative ">
                <div>
                    <ChangeProfileCoverPhoto />
                </div>
                <div className="absolute bottom-[-45%] left-[50%] translate-x-[-50%]">
                    <ChangeProfilePhoto />
                </div>
            </div>

        </div>
    )
}
