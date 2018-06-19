import React, {Component} from 'react';
import {connect} from "react-redux";

import NavBar from './navbar.jsx';
import SideNavBar from './side_nav.jsx';
import Footer from './footer.jsx';
import Banner from './banner.jsx';
import CardPage from './card.jsx';

import {LOAD_NAV} from '../js/modules/nav/constants';
import {LOAD_SIDE_NAV} from '../js/modules/sidenav/constants';
import {LOAD_FOOTER} from '../js/modules/footer/constants';

import * as nav from '../js/modules/nav/reducer';
import * as side from '../js/modules/sidenav/reducer';
import * as footer from '../js/modules/footer/reducer';


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
        this.props.dispatch({type: LOAD_FOOTER})
    }

    render() {
        return (

            <div className="container-fluid">
                <SideNavBar sideNavItems={this.props.sideNavItems}/>
                <NavBar navItems={this.props.navItems} />
                <div className="container-fluid">
                    <div className="align-self-center ">
                        <div className="row">
                            <Banner backgroundImage="url(' ../app/image/background_image_1.png ')"
                                    title="Updated, Interactive Tools"
                                    text="Updated, Interactive Tools are now available for detailed assessment of the impact of pressures and drivers on important human, physical, and environmental assets.
                                         These tools are currently focused on Impact Assessment, but will in time extend to allow determination of Risk and Vulnerability."
                                    hideButton={true}
                                    url=""
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                <CardPage buttonText='Search'
                                          title='Search and Discover Resources'
                                          text='Use simple or advanced tools to search for data meeting your criteria.'
                                          url="app/pages/page_search.html"
                                          modalHeader="Search"
                                />
                            </div>
                            <div className="col">
                                <CardPage buttonText='Themes' title='Explore Available Resources by Sector or Theme'
                                          text='Explore Available Resources by Sector or Theme'
                                          url="app/pages/page_theme.html"
                                          modalHeader="Themes"
                                />
                            </div>
                            <div className="col">
                                <CardPage buttonText='Contribute' title='Tell Us About Your Area of Interest'
                                          text= 'Register as a user and contribute data, assessments, and media.'
                                          url="app/pages/page_contribute.html"
                                          modalHeader="Contribute"
                                />
                            </div>

                        </div>
                        <div className="row">
                            <Banner backgroundImage="url(' ../app/image/background_image_4.png ')"
                                    title="Distributed, High Resolution Data"
                                    text="Distributed, high-resolution data can be annotated and linked from any standardised service
                                     in the web and included into our profiling and impact assessment tools.Very large datasets
                                     can be accommodated without deterioration in service - thanks to an innovative distributed data processing breakthrough."
                                    url="app/pages/page_data.html"
                                    modalHeader="Working with large distributed data sets in the web"
                                    color={"brown"}

                            />
                        </div>

                        <div className="row">
                            <Banner backgroundImage="url(' ../app/image/background_image_5.png ')"
                                    title="Crowd-Sourced Contributions"
                                    text="Links and services to crowd-sourced data are now included - social media feeds, news items, and contributions from the general public.
                                    In addition, we allow officials to contribute their own impact assessments."
                                    url="app/pages/page_crowd.html"
                                    modalHeader="Building up a record of events and disasters"
                                    textColor='brown'
                            />
                        </div>
                        <Footer footerItems={this.props.footer}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    navItems: nav.getNavItems(state),
    sideNavItems: side.getSideNavItems(state),
    footer: footer.getFooter(state)
});

export default connect(
    mapStateToProps
)(App)