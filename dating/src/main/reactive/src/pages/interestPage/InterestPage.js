// src/pages/interestPage/InterestPage.js
// 용도 : 조건 검색

import { useState } from 'react';
import RangeSlider from './components/RangeSlider';
import './css/interestPage.css';
// import axios from 'axios'; // axios 는 아래 import api ... 파일 참고
import api from '../../api/api';


function InterestPage() {

    // 조건 검색 변수
    const [age, setAge] = useState([18, 30]); // 나이 저장 변수
    const [height, setHeight] = useState([150, 201]); // 키 저장 변수
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

        // TODO:
        // 현재는 api.get을 직접 호출
        // 추후 matchApi.js 같은 파일로 분리해서
        // getMatches(params) 형태로 감쌀 예정

        // axios는 params 옵션으로 query string을 자동 생성해줌
        // const params = new URLSearchParams
        const res = await api.get("/api/matches", {
        params: {
          ageMin: age[0],
          ageMax: age[1],
          heightMin: height[0],
          heightMax: height[1],
          distMin: distance[0],
          distMax: distance[1],
            },
        });

        // axios는 응답 데이터가 res.data에 있음
        setMatches(res.data);
        
        console.log(res.data);

        // 화면 교체
        setView("RESULT");
        } catch (e) {
            // 에러 대응
            const msg =
            e?.response?.data?.message || // (나중에 표준 에러 JSON 만들면 여기로 잡힘)
            e?.response?.statusText ||
            e?.message ||
            "요청 중 오류가 발생했습니다.";

            setError(msg);
        } finally {
        setLoading(false);
        }
    };

    // 다시 검색 핸들러
    const handleBackToFilter = () => {
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
                    {m.name} / {m.age}세 / {m.height}cm / {m.distanceKm}km
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
                관심사 - 추후 필요한 것 추가 예정
            </div>

            {/* 검색 버튼 */}
            <button className="btn search-cta-outline w-100" type="button"
                disabled={loading}
                onClick={handleSearch}>
                {loading ? "검색 중..." : "검색"}
            </button>

            {/* 에러 발생시 표시 */}
            {error && <p style={{ marginTop: 8 }}>에러: {error}</p>}

        </div>

        </>

    )

}
 
export default InterestPage;
