import { GET_SOCIAL } from '../constant/Constants';

export function getAssets(id) {
    return {
        type: GET_ASSETS,
        social_profile_employee_id: id,
    }
}