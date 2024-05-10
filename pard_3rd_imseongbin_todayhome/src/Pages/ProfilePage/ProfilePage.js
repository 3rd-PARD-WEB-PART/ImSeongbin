import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Face from "../pic/프로필 아이콘.svg";
import scrap from "../pic/Scrap.png";
import like from "../pic/Heart.png";
import liked from "../pic/하트 아이콘.svg";
import coupon from "../pic/Coupon.png";
import MediaQuery from "react-responsive";
import { useRecoilValue } from 'recoil';
import { InfoSender } from "../RegisterPage/atom";

function Profile() {
    const Info = useRecoilValue(InfoSender);
    console.log(InfoSender);

    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const onClickLikeButton = () => {
        setIsClicked(!isClicked);
    };

    const onClickEdit = () => {
        navigate("/editProfile");
    };

    return (
        <>
            <MenuBanner>
                <div>
                    <Sel>모두보기</Sel>
                </div>
                <div>사진</div>
                <div>집들이</div>
                <div>노하우</div>
                <div>질문과 답변</div>  
                <div>스크랩북</div>
                <div>좋아요</div>
            </MenuBanner>
            <Body>
                {/* Laptop View */}
                <MediaQuery minWidth={1024}>
                    <ProfileArea>
                        <FaceIcon src={Face} />
                        <Word>
                            <Name>{Info.nickname}</Name>
                            <Follow>
                                <div>팔로워</div>
                                <Count>0</Count>
                                <div>팔로잉</div>
                                <Count>0</Count>
                            </Follow>
                            <Setting onClick={onClickEdit}>설정</Setting>
                        </Word>
                        <Hr />
                        <Buttons>
                            <Button>
                                <ButtonPic src={scrap} />
                                <ButtonWord>스크랩북</ButtonWord>
                                <Count2>0</Count2>
                            </Button>
                            <Button1>
                                <ButtonPic src={isClicked ? liked : like} alt="하트 아이콘" onClick={onClickLikeButton} />
                                <ButtonWord>좋아요</ButtonWord>
                                <Count2>{isClicked ? 1 : 0}</Count2>
                            </Button1>
                            <Button>
                                <ButtonPic src={coupon} />
                                <ButtonWord>내 쿠폰</ButtonWord>
                                <Count2>0</Count2>
                            </Button>
                        </Buttons>
                    </ProfileArea>
                </MediaQuery>

                {/* Tablet View */}
                <MediaQuery minWidth={768} maxWidth={1023}>
                    <TabletDiv>
                        <Div2nd>
                            <FaceIcon src={Info.image} alt="profile" />
                            <TabletInfo>
                                <Name style = {{marginTop: "0px"}}>{Info.nickname}</Name>
                                <Follow>
                                    <div>
                                        <HCount>팔로워</HCount>
                                        <Count>0</Count>
                                    </div>
                                    <div>
                                        <HCount>팔로잉</HCount>
                                        <Count>0</Count>
                                    </div>
                                </Follow>
                                <Setting onClick={onClickEdit} style = {{marginTop: "9px"}}>설정</Setting>
                            </TabletInfo>
                        </Div2nd>
                        <BottomDiv>
                            <Buttons>
                                <Button style = {{marginRight: "265px"}}>
                                    <ButtonPic src={scrap} />
                                    <ButtonWord>스크랩북</ButtonWord>
                                    <Count2>0</Count2>
                                </Button>
                                <Button1 style = {{marginRight: "269px"}}>
                                    <ButtonPic src={isClicked ? liked : like} alt="하트 아이콘" onClick={onClickLikeButton} />
                                    <ButtonWord>좋아요</ButtonWord>
                                    <Count2>{isClicked ? 1 : 0}</Count2>
                                </Button1>
                                <Button>
                                    <ButtonPic src={coupon} />
                                    <ButtonWord>내 쿠폰</ButtonWord>
                                    <Count2>0</Count2>
                                </Button>
                            </Buttons>
                        </BottomDiv>
                    </TabletDiv>
                </MediaQuery>

                {/* Mobile View */}
                <MediaQuery maxWidth={767}>
                    <MobileProfileArea>
                        <MobileBox>
                            <FaceIcon src={Info.image} alt="profile" />
                            <Word>
                                <Name>{Info.nickname}</Name>
                                <Follow>
                                    <div>팔로워</div>
                                    <Count>0</Count>
                                    <div>팔로잉</div>
                                    <Count>0</Count>
                                </Follow>
                                <Setting onClick={onClickEdit} style = {{marginTop: "9px"}}>설정</Setting>
                            </Word>
                        </MobileBox>
                        <MobileBox2>
                            <Buttons>
                                <MobileScrab style = {{marginRight: "213px"}}>
                                    <img src={scrap} alt = "scrab" />
                                    <ButtonWord>스크랩북</ButtonWord>
                                    <Count2>0</Count2>
                                </MobileScrab>
                                <MobileLike style = {{marginRight: "219px"}}>
                                    <button onClick={onClickLikeButton}>
                                        <img src = {isClicked ? liked : like} alt = "Heart" />
                                    </button>
                                    <ButtonWord>좋아요</ButtonWord>
                                    <Count2>{isClicked ? 1 : 0}</Count2>
                                </MobileLike>
                                <MobileCoup>
                                    <img src={coupon} alt = "coupon" />
                                    <ButtonWord>내 쿠폰</ButtonWord>
                                    <Count2>0</Count2>
                                </MobileCoup>
                            </Buttons>
                        </MobileBox2>
                    </MobileProfileArea>
                </MediaQuery>

                <RestContent>
                    <Text>
                        <AddImage>사진</AddImage>
                        <AddNum>0</AddNum>
                    </Text>
                    <NemoBox>
                        + 첫 번째 사진을 올려보세요.
                    </NemoBox>
                    <Text style = {{marginTop: "61.78px"}}>
                        <AddImage>집들이</AddImage>
                        <AddNum>0</AddNum>
                    </Text>
                    <NemoBox>
                        + 첫 번째 집들이를 올려보세요.
                    </NemoBox>
                </RestContent>
            </Body>
        </>
    );
}

