import React, { useMemo } from "react";

import '../css/RangeSlider.css';
 
// useMemo 와 hook에 대해 알아보시오.

export default function RangeSlider({
    // Props 
    min,
    max,
    step = 1,
    value,
    onChange,
    label,
    unit,
}) {
    const minValue = value[0];
    const maxValue = value[1];

    // 퍼센트 계산 (선택 영역 표시용)
    const minPercent = useMemo(() => {
    return ((minValue - min) / (max - min)) * 100;
    }, [minValue, min, max]);

    const maxPercent = useMemo(() => {
    return ((maxValue - min) / (max - min)) * 100;
    }, [maxValue, min, max]);

    // 왼쪽 핸들
    const handleMinChange = (e) => {
    const v = Number(e.target.value);
    const nextMin = Math.min(v, maxValue - step);
    onChange([nextMin, maxValue]);
    };

    // 오른쪽 핸들
    const handleMaxChange = (e) => {
    const v = Number(e.target.value);
    const nextMax = Math.max(v, minValue + step);
    onChange([minValue, nextMax]);
    };

    return (
            
        <div className="rs">
            {(label || unit) && (
                <div className="rsHeader">
                    {label && <div className="rsLabel">{label}</div>}
                    <div className="rsValue">
                        {minValue}~{maxValue}
                        {unit || ""}
                    </div>
                </div>
            )}

            <div className="rsTrackWrap">
            {/* 전체 트랙 */}
            <div className="rsTrack" />

            {/* 선택된 범위 */}
            <div
                className="rsRange"
                style={{
                    left: `${minPercent}%`,
                    width: `${maxPercent - minPercent}%`,
                }}
            />

            {/* 왼쪽 슬라이더 */}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minValue}
                onChange={handleMinChange}
                className="rsInput"
                style={{ zIndex: 3 }}
            />

            {/* 오른쪽 슬라이더 */}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxValue}
                onChange={handleMaxChange}
                className="rsInput"
                style={{ zIndex: 4 }}
            />
            </div>
        </div>
    );
}
