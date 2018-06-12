import React, {Component} from 'react';
import {SideNav, SideNavNav, SideNavCat, SideNavItem, Fa} from 'mdbreact';
import ModalPage from './modal.jsx';

import '../styles/sidenav.css';

class SideNavBar extends Component {
    constructor(props) {
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            collapse: false,
            accordion: null,
            toggleState: false,
            showModal: false,
        };
    }

    onClick(index){
        let state = null;

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

    handleToggleClick(){
        console.log('Handle click');
        this.setState({
            toggleState: !this.state.toggleState
        })
    }

    toggleModal(){
        this.setState({
            showModal: !this.state.showModal
        });
    }

    handleToggleModal(item){
        switch(item){
            case 1:
                this.setState({
                   url: 'app/pages/page_using.html',
                   modalHeader: 'Using SARVA 3.0',
                   showModal: true
                });
                break;

            case 2:
                this.setState({
                    url: 'http://app01.saeon.ac.za/profiler/main.aspx',
                    modalHeader: 'Profiler',
                    showModal: true
                });
                break;
            case 3:
                this.setState({
                    url: 'app/pages/page_atlas.html',
                    modalHeader: 'Atlas',
                    showModal: true
                });
                break;
            case 4:
                this.setState({
                    url: 'app/pages/page_search.html',
                    modalHeader: 'Search and Discovery',
                    showModal: true
                });
                break;
            case 5:
                this.setState({
                    url: 'app/pages/page_semantic.html',
                    modalHeader: 'SARVA 3.0 Semantic Framework',
                    showModal: true
                });
                break;
            case 6:
                this.setState({
                    url: 'app/pages/page_evidence.html',
                    modalHeader: 'Data and Evidence: Be Careful!',
                    showModal: true
                });
                break;
            case 7:
                this.setState({
                    url: '',
                    modalHeader: 'Work Programme',
                    showModal: true
                });
                break;
            case 8:
                this.setState({
                    url: 'http://app01.saeon.ac.za/nccrdsite/projects.html',
                    modalHeader: 'NCCRD',
                    showModal: true
                });
                break;
            case 9:
                this.setState({
                    url: '',
                    modalHeader: 'Events and Disasters',
                    showModal: true
                });
                break;
            case 10:
                this.setState({
                    url: 'http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/atlas_sarva_saws.js&THEME=GREY',
                    modalHeader: 'SAWS Climate Atlas',
                    showModal: true
                });
                break;
            case 11:
                this.setState({
                    url: 'http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/atlas_sarva_beeh.js&THEME=GREY',
                    modalHeader: 'Atlas of Agrohydrology',
                    showModal: true
                });
                break;
            case 12:
                this.setState({
                    url: 'http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/hardcopy_atlas.js&THEME=GREY',
                    modalHeader: 'SARVA 2.0',
                    showModal: true
                });
                break;
            case 13:
                this.setState({
                    url: 'http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/atlas_sarva_beeh.js&THEME=GREY',
                    modalHeader: 'SARVA 1.0',
                    showModal: true
                });
                break;
            case 14:
                this.setState({
                    url: 'http://app01.saeon.ac.za/PLATFORM_4/FRAME/accordian.html?URL=../../PLATFORM_4/SARVA/ATLAS/atlas_sarva_docs.js&THEME=GREY',
                    modalHeader: 'Reading Risk',
                    showModal: true
                });
                break;
        }

    }

    render(){
        const isOpenWithButton = this.state.toggleState;
        return(
            <div>
                <a href="#" key="sideNavToggle" onClick={this.handleToggleClick} className="button-collapse ">
                    <i className="md material-icons #000000 menu" >menu</i>
                </a>
                <SideNav logo="app/image/logo_saeon.png" breakWidth={1500} className="white sidenav" isOpenWithButton={isOpenWithButton}>
                    <SideNavNav style={{backgroundColor:"white"}} >
                        <SideNavCat className="black-text" style={{fontWeight:"bold"}} name="SARVA" onClick={()=> {this.onClick(1)}} isOpen={this.state.accordion === 1 } icon="caret-down">
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(1)}}>Using Sarva</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(2)}}>Profiler</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(3)}}>Atlas</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(4)}}>Finding Data</SideNavItem>
                        </SideNavCat>
                        <SideNavCat className="black-text" style={{fontWeight:"bold"}}  name="Global Change" onClick={()=> {this.onClick(2)}} isOpen={this.state.accordion === 2 } icon="caret-down">
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(5)}}>Semantic Framework</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(6)}}>Data and evidence</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(7)}}>Work Programme</SideNavItem>
                        </SideNavCat>
                        <SideNavCat className="black-text"  style={{fontWeight:"bold"}} name="Linked Systems" onClick={()=> {this.onClick(3)}} isOpen={this.state.accordion === 3 } icon="caret-down">
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(8)}}>NCCRD</SideNavItem>
                            <SideNavItem  className="black-text" onClick={()=>{this.handleToggleModal(9)}}>Events and Disasters</SideNavItem>

                        </SideNavCat>
                        <SideNavCat className="black-text"  style={{fontWeight:"bold"}} name="Archive" onClick={()=> {this.onClick(4)}} isOpen={this.state.accordion === 4 } icon="caret-down">
                            <SideNavItem className="black-text" onClick={()=>{this.handleToggleModal(10)}}>SAWS Climate Atlas</SideNavItem>
                            <SideNavItem className="black-text" onClick={()=>{this.handleToggleModal(11)}}>Atlas of Agrohydrology</SideNavItem>
                            <SideNavItem className="black-text" onClick={()=>{this.handleToggleModal(12)}}>SARVA 2.0</SideNavItem>
                            <SideNavItem className="black-text" onClick={()=>{this.handleToggleModal(13)}}>SARVA 1.0</SideNavItem>
                            <SideNavItem className="black-text" onClick={()=>{this.handleToggleModal(14)}}>Reading Risk</SideNavItem>
                        </SideNavCat>
                    </SideNavNav>
                    <img  src={"app/image/logo_odp.png"} style={{width: 280}} />
                    <ModalPage isOpen={this.state.showModal}
                               toggle={this.toggleModal}
                               url={this.state.url}
                               modalHeader={this.state.modalHeader}
                    />
                </SideNav>
            </div>
        )
    };
}

export default SideNavBar;
