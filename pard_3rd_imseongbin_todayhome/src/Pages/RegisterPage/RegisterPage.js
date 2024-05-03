import './RegisterPage.css';
import React, { useState } from 'react';
import logo from '../pic/Logo.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { InfoSender } from './atom'; // atoms.js에서 정의한 atom을 임포트

function RegisterPage() {
    const navigate = useNavigate();
    const [registrationData, setRegistrationData] = useRecoilState(InfoSender);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleRegistration = () => {
        // atom에 사용자 입력 데이터 저장
        setRegistrationData({ email, password, nickname });
        navigate('/profilePage'); // 회원가입 후 프로필 페이지로 이동
    };

    return (
        <div className='mBox'>
            <div className='top'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div className='subBox'>
                <div className='sBox'>
                    <p className='title-text'>회원가입</p>
                    <p className='second-title'>이메일</p>
                    <input
                    type='text'
                    placeholder='이메일'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className='input'
                    />

                    <p className='second-title'>비밀번호</p>
                    <p className='second-title'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                    <input
                    type='password'
                    placeholder='비밀번호'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className='input'
                    />

                    <p className='second-title'>비밀번호 확인</p>
                    <input
                    type='password'
                    placeholder='비밀번호 확인'
                    className='input'
                    />

                    <p className='second-title'>닉네임</p>
                    <p className='second-title'>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                    <input
                    type='text'
                    placeholder='별명 (2~15자)'
                    value={nickname}
                    onChange={e => setNickname(e.target.value)}
                    className='input'
                    />

                    <button className='btu-font' onClick={handleRegistration}>회원가입하기</button>

                    <p className='check-text'>이미 아이디가 있으신가요?<div className='underline'>로그인</div></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;