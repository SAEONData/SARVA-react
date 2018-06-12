import {combineReducers} from 'redux';
import footer from './reducers/footer';

const pageFooter = combineReducers({
    footer
});

export const getFooter = state => getSlice(state).footer;

export default pageFooter;

function getSlice(state) {
    return state.page.pageFooter
}