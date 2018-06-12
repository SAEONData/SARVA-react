import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import {LOAD_NAV} from "./constants";
import {loadNavItemsResult} from "./actions/nav_actions";

export const loadNavEpic = action$ =>
    action$.ofType(LOAD_NAV)
        .mergeMap(action$ =>
            ajax.getJSON('/app/js/utils/NAVBAR.json')
                .map(data => loadNavItemsResult(data))
        );

export default [
    loadNavEpic
]