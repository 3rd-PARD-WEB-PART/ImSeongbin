import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import profile from "../pic/프로필 이미지.png";
import { useRecoilState } from "recoil";
import { InfoSender } from "../RegisterPage/atom";
import { getUserData, patchUserData } from "../../API/AXIOS";

function EditProfile() {
    const [info, setInfo] = useRecoilState(InfoSender);
    const navigate = useNavigate();
    const input = useRef();
    const [userInfo, setUserInfo] = useState();

    const onClickimg = () => {
        input.current.click();
    }

    const id = 1;
    const getUser = async (id) => {
        try {
            const userData = await getUserData(id); // id 사용
            // setUserInfo(userData);
            // userInfo에서 필요한 필드를 가져와서 Recoil 상태에 설정
            setInfo({
                email: userData.data.email,
                nickname: userData.data.nickname,
                homepage: userData.data.homepage,
                gender: userData.data.gender,
                birthday: userData.data.birthday,
                image: userData.data.image,
                intro: userData.data.intro
            });
            console.log(userData.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUser(id);
    }, [])

    // 개별 정보 업데이트 함수
    const handleInfoUpdate = (field, value) => {
        setInfo(prev => ({ ...prev, [field]: value }));
    }

    // 각 필드별 핸들러 설정
    const setEmail = (e) => {
        handleInfoUpdate('email', e.target.value);
    }

    const setNickname = (e) => {
        handleInfoUpdate('nickname', e.target.value);
    }

    const setHomepage = (e) => {
        handleInfoUpdate('homepage', e.target.value);
    }

    const setGender = (e) => {
        handleInfoUpdate('gender', e.target.value);
    }

    const setBirthday = (e) => {
        handleInfoUpdate('birthday', e.target.value);
    }

    const setImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imgUrl = URL.createObjectURL(file);
            handleInfoUpdate('image', imgUrl);
        }
    }

    const setIntro = (e) => {
        handleInfoUpdate('intro', e.target.value);
    }
    
    const setEditButton = async () => {
        try {
            await patchUserData(info, id); // 수정된 데이터를 서버에 저장
            await getUser(id); // 서버로부터 데이터를 다시 가져와서 상태 업데이트
            navigate("/profilePage"); // 프로필 페이지로 이동
        } catch (error) {
            console.error(error);
        }
    };

    return(
        <>
            <MenuRow gap={25} fontsize={15}>
                <div>
                    <Span>회원정보수정</Span>
                </div>
                <div>알림 설정</div>
                <div>사용자 숨기기 설정</div>
                <div>전문가 신청</div>
                <div>비밀번호 변경</div>
                <div>추천코드</div>
            </MenuRow>
            <Div>
                <EditPage clickSubmit={setEditButton}>
                    <Top>
                        <div>회원정보수정</div>
                        <button>탈퇴하기</button>
                    </Top>
                    <EditInfo>
                        <EditBox>
                            <EmailBox>
                                이메일
                                <div>*필수항목</div>
                            </EmailBox>
                            <InputBox>
                                <div>
                                    <EnterNickname type="text" value={info.email} onChange={setEmail} />
                                </div>
                                이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
                            </InputBox>
                        </EditBox>
                        <EditBox style={{ marginTop: "40px" }}>
                            <EmailBox>
                                별명
                                <div>*필수항목</div>
                            </EmailBox>
                            <InputBox>
                                <EnterNickname type="text" value={info.nickname} onChange={setNickname} />
                            </InputBox>
                        </EditBox>
                        <EditBox style={{ marginTop: "55px" }}>
                            <Additional style={{ marginTop: "11px" }}>
                                홈페이지
                            </Additional>
                            <InputBox>
                                <EnterNickname type='text' value={info.homepage} onChange={setHomepage} />
                            </InputBox>
                        </EditBox>
                        <EditBox style={{ marginTop: "49px", justifyContent: "start"}}>
                            <Additional style={{ marginRight: "72px" }}>
                                성별
                            </Additional>
                            <GenderBtn>
                                <label>
                                    <Selec type="radio" value="남성" checked={info.gender === "남성"} onChange={setGender} />
                                    <div>남성</div>
                                </label>
                                <label>
                                    <Selec type="radio" value="여성" checked={info.gender === "여성"} onChange={setGender} />
                                    <div>여성</div>
                                </label>
                            </GenderBtn>
                        </EditBox>
                        <EditBox style={{ marginTop: "49px" }}>
                            <Additional style={{ marginTop: "11px" }}>
                                생년월일
                            </Additional>
                            <InputBox>
                                <EnterNickname type='date' value={info.birthday} onChange={setBirthday} />
                            </InputBox>
                        </EditBox>
                        <EditBox style={{ marginTop: "40px", justifyContent: "start" }}>
                            <Additional style={{ marginTop: "11px", width: "100px" }}>
                                프로필 이미지
                            </Additional>
                            <EditProfileImg>
                                <button type="button" onClick={onClickimg}>
                                    <img src={info.image} alt="프로필 이미지" />
                                </button>
                                <input type="file" ref={input} onChange={setImage} />
                            </EditProfileImg>
                        </EditBox>
                        <EditBox style={{ marginTop: "40px" }}>
                            <Additional style={{ marginTop: "11px" }}>
                                한줄 소개
                            </Additional>
                            <InputBox>
                                <EnterNickname type='text' value={info.intro} onChange={setIntro} />
                            </InputBox>
                        </EditBox>
                    </EditInfo>
                    <EditBtn>
                        <StyledLink to = "/profilePage">수정하기</StyledLink>
                    </EditBtn>
                </EditPage>
            </Div>
        </>
    );
}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;

    > div {
        color: #292929;
        font-size: 24px;
        font-family: Inter;
        font-weight: 700;
        font-style: normal;
        text-align: center;
        line-height: normal;
        margin-left: 50px;
    }

    > button {
        color: #F05656;
        font-size: 14px;
        font-family: Inter;
        font-weight: 400;
        font-style: normal;
        text-align: center;
        line-height: normal;
        text-decoration-line: underline;

        background-color: white;
        border: none;
        cursor: pointer;
    }
