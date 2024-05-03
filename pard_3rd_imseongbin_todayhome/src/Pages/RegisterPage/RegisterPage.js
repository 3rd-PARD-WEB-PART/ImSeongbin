import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { InfoSender } from '../RegisterPage/atom'; // 임시 atom을 import
import logo from '../pic/Logo.png';
import './RegisterPage.css';

function RegisterPage() {
    const navigate = useNavigate();
    const [info, setInfo] = useRecoilState(InfoSender);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleRegistration = () => {
        // 이메일과 닉네임만 InfoSender에 저장
        setInfo(prev => ({ ...prev, email, password, nickname }));
        navigate('/profilePage');
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
                    <p className='second-title'>닉네임</p>
                    <p className='second-title'>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                    <input
                        type='text'
                        placeholder='별명 (2~15자)'
                        value={nickname}
                        onChange={e => setNickname(e.target.value)}
                        className='input'
                    />
                    <button className='btu-font' onClick={handleRegistration}>회원가입하기</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;