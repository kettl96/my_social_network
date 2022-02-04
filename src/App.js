import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';



const App = (props) => {
  return (
          <div className="app-wrapper">
        <div className="app">
          <Header />
          <Navbar friends={props.store}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path='dialogs/*' 
                  element={<DialogsContainer />} />
              <Route path='profile' 
                  element={<ProfileContainer />} />
              <Route path='news' element={<News />} />
              <Route path='music' element={<Music />} />
              <Route path='settings' element={<Setting />} />
              <Route path='users' element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    
  )
}

export default App;
