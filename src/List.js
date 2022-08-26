import React from 'react';

const List = ({people}) => {
  return (
    <>
      {people.map((person) =>{
        return(
          <article  className='person'>
            <img src={person.image} alt="" />
            <div>
            
              <h4>{person.name}</h4>
              <p>{person.age}</p>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
