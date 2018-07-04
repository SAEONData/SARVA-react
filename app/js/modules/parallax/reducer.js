import {combineReducers} from 'redux';
import bannerItems from './reducers/banner';

const banner = combineReducers({
    bannerItems,
});

export const getBannerItems = state => getSlice(state).bannerItems;

export default banner;

function getSlice(state){
    return state.page.banner;
}