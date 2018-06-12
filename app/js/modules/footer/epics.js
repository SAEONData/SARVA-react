import {Observable} from 'rxjs';
import { ajax } from 'rxjs/observable/dom/ajax';

import {loadFooterResult} from "./actions/footer_actions";
import {LOAD_FOOTER} from './constants';


export const loadFooterEpic = action$ =>
    action$.ofType(LOAD_FOOTER)
        .mergeMap(action$ =>
            ajax.getJSON('/app/js/utils/sarva.json')
                .map(data => loadFooterResult(data))
        );


export default [
    loadFooterEpic
]
