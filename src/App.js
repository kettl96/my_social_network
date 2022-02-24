import React, { Suspense } from 'react';
import { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Settings/Setting';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <div className="app">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>

              <Route path='dialogs/*'
                element={<Suspense fallback={<div>Loading...</div>}>
                  <DialogsContainer />
                </Suspense>} />
              <Route path='profile' element={<Suspense fallback={<div>Loading...</div>}>
                <ProfileContainer />
              </Suspense>}>
                <Route path=":userId" element={<Suspense fallback={<div>Loading...</div>}>
                  <ProfileContainer />
                </Suspense>} />
              </Route>
              <Route path='news' element={<News />} />
              <Route path='music' element={<Music />} />
              <Route path='settings' element={<Setting />} />
              <Route path='users' element={<UsersContainer />} />
              <Route path='login' element={<LoginPage />} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);

