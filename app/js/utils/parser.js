var $ = require('jquery');
import _ from 'lodash'

export function getNavItems() {
    $.getJSON('/app/js/utils/sarva.json', function (data) {
        let navNode = data.ideas;
        return _.values(navNode);
    });
}