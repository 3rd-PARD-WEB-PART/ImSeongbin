import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Articles from "./Pages/Articles";
import Article from "./Pages/Article";
import Layout from "./Pages/Layout";

function App() {
  return (
    <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element ={<Home />}/>
        <Route path="/about" element ={<About />}/>
        <Route path="/profile/:username" element={<Profile/>}/>
        <Route path="articles" element={<Articles />}>
          <Route path=":id" element=<Article /> />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
