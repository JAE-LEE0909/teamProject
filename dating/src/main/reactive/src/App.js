// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Rank from './pages/Rank';
import MyPage from './pages/MyPage';
import image from './functionCode/image'

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/main')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
      <>
        <div>
          백엔드에서 가져온 데이터입니다 : {hello}
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/rank">Rank</Link>
            </li>
            <li>
              <Link to="/mypage">MyPage</Link>
            </li>
          </ul>
        </nav>

         <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>

      </>
    );
}

export default App;