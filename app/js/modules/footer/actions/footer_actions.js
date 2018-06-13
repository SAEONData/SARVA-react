import {LOAD_FOOTER, FOOTER_LOADED} from '../constants';
import _ from 'lodash';

export function loadFooter(){
    return { type: LOAD_FOOTER }
}

export function loadFooterResult(footerData) {
    let footerContent = _.values(footerData.ideas['2'].ideas);
    return { type: FOOTER_LOADED, Footer: footerContent }
}