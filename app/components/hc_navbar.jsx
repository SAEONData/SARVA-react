import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'mdbreact';
import ModalPage from './modal.jsx';


class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            showAboutModal: false,
            showSearchModal: false,
            showProfilerModal: false,
            showContactModal: false,
            toggleShowAtlasModal: false,
        };

        this.toggleShowAboutModal= this.toggleShowAboutModal.bind(this);
        this.toggleShowSearchModal = this.toggleShowSearchModal.bind(this);
        this.toggleShowProfilerModal = this.toggleShowProfilerModal.bind(this);
        this.toggleShowContactModal = this.toggleShowContactModal.bind(this);
        this.toggleShowAtlasModal = this.toggleShowAtlasModal.bind(this);
    }

    toggleShowAboutModal(){
        this.setState({
            showAboutModal: !this.state.showAboutModal
        })
    }
    toggleShowSearchModal(){
        this.setState({
                showSearchModal: !this.state.showSearchModal
            })
    }
    toggleShowProfilerModal(){
        this.setState({
            showProfilerModal: !this.state.showProfilerModal
        })
    }
    toggleShowContactModal(){
        this.setState({
            showContactModal: !this.state.showContactModal
        })
    }
    toggleShowAtlasModal(){
        this.setState({
            showAtlasModal: !this.state.showAtlasModal
        })
    }

    render() {
        return (
            <Router>
                <Navbar expand="md" scrolling className=" navbar-expand-sm nav-wrapper" style={{paddingTop: 0, paddingBottom: 0}}>
                    <NavbarNav left>
                        <NavbarBrand>
                            <img src={'../app/image/logo_africa_beta.png'}
                                 style={{width: "100px", height:"97.3 px"}}/> <strong style={{fontSize: "2.0rem"}}> SARVA 3.0</strong>
                        </NavbarBrand>
                    </NavbarNav>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink className="nav-link dark-grey-text font-weight-bold" onClick={this.toggleShowAboutModal} to="#">
                                About
                            </NavLink>
                            <ModalPage isOpen={this.state.showAboutModal}
                                       url={"app/pages/page_about.html"}
                                       toggle={this.toggleShowAboutModal}
                                       modalHeader='About'
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link dark-grey-text font-weight-bold" onClick={this.toggleShowSearchModal} to="#">
                                Search
                            </NavLink>
                            <ModalPage isOpen={this.state.showSearchModal}
                                       url={"http://www.sasdi.net/search.aspx?noframe=true"}
                                       toggle={this.toggleShowSearchModal}
                                       modalHeader='Search'
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link dark-grey-text font-weight-bold" onClick={this.toggleShowProfilerModal} to="#">
                                Profiler
                            </NavLink>
                            <ModalPage isOpen={this.state.showProfilerModal}
                                       url={"http://app01.saeon.ac.za/profiler/main.aspx"}
                                       toggle={this.toggleShowProfilerModal}
                                       modalHeader='Profiler'
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link dark-grey-text font-weight-bold" onClick={this.toggleShowAtlasModal} to="#">
                                Atlas
                            </NavLink>
                            <ModalPage isOpen={this.state.showAtlasModal}
                                       url={"app/pages/page_atlas.html"}
                                       toggle={this.toggleShowAtlasModal}
                                       modalHeader='Atlas'
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link dark-grey-text font-weight-bold" onClick={this.toggleShowContactModal} to="#">
                                Contact
                            </NavLink>
                            <ModalPage isOpen={this.state.showContactModal}
                                       url={"app/pages/page_contact.html"}
                                       toggle={this.toggleShowContactModal}
                                       modalHeader='Contact'
                            />
                        </NavItem>
                    </NavbarNav>
                </Navbar>
            </Router>
        );
    }
};

export default NavBar;
