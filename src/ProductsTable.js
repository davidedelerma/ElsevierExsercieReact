import React from 'react';
import ProductRow from './ProductRow'

export default class ProductsTable extends React.Component {
    
    render() {
        const rows = []
        for (var key in this.props.products){
            var product = this.props.products[key];
            console.log(this.props.filterText)
            console.log(product.Title.TitleText)
            if (product.Title.TitleText.indexOf(this.props.filterText) === -1) {
                 continue;
            }
            rows.push(<ProductRow product={product} key={key} />);
        };
        
        return (
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
  }
}