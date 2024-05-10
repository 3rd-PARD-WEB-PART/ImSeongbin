import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import Header from '../pic/Header_1.png';
import 돛보기 from '../pic/search.png';
import Mark from '../pic/Mark.png';
import Alert from '../pic/Alert.png';
import Cart from '../pic/Cart.png';
import smallface from '../pic/smallface.png';
import bar from '../pic/set.svg';
import search from '../pic/search2.svg';
import MediaQuery from "react-responsive";

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
            <MediaQuery minWidth={768}>
                <MainBanner>
                    <TopBar>
                        {/* 로고 */}
                        <Images src={Header} alt="Header" />
                        {/* 메뉴 */}
                        <Menus>
                            <Menu>커뮤니티</Menu>
                            <Menu>쇼핑</Menu>
                            <Menu>인테리어/생활</Menu>
                        </Menus>
                        {/* 검색창 */}
                        {/* Laptop view */}
                        <MediaQuery minWidth={1024}>
                            <SearchArea>
                                <img src={돛보기} alt="돛보기" />
                                <Search type="text" placeholder="통합검색" />
                            </SearchArea>
                        </MediaQuery>
                        {/* Tablet view */}
                        <MediaQuery minWidth={768} maxWidth={1023}>
                            <img src={search} alt="search" style={{ marginRight: "21px", cursor: "pointer" }} />
                        </MediaQuery>
                        {/* 나머지 아이콘 */}
                        <Icons>
                            <Icon src={Mark} marginRight={21} alt="Mark" />
                            <Icon src={Alert} marginRight={18} alt="Alert" />
                            <Icon src={Cart} marginRight={21} alt="Cart" />
                        </Icons>
                        <Icon src={smallface} alt="smallface" />
                        <Button>글쓰기</Button>
                    </TopBar>
                </MainBanner>
            </MediaQuery>
            {/* Mobile View */}
            <MediaQuery maxWidth={767}>
                <MobileMenu>
                    <img src={bar} alt="bar" style={{ marginLeft: "17px" }} />
                    <Images src={Header} alt="Header" style={{ marginRight: "0px", width: "78px", height: "38px" }} />
                    <MIcon>
                        <img src={search} alt="search" style={{ marginRight: "21px", cursor: "pointer" }} />
                        <img src={Cart} alt="Cart" style={{ marginRight: "16px" }} />
                    </MIcon>
                </MobileMenu>
            </MediaQuery>
            <MenuRow gap={51} fontSize={18}>
                <NavLink to={`/profilePage`} style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>프로필</NavLink>
                <NavLink style={defaultStyle}>나의 쇼핑</NavLink>
                <MediaQuery minWidth={768}>
                    <NavLink style={defaultStyle}>나의 리뷰</NavLink>
                </MediaQuery>
                <NavLink to={`/editProfile`} style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}>설정</NavLink>
            </MenuRow>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;

// Styled Components
const MainBanner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 86px;
    justify-content: center;
    border: solid;
    border-width: 0px 0px 1px 0px;
    border-color: #eaebef;
`;

const Images = styled.img`
    background-color: white;
    width: 85px;
    height: 41.49px;
    cursor: pointer;
    margin-right: 50px;

    @media (max-width: 1023px) {
        margin-right: 37px;
    }
`;

const TopBar = styled.div`
    display: flex;
    width: 100%;
    height: 86px;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-bottom: 1px solid #EAEBEF;
`;

const Menus = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;

    margin-right: 118px;
`;

const Menu = styled.div`
    font-family: Inter, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 21.78px;
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
    &:focus {
        outline: none;
    }
`;

const Icons = styled.div`
    display: flex;
`;

const Icon = styled.img`
    margin-right: ${({ marginRight }) => marginRight || 0}px;
    cursor: pointer;
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
    cursor: pointer;
`;

const MenuRow = styled.div`
    display: flex;
    justify-content: center;
    font-family: Inter, sans-serif;
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

const MobileMenu = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    justify-content: space-between;
    width: 100vw;
    height: 60px;
    border: 1px solid #EAEBEF;
`;

const MIcon = styled.div`
    display: flex;
    justify-content: space-between;
    width: 61px;
    margin-right: 21px;
`;


// import { Outlet, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Header from '../pic/Header_1.png';
// import 돛보기 from '../pic/search.png';
// import Mark from '../pic/Mark.png';
// import Alert from '../pic/Alert.png';
// import Cart from '../pic/Cart.png';
// import smallface from '../pic/smallface.png';
// import bar from '../pic/set.svg';
// import search from '../pic/search2.svg';
// import MediaQuery from "react-responsive";

// const Layout = () => {
//     const activeStyle = {
//         color: '#35c5f0',
//         textDecoration: 'none'
//     };
//     const defaultStyle = {
//         color: 'black',
//         textDecoration: 'none'
//     };

