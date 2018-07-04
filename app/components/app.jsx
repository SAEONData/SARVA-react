import React, {Component} from 'react';
import {connect} from 'react-redux';

import NavBar from './navbar.jsx';
import SideNavBar from './side_nav.jsx';
import Footer from './footer.jsx';
import ParallexViews from './parallex_view.jsx';


import {LOAD_NAV} from '../js/modules/nav/constants';
import {LOAD_SIDE_NAV} from '../js/modules/sidenav/constants';
import {LOAD_FOOTER} from '../js/modules/footer/constants';
import {LOAD_BANNER} from '../js/modules/parallax/constants';

import * as nav from '../js/modules/nav/reducer';
import * as side from '../js/modules/sidenav/reducer';
import * as footer from '../js/modules/footer/reducer';
import * as banner from '../js/modules/parallax/reducer';


/**
 * App
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: true
        };
        this.props.dispatch({type: LOAD_NAV});
        this.props.dispatch({type: LOAD_SIDE_NAV});
        this.props.dispatch({type: LOAD_FOOTER});
        this.props.dispatch({type: LOAD_BANNER});
    }

    render() {
        return (

            <div className="container-fluid">
                <SideNavBar sideNavItems={this.props.sideNavItems}/>
                <NavBar navItems={this.props.navItems} />
                <ParallexViews bannerItems={this.props.bannerItems}/>
                <Footer footerItems={this.props.footer}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navItems: nav.getNavItems(state),
    sideNavItems: side.getSideNavItems(state),
    footer: footer.getFooter(state),
    bannerItems: banner.getBannerItems(state),
});

export default connect(
    mapStateToProps
)(App)