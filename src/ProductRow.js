import React from 'react';


export default class ProductRow extends React.Component {
  render() {
    var name = this.props.product.Title.TitleText
    return (
      <tr>
        <td>{name}</td>      
     </tr>
    );
  }
}