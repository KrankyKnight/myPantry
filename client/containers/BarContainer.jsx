// @description: The main view window that displays ingredients or recipes and displays the pantry list

import React from 'react';
import BarCard from '../components/BarCard.jsx';

const ContentContainer = ({cart, dispatch}) => {
  if(cart === undefined) {
    return(
      <div className='bar loading'>
        Loading Cart...
      </div>
    )
  }
  const newCart = [];
  let count = 0;
  for(const ingredient of cart) {
    count++;
    newCart.push(<BarCard key={`cart${count}`} name={ingredient} dispatch={dispatch}/>)
  }
  return(
    <div className='bar'>
      <ul>
        {newCart}
      </ul>
    </div>
  )
}

export default ContentContainer;