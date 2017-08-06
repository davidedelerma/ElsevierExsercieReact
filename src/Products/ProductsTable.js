import React from 'react';
import ProductRow from './ProductRow'


export default class ProductsTable extends React.Component {
    
    render() {
        const rows = []
        for (var key in this.props.products){
            var product = this.props.products[key];
            if (product.Title.TitleText.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1) {
                 continue;
            }
            rows.push(<ProductRow onClickTable={this.props.onClickTable} product={product} key={key} />);
        };
        
        return (
            <table style={{display:"inline"}} >
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