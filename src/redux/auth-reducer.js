import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login, isAuth) =>
  ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) =>
  ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } })

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data

        dispatch(setAuthUserData(id, email, login, true))
      }
    });
}
export const login = (email, password, rememberMe, captcha) => (dispatch) => {
  authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        let message = response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
        dispatch(stopSubmit('login', { _error: message }));
      }
    });
}
export const getCaptchaUrl = () => (dispatch) => {
  securityAPI.getCaptchaUrl()
    .then(response => {
      const captchaUrl = response.data.url;
      dispatch(getCaptchaUrlSuccess(captchaUrl));
    });
}
export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    });
}

export default authReducer;