import {combineReducers} from 'redux';
import footer from './reducers/footer';

const Footer = combineReducers({
    footer
});

export const getFooter = state => getSlice(state).footer;

export default Footer;

function getSlice(state) {
    return state.page.pageFooter
}