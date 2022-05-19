import React from 'react';
import { data } from '../../../data';// importing data array

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);// Setting default array
  return ( 
    <>
      {people.map((person) =>{// mapping over array of people
        const {id, name} = person;//destructuring data array in person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
          </div>
        )
      })}
    </>
  )
};

export default UseStateArray;
