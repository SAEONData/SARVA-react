import React, {Component} from 'react';
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
import {BrowserRouter as Router} from 'react-router-dom';
import _ from 'lodash';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false,

        };
        this.onClick = this.onClick.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const items = _.map(this.props.navItems, (item, index) => {
            return (
                <NavItem key={index}>
                    {item.ideas ?
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle className="nav-link black-text" nav caret>{item.title}</DropdownToggle>
                            <DropdownMenu>
                                {
                                    _.map(item.ideas, (ditem, dindex) => {
                                        return(<DropdownItem className="nav-link black-text" key={`${index}-${dindex}`} href="#">{ditem.title}</DropdownItem>)
                                    })
                                }
                            </DropdownMenu>
                        </Dropdown>
                        :
                        <NavLink className="nav-link black-text" onClick={item.onClick} to="#">
                            {item.title}
                        </NavLink>
                    }
                </NavItem>
            )
        })

        return (
            <Router>
                <Navbar className="navbar-expand-sm nav-wrapper" >
                    <NavbarBrand href="/">
                        <img src="app/image/logo_africa_beta.png" height="80" alt="logo africa beta"/>
                        <strong style={{color:'black'}}>SARVA 3.O</strong>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav className="align-right">
                            {items}
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default NavBar;