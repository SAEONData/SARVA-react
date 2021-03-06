import {combineReducers} from 'redux'
import navBar from '../modules/nav/reducer';
import sideNav from '../modules/sidenav/reducer'
import pageFooter from '../modules/footer/reducer';
import banner from '../modules/parallax/reducer';

export const reducer = combineReducers({
    navBar,
    sideNav,
    pageFooter,
    banner,
});

