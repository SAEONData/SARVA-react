import {LOAD_SIDE_NAV, SIDE_NAV_LOADED, LOADING_SIDE_NAV} from '../constants';

export default function sideNavItems(state = [], action) {
    switch(action.type){
        case LOAD_SIDE_NAV:
            return {
                ...state,
                isLoading: false,
            };

        case LOADING_SIDE_NAV:
            return {
                ...state,
                isLoading: true,
            };

        case SIDE_NAV_LOADED:
            return action.sideNavItems;

        default:
            return state;
    }
}
