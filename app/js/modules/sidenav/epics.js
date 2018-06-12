import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import {LOAD_SIDE_NAV} from './constants';
import {loadSideNavItemsResult} from './actions/side_nav_actions';

export const loadSideNavEpic = action$ =>
    action$.ofType(LOAD_SIDE_NAV)
        .mergeMap(action$ =>
            ajax.getJSON('/app/js/utils/sarva.json')
                .map(data => loadSideNavItemsResult(data))
        );

export default [
    loadSideNavEpic
]