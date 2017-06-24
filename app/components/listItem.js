import React from 'react';

const listItem = (props) => {

  return(
    <li className='list-item-group'>
      {props.children}
    </li>
  );
};

export default listItem;
