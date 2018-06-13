import React, {Component} from 'react';
import {SideNav, SideNavNav, SideNavCat, SideNavItem, Fa} from 'mdbreact';
import _ from 'lodash';
import '../styles/sidenav.css';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.handleToggleClickA = this.handleToggleClickA.bind(this);
        this.state ={
            collapse: false,
            accordion: null,
            toggleState: false,
        };
    }

    // Collapse/ Accordion
    onClick(index){
        let state = '';

        if (this.state.accordion !== index) {
            state = index;
        } else {
            state = null;
        }

        this.setState({
            collapse: !this.state.collapse,
            accordion: state});
    }

// Slide out buttons event handlers
    handleToggleClickA(){
        this.setState({
            toggleState: !this.state.toggleState
        })
    }

    render() {
        const isOpenWithButtonA = this.state.toggleState;
        const elements = _.map(this.props.sideNavItems, (item, index) => {
            return (
                <SideNavCat  className="black-text" style={{fontWeight:"bold"}} key={index} name={item.title} onClick={()=> this.onClick(index)} isOpen={this.state.accordion === index } icon="caret-down">
                    { item.ideas ?
                        _.map(item.ideas, (i, j) => {
                            return (<SideNavItem className="black-text" key={`item-` + j}>{i.title}</SideNavItem>);
                        })
                        :
                        ''
                    }
                </SideNavCat>
            )
        })
        return (
            <div>
                <a href="#" onClick={this.handleToggleClickA} className="button-collapse">
                    <i className="md material-icons #000000 menu">menu</i>
                </a>
                <SideNav className="white sidenav" style={{backgroundColor:"white"}} logo="../app/image/logo_saeon.png" hidden isOpenWithButton={isOpenWithButtonA} breakWidth={1500}
                         >
                    <SideNavNav>
                        {elements}
                        <img  src={"app/image/logo_odp.png"} style={{width: 280}} />
                    </SideNavNav>
                </SideNav>
            </div>
        );
    }
}

export default SideNavBar;
