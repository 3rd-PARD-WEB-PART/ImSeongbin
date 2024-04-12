import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from '../pic/Header_1.png';
import 돛보기 from '../pic/search.png';
import Mark from '../pic/Mark.png';
import Alert from '../pic/Alert.png';
import Cart from '../pic/Cart.png';
import smallface from '../pic/smallface.png';

const Layout = () => {
    const activeStyle = {
        color: '#35c5f0',
        textDecoration: 'none'
    };
    const defaultStyle = {
        color: 'black',
        textDecoration: 'none'
    };

    return (
        <div>
            <MainBanner>
                    <TopBar>
                    {/*로고*/}
                    <Img src={Header} />
                    {/*메뉴*/}
                    <Menus>
                        <Menu>커뮤니티</Menu>
                        <Menu>쇼핑</Menu>
                        <Menu>인테리어/생활</Menu>
                    </Menus>
                    {/*검색창*/}
                    <SearchArea>
                        <img src={돛보기} />
                        <Search type="text" placeholder="통합검색" />
                    </SearchArea>
                    {/*나머지 아이콘*/}
                    <Icons>
                        <Icon src={Mark} marginRight={21} />
                        <Icon src={Alert} marginRight={18} />
                        <Icon 
                            src={Cart}
                            marginRight={16.5} />
                    </Icons>
                    <Icon src={smallface} />
                    <Button>글쓰기</Button>
                </TopBar>
            </MainBanner>
            <MenuRow gap={51} fontSize={18}>
                <NavLink to={`/profilePage`} style={({isActive}) => (isActive ? activeStyle: defaultStyle)}>프로필</NavLink>
                <NavLink style={defaultStyle}>나의 쇼핑</NavLink>
                <NavLink style={defaultStyle}>나의 리뷰</NavLink>
                <NavLink to={`/editProfile`} style={({isActive}) => (isActive ? activeStyle: defaultStyle)}>설정</NavLink>
            </MenuRow>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

const MainBanner = styled.div`
    display: flex;
    flex-direction: row;
    align-items center;
    height: 86px;
    justify-content: center;
    border: solid;
    border-width: 0px, 0px, 1px, 0px;
    border-color: #eaebef;
`;

const Img = styled.img`
    display: flex;
    background-color: white;
    width: 85px;
    height: 41.488px;
    justify-content: center;
    aling-imtes: center;
    border: none;
    flex-shrink: 0;
    margin-right: 50px;
    cursor: pointer;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 86px;
    justify-content: center;
    align-items: center;
    background-color: white;
    background: #FFF;
    border-bottom: 1px solid #EAEBEF;
`;

const Menus = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    cursor: pointer;
`;

const Menu = styled.div`
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.78;
    text-align: center;
`;

const SearchArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 358px;
    height: 41px;
    align-items: center;
    padding: 5px 11px;
    background-color: white;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid #DADDE0;
    border-radius: 3px;
    margin-right: 29px;
    margin-left: 118px;
`;

const Search = styled.input`
    width: 100%;
    height: 90%;
    margin-left: 11px;
    border: none;
    font-size: 16px;
    &:focus{
        outline:none;
    }
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
`;

const Icon = styled.img`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 23px;
`;

const Button = styled.div`
    width: 100px;
    height: 43px;
    border-radius: 5px;
    background-color: #35c5f0;
    color: white;
    text-align: center;
    line-height: 43px;
    font-size: 13px;
    margin-left: 40px;
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

export default Layout;