`;

const EditInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin-left: 50px;
    margin-top: 69px;
`;

const EditBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const Additional = styled.div`
    color: #292929;
    font-size: 15px;
    font-family: Inter;
    font-weight: 400;
    font-style: normal;
    line-height: normal;
`;

const EmailBox = styled(Additional)`
    margin-top: 10px;

    > div {
        color: #757575;
        font-size: 13px;
        font-family: Inter;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
    }
`;

const InputBox = styled.div`
    color: #9E9E9E;
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    > div {
        color: #DBDBDB;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 10px;
        gap: 2.5px;
    }
`;

const EnterEmail = styled.input`
    display: flex;
    flex-direction: row;

    width: 174px;
    height: 38px;
    flex-shrink: 0px;
    padding: 0px 7px;

    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    border-radius: 6px;
    border: 1px solid #DBDBDB;
    background: #FFF;
`;

const EnterNickname = styled(EnterEmail)`
    width: 384px;
`;

const GenderBtn = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    > label {
        color: #292929;
        display: flex;
        flex-direction: row;
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;

const Selec = styled.input`
    width: 22px;
    height: 22px;
    border: 1px solid #DBDBDB;
    border-radius: 50%;
    flex-shrink: 0;
    margin: 0;
    appearance: none;
    cursor: pointer;

    &:checked {
        border: 6px solid #35C5F0;
        border-radius: 50%;
        background-color: white;
    }
`;

const EditProfileImg = styled.div`
    display: flex;

    > button {
        background-color: white;
        width: 196.118px;
        height: 196px;
        flex-shrink: 0;
        border: 1px solid #DBDBDB;
        padding: 0;
        cursor: pointer;

        > img {
            width: 100%;
            height: 100%;
        }
    }

    > input {
        display: none;
    }
`;

const EditBtn = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
`;

const EditPage = styled.form`
    display: flex;
    flex-direction: column;
    width: 1236px;
    height: 956px;
    background: #FFF;
    flex-shrink: 0;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20);
    margin-top: 61px;
`;

const MenuRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: Inter;
    font-weight: 700;
    line-height: 21.78px;
    text-align: center;
    height: 65px;
    border: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #eaebef;
    align-items: center;
    gap: ${({ gap }) => gap}px;
    font-size: ${({ fontSize }) => fontSize}px;
    background-color: #FFFFFF;
`;

const Span = styled.span`
    color: #35C5F0;
`;

const StyledLink = styled(Link)`
    color: #FFF;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    font-family: Inter;
    line-height: normal;
    text-align: center;
    background: #35C5F0;
    border: none;
    border-radius: 5px;
    width: 100px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    margin-top: 14px;
    margin-right: 52px;
`;

export default EditProfile;