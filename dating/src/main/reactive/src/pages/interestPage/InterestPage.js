// src/pages/interestPage/InterestPage.js
// 용도 : 조건 검색

import { useState } from 'react';
import RangeSlider from './components/RangeSlider';
import './css/interestPage.css';

function InterestPage() {

    const [age, setAge] = useState([25, 34]); // 나이 저장 변수
    const [height, setHeight] = useState([168, 201]); // 키 저장 변수
    const [distance, setDistance] = useState([1, 20]); // 거리 저장 변수


    return (
        <>
        {/* 전체 틀 */}
        <div className="settingsPage">
            <div className="sectionTitle">원하는 이성을 찾아 보세요!</div>
            {/* 조건 1 - 나이 */}
            <div className="settingRow">
                <RangeSlider
                    label="나이"
                    min={18}
                    max={60}
                    step={1}
                    value={age}
                    onChange={setAge}
                />
            </div>

            {/* 조건 2 - 키 */}
            <div className="settingRow">
                <RangeSlider
                    label="키"
                    min={140}
                    max={210}
                    step={1}
                    unit="cm"
                    value={height}
                    onChange={setHeight}
                />
            </div>

            {/* 조건 3 - 거리 */}
            <div className="settingRow">
                <RangeSlider
                    label="거리"
                    min={1}
                    max={30}
                    step={1}
                    unit="km"
                    value={distance}
                    onChange={setDistance}
                />
            </div>
            
            {/* 조건 4 - 관심사 */}
            <div className="sectionTitle">Other</div>
            <div className="settingRow">
                관심사
            </div>
        </div>

        </>

    )

}

export default InterestPage;
