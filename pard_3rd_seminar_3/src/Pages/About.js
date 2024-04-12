import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    console.log(location);

    return (
        <div>
            <h1>소개</h1>
            <p>리엑트 라우터를 사용해 보는 프로젝트입니다.</p>
            <p>쿼리스트링: {location.pathname}</p>
        </div>
    );
};

export default About;