import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return (
    <div>
      <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people = {people}/>
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
      </main>
      {/* {data.map((data)=> {
        return(
          <>
          <span>{data.id}</span><br />
            <span>{data.name}</span><br />
            <span>{data.age}</span><br />
            <img src={data.image} alt="" />
          </>
        )

      })} */}
    </div>
  );
}

export default App;
