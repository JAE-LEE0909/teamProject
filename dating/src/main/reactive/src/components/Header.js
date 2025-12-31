// src/components/Header.js
import { Button } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">

        <a href="/" className="logo">
          <img src="/img/new_meet_web_logo.png" alt="logo" />
        </a>

        <div className="auth-buttons">
          <Button variant="light">로그인</Button>
          <Button variant="light">회원가입</Button>
        </div>

      </div>
    </header>
  );
};

export default Header;