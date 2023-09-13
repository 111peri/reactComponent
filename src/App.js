import {MainPage, PostsList} from './pages/mainPage'
import { TitleText} from './pages/text';
import {ButtonReadMore, ButtonRm} from './pages/buttons'
import {Comments} from './pages/text';
import { TitleDescription } from './pages/mainPage'
import { TitleText_1 } from './pages/text'
import { Button } from './pages/buttons'
import { Menu } from './pages/text'
import { Posts } from './pages/mainPage'
import { PostList } from './pages/menulist'
import './App.css';


function Header () {
    return (
        <div>
            <h1><b>MY BLOG</b></h1>
            <p>Welcome to the blog of <span className="w3-tag">unknown</span></p>
        </div>
    )

}

function App() {


  return (
      <div className="App">
          <Header/>
          <MainPage/>
          <TitleText/>
          <ButtonReadMore/>
          <Comments/>
          <TitleDescription/>
          <TitleText_1/>
          <Button/>
          <Menu/>
          <Posts/>
          <Postlist/>




      </div>


  );
}

export default App;
