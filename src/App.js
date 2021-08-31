import './App.css';
import React from 'react';
import data from './Data/data.json';
import Usertable from './Components/usertable';

const App = () => {
  console.log(data);
  return (
    <div className='wrapper'>
      <Usertable data={data} />
    </div>
  );
};

export default App;
