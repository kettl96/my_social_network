import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
          <div className="app-wrapper">
        <div className="app">
          <Header />
          <Navbar friends={props.store}/>
          <div className="app-wrapper-content">
            <Routes>
              <Route path='dialogs/*' 
                  element={<DialogsContainer 
                    store={props.store} />} />
              <Route path='profile' 
                  element={<Profile 
                    store= {props.store} />} />
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
