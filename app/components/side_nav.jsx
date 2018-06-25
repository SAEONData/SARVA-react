import React, {Component} from 'react';
import {SideNav, SideNavNav, SideNavCat, SideNavItem, Fa} from 'mdbreact';
import _ from 'lodash';

import '../styles/sidenav.css';
import ModalPage from './modal.jsx';

class SideNavBar extends Component {
  constructor(props) {
    super(props);
    this.handleToggleClickA = this.handleToggleClickA.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      collapse: false,
      accordion: null,
      toggleState: false,
      url: null,
      modal: false
    };
  }
  
  // Collapse/ Accordion
  onClick(index) {
    let state = '';
    
    if (this.state.accordion !== index) {
      state = index;
    } else {
      state = null;
    }
    
    this.setState({
      collapse: !this.state.collapse,
      accordion: state
    });
  }
  
  toggleModal() {
    this.setState({
      modal: !this.state.modal,
      url: null
    });
  }
  
  launchIframeModal(url) {
    this.setState({
      url: url,
      modal: true
    })
  }

// Slide out buttons event handlers
  handleToggleClickA() {
    this.setState({
      toggleState: !this.state.toggleState
    })
  }
  
  render() {
    const isOpenWithButtonA = this.state.toggleState;
    const elements = _.map(this.props.sideNavItems, (item, index) => {
      return (
        <SideNavCat className="black-text" style={{fontWeight: "bold"}} key={index} name={item.title} onClick={() => this.onClick(index)} isOpen={this.state.accordion === index} icon="caret-down">
          {item.ideas ?
            _.map(item.ideas, (i, j) => {
              return (<SideNavItem className="black-text" key={`item-` + j} onClick={() => {this.launchIframeModal(i.url)}}>{i.title}</SideNavItem>);
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
        <SideNav className="white sidenav"
                 style={{backgroundColor: "white"}}
                 logo="../app/image/logo_saeon.png"
                 hidden
                 isOpenWithButton={isOpenWithButtonA}
                 breakWidth={1500}
        >
          <SideNavNav>
            {elements}
            <img src={"app/image/logo_odp.png"} style={{width: 280}}/>
          </SideNavNav>
        </SideNav>
        <ModalPage isOpen={this.state.modal}
                   contentLabel="Modal Header"
                   url={this.state.url}
                   onRequestClose={this.toggleModal}/>
      </div>
    );
  }
}

export default SideNavBar;