const MenuBanner = styled.div`
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
    gap: 51px;
    font-size: ${({ fontSize }) => fontSize}px;
    background-color: #FFFFFF;

    // Laptop
    @media (min-width: 1024px) {
        font-size: 18px; // 노트북에서의 폰트 사이즈 증가
    }

    // Tablet
    @media (max-width: 1023px) {
        gap: 35.8px;
        padding: 10px 0;  // 상하 패딩 추가
    }

    // Mobile
    @media (max-width: 767px) {
        gap: 24.5px;
    }
`;

const Sel = styled.span`
    color: #35c5f0;
`;

const Body = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 153px;
    margin-top: 30.88px;
    background-color: #FFFFFF;

    // Tablet
    @media (max-width: 1023px) {
        flex-direction: column;  // 태블릿에서는 세로로 정렬
        gap: 50px;  // 간격 조정
    }
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    height: 125.55px;
    width: 231px;
    justify-content: center;
    align-items: center;
    gap: 30px;

@media (min-width: 1024px) {
    align-items: baseline;
}

@media (max-width: 1023px){
    border: none;
    margin-top: 0;
    width: 100%;
}
`;

const ProfileArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 285px;
    height: 460.24px;
    flex-shirnk: 0;
    align-items: center;

    border-radius: 3px;
    border: 1px solid #DBDBDB;
    margin-left: 6px;
    padding-top: 31.88px;

    // Tablet
    @media (max-width: 1023px) {
        width: 90%;  // 태블릿에서 너비 조정
        margin: 20px auto;  // 자동 마진으로 중앙 정렬
        padding-top: 20px;  // 패딩 조정
    }
`;

