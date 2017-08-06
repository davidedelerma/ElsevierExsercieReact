import React from 'react';

export default class Contributors extends React.Component {
    
    render() {
        return (
            <li>{this.props.contributorToShow}</li>
        )
    }
}   
