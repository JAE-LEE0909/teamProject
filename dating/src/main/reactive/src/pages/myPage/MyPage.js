// src/pages/MyPage.js
// 용도 : 마이 페이지
import { Button, Col, Container, Image } from 'react-bootstrap';
import './css/myPage.css';

function MyPage(){

    return (
        <>
            <div>
                <h1>마이 페이지 입니다.</h1>
                으아아아 모르겠다..ㅠㅠ
                 ㄴ 점심메뉴 추천 좀 해주십쇼 - 2025.12.30 
                <image />
            </div>

            <div className="container">

                {/* 프로필 사진 영역 */}
                {/* 이미지 경로는 배포를 고려하여 수정 예정 */}
                <div className="profile">프로필 사진
                    <Container>
                        <Col xs={6} md={4}>
                            <Image src="http://localhost:3000/img/new_meet_mobile_logo.png" rounded />
                        </Col>
                    </Container>
                </div>

                {/* 자기소개 영역 */}
                <div className="intro">자기소개

                </div>

                {/* 이미지 업로드 영역 */}
                <div className="upload">이미지 업로드

                </div>

                {/* 버튼 모음 영역 */}
                <div className="setting">버튼 모음
                    <div className="d-grid gap-2">
                        <Button variant="primary" size="lg">
                            설정
                        </Button>
                        <Button variant="primary" size="lg">
                            공지사항
                        </Button>
                    </div>
                </div>

            </div>



        </>

    )
}

export default MyPage;