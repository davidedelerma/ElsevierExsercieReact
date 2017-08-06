import React from 'react';
import {FormControl} from 'react-bootstrap'

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
    }
    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }
    render() {
    return (
      <form >
        <FormControl 
            type="text" 
            placeholder="Search..."
            value={this.props.filterText}
            bsSize="small"
            onChange={this.handleFilterTextInputChange} 
        />
      </form>
    );
  }
}