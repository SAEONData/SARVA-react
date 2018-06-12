import React, {Component} from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, NavLink } from 'mdbreact';
import Iframe from 'react-iframe';

class ModalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const frame = (
            <Iframe url={this.props.url}
                    width="100%"
                    height="100%"
                    position="absolute"
                    styles={{startingTop:'-2%', endingTop:'-3%'}}
                    />
        );
        return (
            <div className="container-fluid">
                <Modal isOpen={this.props.isOpen} fullHeight toggle={this.toggle} size="lg" style={{startingTop:'-2%', endingTop:'-3%'}}>
                    <ModalHeader toggle={this.props.toggle}>{this.props.modalHeader}</ModalHeader>
                    <ModalBody>
                      {frame}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.props.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalPage;