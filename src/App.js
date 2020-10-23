import React, { useContext } from 'react';
import './App.css';
import SearchUser from './components/SearchUser';
import { UserState } from './components';
function App() {
  return (
       <div>
         <SearchUser />
         <UserState />
       </div>
  );
}

export default App
