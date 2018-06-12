import React from 'react';
import {Col, Container, Row} from 'mdbreact';
import ModalPage from './modal.jsx';


class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        return (
            <Row>
                <div className="container-fluid">
                    <div className=".col-xl-12" >
                        <div className="card  align-bottom text-center">
                            <div className="card-body"
                                 style={{height: 400, backgroundImage: this.props.backgroundImage}}>
                                <h2 className="card-title text-xlg-center white-text " style= {{color: this.props.textColor , fontSize:46}}>{this.props.title}</h2>
                                <h5 className=" text-xlg-center white-text" style={{fontSize:30, color: this.props.textColor}}>{this.props.text}</h5>
                                <p>{ this.props.hideButton ? '' : <a href="#" className="btn grey text-center" onClick={this.toggleModal}>Read More</a>}</p>
                                <ModalPage isOpen={this.state.showModal}
                                           url={this.props.url}
                                           toggle={this.toggleModal}
                                           modalHeader={this.props.modalHeader}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Row>

        );


    }

}

export default Banner;