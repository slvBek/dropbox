import { auth } from "firebase"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const initState = {}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'AUTHENTICATED':
            return {
                auth: true,
                email: action.data.email,
                uid: action.data.uid
            }
            default:
                return state
    }
}
export default authReducer