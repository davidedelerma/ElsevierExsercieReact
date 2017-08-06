import React from 'react';
import {FormGroup,ControlLabel,FormControl} from 'react-bootstrap'

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
        <FormGroup
            controlId="formBasicText"
            >
          <ControlLabel>Search By Title  </ControlLabel>
            <FormControl 
                type="text" 
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextInputChange} 
            />
            <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}