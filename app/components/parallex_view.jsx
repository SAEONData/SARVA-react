import React, { Component } from 'react';
import _ from 'lodash';

import Banner from './banner.jsx';
import CardPage from './card.jsx';


export default class ParallexViews extends Component {
    render(){
        const items = _.map(this.props.bannerItems, (item, index) => {
            return(
                <div className="row" key={index}>
                    {item.ideas ?
                        <React.Fragment>
                            {
                                _.map(item.ideas, (cardItem, cardIndex) => {
                                    return(
                                        <div className="col" key={`cardIndex-${cardIndex}`}>
                                            <CardPage
                                                buttonText={cardItem.title}
                                                title={cardItem.title}
                                                text={cardItem.attr.note.text}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </React.Fragment>
                        :
                        <Banner
                            title={item.title}
                            text={item.attr.note.text}
                            hideButton={false}
                            backgroundImage={`url(${item.attr.attachment.content.url})`}
                        />
                    }
                </div>
            )
        });
        return(
            <div className="container-fluid">
                <div className="align-self-center ">
                    {items}
                </div>
            </div>
        )
    }
}