import './RegisterPage.css';
import React from 'react';
import logo from '../pic/Logo.png';

function RegisterPage() {
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
                    id='input'
                    type='text'
                    placeholder='이메일'
                    />

                    <p className='second-title'>비밀번호</p>
                    <p className='second-title'>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                    <input
                    id='input'
                    type='text'
                    placeholder='비밀번호'
                    />

                    <p className='second-title'>비밀번호 확인</p>
                    <input
                    id='input'
                    type='text'
                    placeholder='비밀번호 확인'
                    />

                    <p className='second-title'>닉네임</p>
                    <p className='second-title'>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</p>
                    <input
                    id='input'
                    type='text'
                    placeholder='별명 (2~15자)'
                    />

                    <button className='btu-font'>회원가입하기</button>

                    <p className='check-text'>이미 아이디가 있으신가요?<div className='underline'>로그인</div></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;