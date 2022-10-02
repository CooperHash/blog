import { Routes, Route, BrowserRouter } from 'react-router-dom'
import NavList from "./components/layout/nav/NavList";
import Article from "./views/article/Article";
import Card from "./components/Card/Card";
import Header from "./components/head/Header";
import Preview from "./components/markdown/Preview";
import Video from './views/video/Video';
import VideoDetail from './views/video/VideoDetail';
import Editor from './components/markdown/Editor';
import Login from './views/login/Login';
import Code from './views/code/Code';
export default function App() {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Article />} />
                    <Route path="/navlist" element={<NavList />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/article" element={<Article />}/>
                    <Route path='/article/:name' element={<Preview/>}/>
                    <Route path="/video" element={<Video/>}/>
                    <Route path='/videoDetail' element={<VideoDetail/>}/>
                    <Route path='/editor' element={<Editor/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/code' element={<Code/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}