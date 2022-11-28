import { useDispatch } from "react-redux"
import { logOut } from "../api/users"

export function Profile() {
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Profile page</h1>
            <button onClick={() => logOut(dispatch)}>Log Out</button>
        </div>
    )
}