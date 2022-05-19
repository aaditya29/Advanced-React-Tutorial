import React from 'react';
import { data } from '../../../data';// importing data array

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);// Setting default array

  // setting function to remove an individual item from id
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)//filtering out people whose id isn't matched when onClick is invoked so that they remain on screen and returned to new people and the id clicked is deleted
    setPeople(newPeople)//passing newPeople in setPeople
  }

  return ( 
    <>
      {people.map((person) =>{// mapping over array of people
        const {id, name} = person;//destructuring data array in person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>  
          </div>
        )
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  )
};

export default UseStateArray;
