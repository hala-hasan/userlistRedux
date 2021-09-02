import './App.css';
import React from 'react';
import { useEffect } from 'react';
import Usertable from './Components/usertable';
import { useDispatch } from 'react-redux';
import data from './Data/data.json';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: 'GET_DATA',
      payload: data
  })
}, );

  return (
    <div className='wrapper'>
      <Usertable data={data.data} dispatch={dispatch} />
    </div>
  );
};

export default App;
