import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import { loadBannerResult } from './actions/parallax_actions';
import { LOAD_BANNER } from './constants';


export const loadBannerEpic = action$ =>
    action$.ofType(LOAD_BANNER)
        .mergeMap(action$ =>
            ajax.getJSON('/app/js/utils/par.json')
                .map(data => loadBannerResult(data))
        );


export default [
    loadBannerEpic
]