const FaceIcon = styled.img`
    width: 130px;
    height: 129.5;
    margin-bottom: 25px;

    @media (max-width: 1023px) {
        margin-top: 0px;
    }

    @media (max-width: 767px) {
        margin-top: 33px;
        height: 88.34px;
        justify-content: end;
    }

    >img {
        @media (max-width: 767px) {
            width: 88.34px;
            height: 88.34px;
        }
    }
`;

const Word = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name =styled.div`
    display: flex;
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    @media (min-width: 1024px) {
        margin-bottom: 13px;
    }

    @media (max-width: 1023px) {
        margin-top: 24.9px;
    }
`;

const Follow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 12.95px;
    width: 121px;
    
    > div {
        display: flex;
        flex-direction: row;
    }
`;

const Setting = styled.div`
    display: flex;
    width: 60px;
    height: 34.87px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    line-height: normal;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 30px;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 13px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
`;

const Hr = styled.hr`
    width: 231px;
    color: #eaebef;
    margin-bottom: 28.39px;
`;

const ButtonPic = styled.img`
    margin-bottom: 10px;
`;

const ButtonWord = styled.div`
    color: #000;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    font-family: Inter;
    line-height: normal;
    text-align: center;
    height: 15.939px;

    margin-top: 11.95px;

    @media (max-width: 767px) {
        font-size: 15px;
    }
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
    align-items: center;
    height: 100%
    margin-top: 28.39px;

    @media (max-width: 767px) {
        flex-direction: row;
        height: 125.55px;
        width: 231px;
        border-top: 1px solid #EAEBEF;
        justify-content: center;
        margin-top: 51px;
        /* height: 54px; */
    }
`;

const Button1 = styled(Button)`
    width: 36px;

    > button {
        background-color: white;
        width: 30px;
        height: 25.905px;
        border 0;
        padding: 0;
        cursor: pointer;
    }
`;

const Count = styled.div`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Count2 = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-top: 5.98px;
`;

const TabletDiv =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1003px;
    height: 310px;
    border: 1px solid #EAEBEF;
    margin-top: 32px;
`;

const Div2nd =styled.div`
    display: flex ;
    width: 948px;
    height: 174px;
    border-bottom: 1px solid #EAEBEF;
    align-items: center;
`;

const TabletInfo =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    width: 130;
`;

const HCount = styled.div`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 5px;
`;

const BottomDiv =styled.div`
    display: flex ;
`;

const MobileProfileArea =styled.div`
    display: flex;
    width: 813px;
    height: 270px;
    flex-direction: column;
    border-bottom: 1px solid #EAEBEF;
`;

const RestContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 750px;
    margin-left: 153px;

    @media (max-width: 1024px){
        margin-left: 137px;
    }

    @media (max-width: 1023px){
        margin: 0;
        margin-left: 126.5px;
    }

    @media (max-width: 767px) {
        margin-left: 30.5px;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
    margin-top: 50.8px;

    @media (max-width:767px){
        margin-top:72px ;
    }
`;

const AddImage = styled.div`
    color: #000;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const AddNum = styled.div`
    color: #35C5F0;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const NemoBox = styled.div`
display: flex;
    width: 750px;
    height: 187.282px;
    flex-shrink: 0;
    border: 1px dashed #757575;
    justify-content: center;
    align-items: center;

    color: #757575;
    text-align: center;
    font-family: Inter;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    margin-top: 20.92px;
`;

const MobileBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 100%;
`;

const MobileBox2 = styled.div`
    display: flex;

`;

const MobileScrab = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-top: 28.39px;
    width: 56px;
    justify-content: start;
`;

const MobileLike = styled(MobileScrab)`
    width: 42px;
    > button {
        border: 0;
        background-color: white;
        padding: 0;
        width: 30px;
        height: 25.905px;
        cursor: pointer;
    }
`;

const MobileCoup = styled(MobileScrab)`
    width: 46px;
`;

export default Profile;