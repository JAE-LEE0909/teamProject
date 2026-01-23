// src/pages/interestPage/InterestPage.js
// 용도 : 조건 검색

import { useState } from 'react';
import RangeSlider from './components/RangeSlider';
import './css/interestPage.css';

function InterestPage() {

    // 조건 검색 변수
    const [age, setAge] = useState([25, 34]); // 나이 저장 변수
    const [height, setHeight] = useState([168, 201]); // 키 저장 변수
    const [distance, setDistance] = useState([1, 20]); // 거리 저장 변수

    // 화면 전환 상태
    const [view, setView] = useState("FILTER"); // "FILTER" | "RESULT" , FILTER 는 조건 검색, RESULT 는 검색 결과
    const [matches, setMatches] = useState([]);

    // 로딩/에러 (필수는 아니지만 있으면 디버깅이 쉬움)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // 검색 핸들러
    const handleSearch = async () => {
        try {
        setLoading(true);
        setError("");

        // query param을 쓰는 대신, 그냥 요청에 파라미터를 붙여 호출만 함(주소창은 안 바뀜)
        const params = new URLSearchParams({
            ageMin: age[0], // age 배열 1번째가 최소값
            ageMax: age[1], // age 배열 2번째가 최대값
            heightMin: height[0],
            heightMax: height[1],
            distMin: distance[0],
            distMax: distance[1],
        });

        const res = await fetch(`http://localhost:8080/api/matches?${params}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        setMatches(data);
        
        setView("RESULT");
        } catch (e) {
        setError(e?.message || String(e));
        } finally {
        setLoading(false);
        }
    };

    // 다시 검색 핸들러
    const handleBackToFilter = () => {
        // 원하면 matches도 비울 수 있음: setMatches([]);
        setView("FILTER");
    };


    // ===========================
    // 결과 화면
    // ===========================
    if (view === "RESULT") {
        return (
        <div className="settingsPage">
            <h3>매칭 결과</h3>

            <button onClick={handleBackToFilter}>조건 다시 선택</button>

            {matches.length === 0 ? (
            <p>조건에 맞는 사람이 없습니다.</p>
            ) : (
            <ul>
                {matches.map((m) => (
                <li key={m.id}>
                    {m.nickname} / {m.age}세 / {m.height}cm / {m.distanceKm}km
                </li>
                ))}
            </ul>
            )}
        </div>
        );
    }


    // ===========================
    // 조건 선택 
    // ===========================
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
                    unit="세"
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

            {/* 검색 버튼 */}
            <button onClick={handleSearch} disabled={loading}>
                {loading ? "검색 중..." : "검색"}
            </button>

            {/* 에러 발생시 표시 */}
            {error && <p style={{ marginTop: 8 }}>에러: {error}</p>}

        </div>

        </>

    )

}
 
export default InterestPage;
