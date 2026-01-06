// src/main/frontend/src/App.js

import {useEffect, useState} from 'react';
import axios from 'axios';
import { Routes, Route, Link, useLocation } from "react-router-dom";
import MatchPage from './pages/matchPage/MatchPage';
import Chat from './pages/chatPage/Chat';
import MyPage from './pages/myPage/MyPage';
import image from './functionCode/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import LikesPage from './pages/likesPage/LikesPage';
import InterestPage from './pages/interestPage/InterestPage';

function App() {
   const [hello, setHello] = useState('')

    useEffect(() => {
        axios.get('/main')
        .then(response => setHello(response.data))
        .catch(error => console.log(error))
    }, []);

    // 메뉴 여닫기 토글
    const [menuOpen, setMenuOpen] = useState('true');
    
    // 현재 경로 체크
    const location = useLocation();
    const path = location.pathname;   // 여기서 path가 정의


    return (
      <>
        {/*커스텀 Header*/}
        <Header />

        {/*중앙 - 페이지가 나타나는 자리*/}
        <main className='main'>

        <div>
          백엔드에서 가져온 데이터입니다 : {hello}
        </div>
        

          {/*페이지 Component가 표시되는 곳*/}
          <Routes>
            <Route path="/match" element={<MatchPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/interest" element={<InterestPage />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        

        {/*하단 메뉴 버튼 전체*/}
        <div className="buttom-nav-wrapper">
          
            {/*토글 버튼(열기/닫기)*/}
            <button 
              className='button-nav-toggle-btn'
              onClick={() => setMenuOpen(!menuOpen)} // 누르면 부정 f->t , t->f
            >
              {menuOpen ? (
              // 닫기 아이콘 (열려 있을때)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>

              ) : (
              // 열기 아이콘 (닫혀 있을때)
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
              </svg>

              )}
            </button>
            

            {/*하단 버튼*/}
            <div className={`buttom-nav ${menuOpen ? "" : "hidden"}`}>
                <div className='buttom-nav-icons'>
                  {/* 매칭 */}
                  <Link to="/match" aria-label="matching" className={`match-icon ${path === "/match" ? "active" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-fire" viewBox="0 0 16 16">
                    <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
                  </svg>
                  </Link>
                  {/* 채팅 */}
                  <Link to="/chat" aria-label="chatting" className={`chat-icon ${path === "/chat" ? "active" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                  </svg>
                  </Link>
                  {/* 내가받은 좋아요 */}
                  <Link to="/likes" aria-label="likes" className={`likes-icon ${path === "/likes" ? "active" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-hearts" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"/>
                  </svg>
                  </Link>
                  {/* 관심사 검색 */}
                  <Link to="/interest" aria-label="interest" className={`interest-icon ${path === "/interest" ? "active" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-grid-1x2-fill" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm0 9a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z"/>
                  </svg>
                  </Link>
                  {/* 마이페이지 - 임시 */}
                  <Link to="/mypage" aria-label="mypage" className={`mypage-icon ${path === "/mypage" ? "active" : ""}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                  </svg>
                  </Link>
                </div>
            </div>
            {/*하단 버튼*/}

          </div>
          {/*하단 메뉴 버튼 전체*/}

        </main>
        {/*중앙 - 페이지가 나타나는 자리*/}
        
        {/*커스텀 Footer*/}
        <Footer />

      </>
    );
}

export default App;