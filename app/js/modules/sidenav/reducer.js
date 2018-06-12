import {combineReducers} from 'redux';
import sideNavItems from './reducers/side_nav';

const sideNav = combineReducers({
    sideNavItems,
});

export const getSideNavItems = state => getSlice(state).sideNavItems;

export default sideNav;

function getSlice(state){
    return state.page.sideNav;
}