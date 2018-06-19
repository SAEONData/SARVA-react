import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';
import _ from 'lodash';

class FooterPage extends React.Component {
    mapListItems(ideas){
       return (_.map(ideas, (idea)=> {
           return(
               <li key={idea.id}>{idea.title}</li>
           )})
       )
    }

    getAccessoryContent(node){
        if(node && node.attr.attachment){
            return(<img src={'app/image/logo_dst.png'} />)
        }

        if(node && node.attr.note){
            return (<p>{node.attr.note.text}</p>)
        }
    }

    render() {
        const cols = _.map(this.props.footerItems, (node, index)=>{
            return(
                <Col key={`col-${index}`} sm="3">
                    <h5>{node.title}</h5>
                      {
                          node.ideas ? <ul>{this.mapListItems(node.ideas)}</ul> : <div>{this.getAccessoryContent(node)}</div>
                      }
                </Col>
            );
        });

        return(
            <Footer color="grey" className="font-med pt-4 mt-4 page-footer" style={{maxWidth: '100%'}}>
                <Container className="text-left">
                    <Row>
                      {cols}
                    </Row>
                </Container>
                <div className="footer-copyright text-center" >
                    <Container className="container-fluid">
                        Created by <a className="blue-text" href={"http://www.saeon.ac.za"}> SAEON </a> using <a className="brown-text" href={"https://mdbootstrap.com"}> MDBootstrap </a> and SAEON Open Data Platform APIs.
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
