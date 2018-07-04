import {LOAD_BANNER, LOADING_BANNER, BANNER_LOADED} from '../constants';

export default function bannerItems(state = [], action) {
    switch(action.type){
        case LOAD_BANNER:
            return {
                ...state,
                isLoading: false
            };

        case LOADING_BANNER:
            return {
                ...state,
                isLoading: true
            };

        case BANNER_LOADED:
            return action.bannerItems;

        default:
            return state;
    }
}