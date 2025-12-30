// src/main/frontend/src/App.js

import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Rank from './pages/Rank';
import MyPage from './pages/myPage/MyPage';
import image from './functionCode/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/main')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    return (
      <div className="app">
        
        {/*커스텀 Header*/}
        <Header />
        <div>
          백엔드에서 가져온 데이터입니다 : {hello}
        </div>

        {/*페이지 이동 버튼*/}
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

        {/*페이지 Component를 불러와 표시*/}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        
        {/*커스텀 Footer*/}
        <Footer />

      </div>
    );
}

export default App;