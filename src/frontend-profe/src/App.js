import { useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';

import './App.css';

import { Context } from './storage/SharedStorage';

import Instructions from './views/Instructions/Instructions';
import MainChatView from './views/MainChatView/MainChatView';

function App() {

  const [ store ] = useContext(Context);
  const navigate = useNavigate();

  return (
    <>
      <h1>Chat</h1>

      <ul>
        <Link to="/">
          <ul>Chat</ul>
        </Link>
        <Link to="/instructions/">
          <ul>Instructions</ul>
        </Link>
      </ul>

      <button onClick={()=>{navigate("/")}}>Chat</button>
      <button onClick={()=>{navigate("/instructions/")}}>Instruccións</button>

        <Routes>
          <Route path="/" element={<MainChatView/>}/>
          <Route path="/instructions/" element={<Instructions/>}/>
        </Routes>
    </>
  );
}

export default App;
