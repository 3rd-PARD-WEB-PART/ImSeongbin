import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Face from "../pic/프로필 아이콘.png";
import scrap from "../pic/Scrap.png";
import like from "../pic/Heart.png";
import liked from "../pic/하트 아이콘.svg"
import coupon from "../pic/Coupon.png";



function Profile () {
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const onClickLikeButton = () => {
        setIsClicked((isClicked) => (!isClicked));
    }

    const onClickEdit = () => {
        navigate("/editProfile");
    }

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
                <ProfileArea>
                    <FaceIcon src={Face} />
                    <Word>
                        <Name>성빈IM</Name>
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
                            <ButtonPic src={isClicked ? liked: like} alt="하트 아이콘" onClick={onClickLikeButton} style={{width : "30px"}}/>
                            <ButtonWord>좋아요</ButtonWord>
                            <Count2>{isClicked? 1 : 0}</Count2>
                        </Button1>
                        <Button>
                            <ButtonPic src={coupon} />
                            <ButtonWord>내 쿠폰</ButtonWord>
                            <Count2>0</Count2>
                        </Button>
                    </Buttons>
                </ProfileArea>

                <div>
                    <div>
                        <Square>
                            사진 <Sel>0</Sel>
                        </Square>
                        <Box>+ 첫번째 사진을 올려보세요.</Box>
                    </div>
                    <div>
                        <Square>
                            집들이 <Sel>0</Sel>
                        </Square>
                        <Box>+ 첫번째 집들이를 올려보세요.</Box>
                    </div>
                </div>
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
    background-color: #FFFFFF
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    text-align: center;
    gap: 30px;
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
`;

const FaceIcon = styled.img`
    width: 130px;
    height: 129.5;
    margin-bottom: 25px;
`;

const Word = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Name = styled.div`
    font-family: Inter;
    font-size: 26px;
    font-weight: 700;
    line-height: 31.47px;
    text-align: center;
    margin-bottom: 13px;
`;

const Follow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const Setting = styled.div`
    width: 60px;
    height: 34.87px;
    border-radius: 5px;
    border: 1px solid #dbdbdb;
    line-height: 34.87px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 30px;
    cursor: pointer;
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
`;

const Square = styled.div`
    font-weight: bold;
    margin-bottom: 21px;
    font-size: 18px;
`;

const Box = styled.div`
    width: 750px;
    height: 187.28px;
    border: dashed 1px #757575;
    text-align: center;
    line-height: 187.28px;
    margin-bottom: 61.77px;
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    width: 48px;
    align-items: center;
    height: 100%
    margin-top: 28.39px;
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
    font-weight: bold;
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

export default Profile;