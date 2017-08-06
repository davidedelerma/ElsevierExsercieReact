import React from 'react';


export default class ProductRow extends React.Component {
    constructor(props) {
      super(props);
      this.handleOnCLick = this.handleOnCLick.bind(this);
    }
    
    handleOnCLick(e) {
      e.preventDefault();
      this.props.onClickTable(this.props.product);
    }

    render() {
    var name = this.props.product.Title.TitleText.toUpperCase()
    return (
      <tr onClick={this.handleOnCLick} style={{cursor:'pointer'}}>
        <td>{name}</td>      
     </tr>
    );
  }
}