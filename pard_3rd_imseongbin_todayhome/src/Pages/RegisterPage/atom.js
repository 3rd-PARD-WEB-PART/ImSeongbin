import { atom } from 'recoil';
import profilePic from '../pic/프로필 이미지.png';

// 영구 저장용 atom
export const InfoSender = atom({
    key: 'InfoSender',
    default: {
        email: null,
        nickname: null,
        homepage: null,
        gender: null,
        birthday: null,
        image: null,
        intro: null
    },
    effects_UNSTABLE: [
        ({ setSelf }) => {
            const savedData = sessionStorage.getItem('InfoSender');
            if (savedData) {
                setSelf(JSON.parse(savedData));
            }
            return () => {
                const currentValue = sessionStorage.getItem('InfoSender');
                if (currentValue) {
                    sessionStorage.setItem('InfoSender', JSON.stringify(currentValue));
                }
            };
        }
    ]
});
