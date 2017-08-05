import React from 'react';


export default class ProductRow extends React.Component {
    handleClick(){
        console.log("Clicked")
    }

    render() {
    var name = this.props.product.Title.TitleText
    return (
      <tr onClick={this.handleClick}>
        <td>{name}</td>      
     </tr>
    );
  }
}