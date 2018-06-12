import {LOAD_NAV, NAV_LOADED} from '../constants';
import _ from 'lodash';

export function loadNavItems() {
    return { type: LOAD_NAV }
}

export function loadNavItemsResult(navItems) {
    let navNode = _.values(navItems.ideas['1'].ideas);
    return { type: NAV_LOADED, navItems: navNode }
}



