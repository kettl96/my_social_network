import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';



const App = (props) => {

  return (
          <div className="app-wrapper">
        <div className="app">
          <Header />
          <Navbar friends={props.state.friendsPage}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path='dialogs/*' 
                  element={<Dialogs 
                    state={props.state.dialogsPage}/>} />
              <Route path='profile' 
                  element={<Profile 
                    state= {props.state.profilePage} 
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}/>} />
              <Route path='news' element={<News />} />
              <Route path='music' element={<Music />} />
              <Route path='settings' element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    
  )
}

export default App;
