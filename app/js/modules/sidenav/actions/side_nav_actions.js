import {LOAD_SIDE_NAV, SIDE_NAV_LOADED} from '../constants';
import _ from 'lodash';

export function loadSideNavItems() {
    return { type: LOAD_SIDE_NAV }
}

export function loadSideNavItemsResult(sideNavItems) {
    let navNode = _.values(sideNavItems.ideas['1'].ideas);
    return { type: SIDE_NAV_LOADED, sideNavItems: navNode }
}



