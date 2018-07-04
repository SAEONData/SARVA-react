import { LOAD_BANNER, BANNER_LOADED } from '../constants';
import _ from 'lodash';

export function loadBanner(){
    return { type: LOAD_BANNER }
}

export function loadBannerResult(bannerData) {
    let bannerContent = _.values(bannerData.ideas['1'].ideas);
    return { type: BANNER_LOADED, bannerItems: bannerContent }
}