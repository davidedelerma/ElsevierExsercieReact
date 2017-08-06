import React from 'react';
import Data from '../data/ProductsData';
import ProductsTable from './ProductsTable';
import ProductDetail from './ProductDetail';
import SearchBar from './SearchBar';
import {Row,Col,Grid} from 'react-bootstrap';

export default class ProductsContainer extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            filterText: '',
            products: [],
            product:{}
        };
        this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(productSelected){
        this.setState({
            product: productSelected
        });
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
                <Grid >
                    <Row>
                    <SearchBar 
                            filterText={this.state.filterText}
                            onFilterTextInput={this.handleFilterTextInput}
                            />
                    </Row>
                    <Row >
                        <Col md={6} >                           
                            <ProductsTable 
                                filterText={this.state.filterText}
                                products={this.state.products.worksById}
                                onClickTable={this.handleClick} 
 
                            />
                        </Col>
                        <Col md={4}  >
                            <ProductDetail 
                                selectedProduct={this.state.product}
                            />
                        </Col>
                    </Row>
                </Grid>
        )
    }
};
