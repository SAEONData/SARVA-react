import React, { Component } from 'react';
import { Button } from 'mdbreact';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Iframe from 'react-iframe';

class ModalPage extends Component {
    constructor(props) {
        super(props);
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
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.props.onRequestClose}
                contentLabel={this.props.contentLabel}
            >
                <div className="modal-content-ext">
                    <div className="modal-header-ext">
                        {this.props.contentLabel}
                    </div>
                    <div className="modal-body-ext">
                        {frame}
                    </div>
                    <div className="modal-footer-ext">
                        <Button color="secondary" onClick={this.props.onRequestClose}>Close</Button>{' '}
                    </div>
                </div>
            </Modal>
        );
    }
}
ModalPage.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func,
    contentLabel: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
export default ModalPage;