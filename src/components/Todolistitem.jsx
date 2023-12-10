import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './todolist.css';

export default class Todolist extends React.Component {
    
    static propTypes = {}
    constructor(props){
        super(props);
      }
      render(){
        return (
            <div className="todolist">

            </div>
        );
      }

}
function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }

  