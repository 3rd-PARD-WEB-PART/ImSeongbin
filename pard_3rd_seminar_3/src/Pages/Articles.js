import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
    return (
        <div>
            <Outlet />
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
        </div>
    );
};

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: 'red',
        fontsize: 21,
    };

    const defaultStyle = {
        color: 'green',
        fontsize: 21,
    };

    return (
        <li>
            <NavLink
            to={`/articles/${id}`}
            style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            >
            게시글 {id}
            </NavLink>
        </li>
    );
};

export default Articles;