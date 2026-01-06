// src/pages/MyPage.js
// 용도 : 마이 페이지

import { useState } from 'react';
import './css/myPage.css';


const TABS = ["포스팅", "자기소개", "관심사"];

const galleryData = {
  포스팅: [
    "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
    "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg",
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
    "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
  ],
  자기소개: [
    "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
    "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg",
  ],
  관심사: [
    "https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg",
  ],
};


function MyPage(){

    const [activeTab, setActiveTab] = useState("포스팅");

    const images = galleryData[activeTab] || [];

    return (
        <>
        <div className="profile-card-wrap">
            <div className="profile-card">
                {/* 상단 헤더 + 프로필 */}
                <div className="profile-header">
                <div className="header-bg" />

                {/* 프로필 이미지 */}
                <div className="profile-image-wrap">
                    <img
                    className="profile-image"
                    src="https://talkimg.imbc.com/TVianUpload/tvian/TViews/image/2023/09/03/458cdc31-1445-41e8-ac54-bacf8dd5b4f1.jpg"
                    alt="avatar"
                    />
                </div>
                </div>

                {/* 이름 / 위치 */}
                <div className="profile-main-info">
                <h2 className="profile-name">김지현</h2>
                <div className="profile-location">
                    <span className="location-icon">📍</span>
                    <span>방배동, 서울</span>
                </div>
                </div>

                {/* 통계 영역 */}
                <div className="profile-stats">
                    <div className="stat-item">
                        <div className="stat-number">250</div>
                        <div className="stat-label">포스팅</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">52</div>
                        <div className="stat-label">내가 누른 좋아요</div>
                    </div>
                    <div className="stat-item">
                        <div className="stat-number">80</div>
                        <div className="stat-label">받은 좋아요</div>
                    </div>
                </div>

                {/* 탭 메뉴 */}
                <div className="profile-tabs">
                {TABS.map((tab) => (
                    <button
                    key={tab}
                    className={
                        "tab-item" + (activeTab === tab ? " tab-item-active" : "")
                    }
                    onClick={() => setActiveTab(tab)}
                    >
                    {tab}
                    </button>
                ))}
                </div>

                {/* 탭 밑 구분선 */}
                <div className="tabs-divider" />

                {/* 갤러리 그리드 */}
                <div className="gallery-grid">
                {images.map((src, idx) => (
                    <div key={idx} className="gallery-item">
                    <img src={src} alt={`${activeTab} ${idx}`} />
                    </div>
                ))}
                </div>
            </div>
        </div>

        <div className='setting-btn-wrap'>
                <div className='setting-btn'>
                    {/* 버튼 2개 */}
                    <div className="profile-actions">
                    <button className="btn-primary">개인정보 수정</button>
                    <button className="btn-outline">공지사항</button>
                    <button className="btn-outline">문의사항</button>
                    <button className="btn-outline">개인정보 정책</button>    
                    </div>
                </div>
        </div>
        </>

    )
}

export default MyPage;