import {combineReducers} from 'redux';
import navItems from './reducers/navbar';

const navBar = combineReducers({
    navItems,
});

export const getNavItems = state => getSlice(state).navItems;

export default navBar;

function getSlice(state){
    return state.page.navBar;
}