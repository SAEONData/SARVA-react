import {combineEpics} from 'redux-observable';
import navEpics from './modules/nav/epics';
import sideNavEpics from './modules/sidenav/epics';
import loadFooterEpics from './modules/footer/epics';


export const epics = combineEpics(
    ...navEpics,
    ...sideNavEpics,
    ...loadFooterEpics
);