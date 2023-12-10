import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Todolistitem from '@components/Todolistitem';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

import './Todolist.css';

export default class Todolist extends React.Component {
    
    static propTypes = {
        todos: PropTypes.array,
        hasMore: PropTypes.bool,
        searchText: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        let {todos} = this.props;
        if(!todos) todos = [];

        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>No todos here.</div>
            </ListGroupItem>
        );

        if (todos.length) {
            children = todos.map(p => (
                <ListGroupItem key={p.id} action>
                    <Todolistitem {...p} />
                </ListGroupItem>
            ));
        }

        return (
            <div className='todolist'>
                <ListGroup>
                    {children}
                </ListGroup>
            </div> 
        );
    }
}