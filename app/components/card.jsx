import React, {Component} from 'react';
import {Button, Card, CardBody, CardImage, CardTitle, CardText} from 'mdbreact';
import ModalPage from './modal.jsx';


class CardPage extends Component {
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
            <div>
            <Card className=" container-fluid text-center" style={{height:300}}>
                <CardBody>
                    <Button color="grey" href="#" onClick={this.toggleModal}>{this.props.buttonText}</Button>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.text}</CardText>
                </CardBody>
                <ModalPage isOpen={this.state.showModal}
                           onRequestClose={this.toggleModal}
                           url={this.props.url}
                           toggle={this.toggleModal}
                           contentLabel={this.props.modalHeader}
                />
            </Card>
            </div>
        );
    }
}

export default CardPage;