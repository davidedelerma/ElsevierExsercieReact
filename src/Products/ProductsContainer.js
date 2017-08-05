import React from 'react';
import Data from './ProductsData';
import ProductsTable from './ProductsTable'
import SearchBar from './SearchBar'

export default class ProductsContainer extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterText: '',
            products: []
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    }
    handleFilterTextInput(filterText) {
        this.setState({
            filterText: filterText
        });
    }
    componentDidMount(){
        this.setState({products: Data})
    }
    render() {
        return (
        <div>
            <SearchBar 
                filterText={this.state.filterText}
                onFilterTextInput={this.handleFilterTextInput}
            />
            <ProductsTable 
                filterText={this.state.filterText}
                products={this.state.products.worksById} 
            />
        </div>
        )
    }
};