//     return (
//         <div>
//             <MediaQuery minWidth = {768}>
//             <MainBanner>
//                 <MediaQuery minWidth={768}></MediaQuery>
//                     <TopBar>
//                     {/*로고*/}
//                     <Images src={Header} />
//                     {/*메뉴*/}
//                     <Menus>
//                         <Menu>커뮤니티</Menu>
//                         <Menu>쇼핑</Menu>
//                         <Menu>인테리어/생활</Menu>
//                     </Menus>
//                     {/*검색창*/}
//                     {/* Laptop view */}
//                     <MediaQuery minWidth = {1024}>
//                         <SearchArea>
//                             <img src={돛보기} alt = "돛보기" />
//                             <Search type="text" placeholder="통합검색" />
//                         </SearchArea>
//                     </MediaQuery>
//                     {/* Tablet view */}
//                     <MediaQuery maxWidth = {1023} minWidth = {768}>
//                         <img src={search} alt = "search" style = {{marginRight: "21px", cursor: "pointer"}} />
//                     </MediaQuery>
//                     {/*나머지 아이콘*/}
//                     <Icons>
//                         <Icon src={Mark} marginRight={21} />
//                         <Icon src={Alert} marginRight={18} />
//                         <Icon src={Cart} marginRight={21} />
//                     </Icons>
//                     <Icon src={smallface} />
//                     <Button>글쓰기</Button>
//                 </TopBar>
//             </MainBanner>
//             </MediaQuery>
//             {/* Mobile View */}
//             <MediaQuery minWidth = {767}>
//                 <MobileMenu>
//                     <img src = {bar} alt = "bar" marginLeft={17} />
//                     <Images>
//                         <img src = {Header} alt = "Header" style = {{marginRight: "0px", width: "78px", height: "38px"}} />
//                     </Images>
//                     <MIcon>
//                         <img src = {search} alt = "search" style = {{marginRight: "21px", cursor: "pointer"}} />
//                         <img src = {Cart} alt = "Cart" style = {{marginRight: "16px"}} />
//                     </MIcon>
//                 </MobileMenu>
//             </MediaQuery>
//             <MenuRow gap={51} fontSize={18}>
//                 <NavLink to={`/profilePage`} style={({isActive}) => (isActive ? activeStyle: defaultStyle)}>프로필</NavLink>
//                 <NavLink style={defaultStyle}>나의 쇼핑</NavLink>
//                 <NavLink style={defaultStyle}>나의 리뷰</NavLink>
//                 <NavLink to={`/editProfile`} style={({isActive}) => (isActive ? activeStyle: defaultStyle)}>설정</NavLink>
//             </MenuRow>
//             <main>
//                 <Outlet />
//             </main>
//         </div>
//     );
// };

// const MainBanner = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items center;
//     height: 86px;
//     justify-content: center;
//     border: solid;
//     border-width: 0px, 0px, 1px, 0px;
//     border-color: #eaebef;
// `;

// const Images = styled.img`
//     display: flex;
//     background-color: white;
//     width: 85px;
//     height: 41.49px;
//     justify-content: center;
//     aling-imtes: center;
//     border: none;
//     flex-shrink: 0;
//     margin-right: 50px;
//     cursor: pointer;
// `;

// const TopBar = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     height: 86px;
//     justify-content: center;
//     align-items: center;
//     background-color: white;
//     background: #FFF;
//     border-bottom: 1px solid #EAEBEF;
// `;

// const Menus = styled.div`
//     display:flex;
//     flex-direction: row;
//     align-items: center;
//     gap: 30px;
//     cursor: pointer;
// `;

// const Menu = styled.div`
//     font-family: Inter;
//     font-size: 18px;
//     font-weight: 700;
//     line-height: 21.78;
//     text-align: center;
// `;

// const SearchArea = styled.div`
//     display: flex;
//     flex-direction: row;
//     width: 358px;
//     height: 41px;
//     align-items: center;
//     padding: 5px 11px;
//     background-color: white;
//     justify-content: center;
//     flex-shrink: 0;
//     border: 1px solid #DADDE0;
//     border-radius: 3px;
//     margin-right: 29px;
//     margin-left: 118px;
// `;

// const Search = styled.input`
//     width: 100%;
//     height: 90%;
//     margin-left: 11px;
//     border: none;
//     font-size: 16px;
//     &:focus{
//         outline:none;
//     }
// `;

// const Icons = styled.div`
//     display: flex;
//     flex-direction: row;
// `;

// const Icon = styled.img`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     margin-right: 23px;
// `;

// const Button = styled.div`
//     width: 100px;
//     height: 43px;
//     border-radius: 5px;
//     background-color: #35c5f0;
//     color: white;
//     text-align: center;
//     line-height: 43px;
//     font-size: 13px;
//     margin-left: 40px;
// `;

// const MenuRow = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     font-family: Inter;
//     font-weight: 700;
//     line-height: 21.78px;
//     text-align: center;
//     height: 65px;
//     border: solid;
//     border-width: 0px 0px 1px 0px;
//     border-color: #eaebef;
//     align-items: center;
//     gap: ${({ gap }) => gap}px;
//     font-size: ${({ fontSize }) => fontSize}px;
//     background-color: #FFFFFF;
// `;

// const MobileMenu = styled.div`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     flex-shrink: 0;
//     justify-content: space-between;
//     width: 100vw;
//     height: 60px;
//     border: 1px solid #EAEBEF
// `;

// const MIcon = styled.div`
//     display: flex;
//     justify-content: space-between;
//     width: 61px;
// `;

// export default Layout;