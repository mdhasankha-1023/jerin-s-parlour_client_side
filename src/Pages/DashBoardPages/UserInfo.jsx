import UserAvater from "../../Components/uI/UserAvater";
import Auth from "../../Contexts/Auth";

export default function UserInfo() {
    const { user } = Auth();

    return (
        <div>
            <UserAvater userEmail={user?.email} userPhoto={user.photoURL} />
            <div className="divider w-full">
            </div>
        </div>
    )
}
