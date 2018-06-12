import {LOAD_FOOTER, LOADING_FOOTER, FOOTER_LOADED} from '../constants';

export default function footer(state = [], action) {
    switch(action.type){
        case LOAD_FOOTER:
            return {
                ...state,
                isLoading: false
            };

        case LOADING_FOOTER:
            return {
                ...state,
                isLoading: true
            };

        case FOOTER_LOADED:
            return action.footer;

        default:
            return state;
    }
}