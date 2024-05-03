import { atom } from 'recoil';
import profilePic from '../pic/프로필 이미지.png';

export const InfoSender = atom({
    key: 'InfoSender', // 고유 키
    default: { // 기본값 설정
        email: { front: "webpart", back: "pard.com" },
        nickname: "임성빈",
        homepage: "web-pard.com",
        gender: "남성",
        birthday: "2000-05-06",
        image: profilePic,
        intro: "안녕하세요 안녕하세요 웹파트 과제입니다."
    }
});
