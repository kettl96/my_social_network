import React from 'react';
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from '../common/FormControls/FormsControls';
import { required } from '../../utils/validators';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';
import styles from "../common/FormControls/FormsControls.module.css"
import { AppStateType } from '../../redux/reduxStore';

type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
  ({ handleSubmit, error, captchaUrl }) => {
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field placeholder={'Email'} name={'email'} component={Input}
            validate={[required]} />
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={Input}
            validate={[required]} type={'password'} />
        </div>
        <div>
          <Field component={Input} name={'rememberMe'} type={"checkbox"}
          /> remember me
        </div>
        {captchaUrl && <img src={captchaUrl} />}
        {
          captchaUrl && <div>
            <Field placeholder={'Symbols from image'} name={'captcha'} component={Input}
              validate={[required]} />
          </div>
        }

        {error && <div className={styles.formSummaryError}>
          {error}
        </div>
        }
        <div>
          <button>Login</button>
        </div>
      </form>
    )
  }

const LoginReduxForm =
  reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: 'login' })(LoginForm)

type MapStatePropsType = {
  captchaUrl: string | null,
  isAuth: boolean
}
type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

type LoginFormValuesType = {
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }
  return <div>
    <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);