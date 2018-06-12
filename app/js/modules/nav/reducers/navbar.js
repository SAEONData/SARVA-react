import {LOAD_NAV, NAV_LOADED, LOADING_NAV} from '../constants';

export default function navItems(state = [], action) {
    switch(action.type){
        case LOAD_NAV:
            return {
                ...state,
                isLoading: false,
            };

        case LOADING_NAV:
            return {
                ...state,
                isLoading: true,
            };

        case NAV_LOADED:
            return action.navItems;

        default:
            return state;
    }
}
