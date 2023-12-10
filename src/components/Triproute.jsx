import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Triprouteitem from '@components/Triprouteitem';

import './Triproute.css'

export default class Todolist extends React.Component {
    
    static propTypes = {
        triproutes: PropTypes.array,
        hasMore: PropTypes.bool,
        searchText: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {triproutes} = this.props;
        if(!triproutes) triproutes = [];

        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No trip here.</div>
            </ListGroupItem>
        );
        if (triproutes.length) {
            children = triproutes.map(p => (
                <ListGroupItem key={p.id} action>
                    <Todolistitem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='triproutes'>
                <ListGroup>
                    {children}
                </ListGroup>
            </div>
        );
    }

    
    
  }