import React from 'react';


export default class ProductRow extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnCLickTextChange = this.handleOnCLickTextChange.bind(this);
    }
    
    handleOnCLickTextChange(e) {
      e.preventDefault();
      this.props.onClickTable(this.props.product);
    }

    render() {
    var name = this.props.product.Title.TitleText.toUpperCase()
    return (
      <tr onClick={this.handleOnCLickTextChange}>
        <td>{name}</td>      
     </tr>
    );
  }
}