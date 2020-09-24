import { LOAD_USER } from "./ActionType"

export const loadUser = (user) => {
    return {
        type: LOAD_USER,
        payload: user
    }
}

const load