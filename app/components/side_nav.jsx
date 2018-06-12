import React, {Component} from 'react';
import {SideNav, SideNavNav, SideNavCat, SideNavItem, Fa} from 'mdbreact';
import _ from 'lodash';

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
                <SideNavCat key={index} name={item.title} onClick={()=> this.onClick(index)} isOpen={this.state.accordion === index } icon="caret-down">
                    { item.ideas ?
                        _.map(item.ideas, (i, j) => {
                            return (<SideNavItem key={`item-` + j}>{i.title}</SideNavItem>);
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
                    <i className="small material-icons #000000">menu</i>
                </a>
                <SideNav logo="../app/image/logo_saeon.png" hidden isOpenWithButton={isOpenWithButtonA} breakWidth={1500}
                         className="#ffffff">
                    <SideNavNav>
                        {elements}
                    </SideNavNav>
                </SideNav>
            </div>
        );
    }
}

export default SideNavBar;
