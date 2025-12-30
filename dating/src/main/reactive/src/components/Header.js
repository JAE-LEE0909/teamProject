// src/components/Header.js
import '../css/Header.css';

const Header = () => {
    return (
        <header className="header">
            {/* 로고 */}
            <a href='/' className='logo'>
                {/* 로고 이미지 경로 추후 수정 필요 */}
                <img src="http://localhost:3000/img/new_meet_web_logo.png" alt="logo"/>
            </a>
        </header>
    )
}

export default Header;