import React, { useState } from 'react';
import './App.css';
import PeopleForm from './Forms'
import People from './People'


function App() {
  const [person, setPerson] = useState([
    {
    name: 'Henry',
    email: 'Henrybsms@outlook.com',
    role: 'Web Developer'
    },

  ]);
  const addNewPerson = peep => {
    const newPerson = {
      name: peep.name,
      email: peep.email,
      role: peep.role
    };
    setPerson([...person, newPerson]);
  }

  return (
    <div className="App">
      <h1>Team Builder
        
      </h1>
      <PeopleForm addNewPerson={addNewPerson} />
      <People person={person} />
    </div>
  );
}
export default App;