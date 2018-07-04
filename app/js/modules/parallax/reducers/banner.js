import {LOAD_BANNER, LOADING_BANNER, BANNER_LOADED} from '../constants';

export default function bannerItems(state = [], action) {
    switch(action.type){
        case LOAD_BANNER:
            return state;

        case LOADING_BANNER:
            return state;

        case BANNER_LOADED:
            return action.bannerItems;

        default:
            return state;
    }
}