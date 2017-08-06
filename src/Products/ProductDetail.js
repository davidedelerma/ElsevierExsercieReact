import React from 'react';
import Contributors from './Contributors'

export default class ProductDetail extends React.Component {   
    constructor(props) {
        super(props);
        this.ContributorsList = this.ContributorsList.bind(this);
    }
    ContributorsList(contributors) {
        const contributorsToShow=[];
        if (typeof(contributors)!== "undefined"){
            if (Array.isArray(contributors)){
                for (var i = 0; i < contributors.length; i++) {
                    contributorsToShow.push(<Contributors contributorToShow={contributors[i].KeyNames} />);                  
                }
            } else {
                contributorsToShow.push(<Contributors contributorToShow={contributors.KeyNames} />);
            }
            
        }
        return contributorsToShow        
    }

    render() {
        return (
            <div>
                <h2>Title: {typeof(this.props.selectedProduct.Title) !== "undefined" ? this.props.selectedProduct.Title.TitleText : ''}</h2>
                <p>Contributors: <ul>{this.ContributorsList(this.props.selectedProduct.Contributor)}</ul></p>
                <p>Language: {typeof(this.props.selectedProduct.Language) !== "undefined" ? this.props.selectedProduct.Language.LanguageCode : ''}</p>
                <p>Publisher: {typeof(this.props.selectedProduct.Publisher) !== "undefined" ? this.props.selectedProduct.Publisher.PublisherName : ''}</p>
            </div>
        
        );
  }
}