import React from 'react';

const ErrorExample = () => {
  let title= 'random title';
  
  const handleClick = () => {// function made to handle click of button change title
    title = 'Hello People!'
    console.log(title)
  }

  return(
    <React.Fragment>
      <h2>useState error example</h2>;
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  )
};

export default ErrorExample;
