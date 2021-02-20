import React, { useContext } from 'react';
import './App.css';
import SearchUser from './components/SearchUser';
import { UserState } from './components';
import { useTranslation } from 'react-i18next';
function App() {
  const {t, i18n} = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
       <div>
         <button type="button" onClick={() => changeLanguage('bn')}> bn </button>
        <button type="button" onClick={() => changeLanguage('en')}> en </button>
         <SearchUser />
         <UserState />
       </div>
  );
}

export default App
