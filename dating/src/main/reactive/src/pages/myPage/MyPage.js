// src/pages/MyPage.js
// 용도 : 마이 페이지

import { useState } from 'react';
import './css/myPage.css';


const TABS = ["포스팅", "자기소개", "관심사"];

function MyPage(){

    const [activeTab, setActiveTab] = useState("포스팅");

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

            </div>

            {/* 설정 버튼 모음 */}
            <div className="settings-card">
                <h3 className="settings-title">설정 & 고객센터</h3>
                <div className="settings-actions">
                <button className="btn-primary">개인정보 수정</button>
                <button className="btn-primary">공지사항</button>
                <button className="btn-primary">문의사항</button>
                <button className="btn-primary">개인정보 정책</button>
                </div>
            </div>

        </div>
        


        </>

    )
}

export default MyPage;