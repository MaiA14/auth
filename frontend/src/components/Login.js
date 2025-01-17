import React, { Component } from 'react';
import UserService from '../services/UserService';
import Signup from './Signup';
import { Link } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    isHide: true,
  };

  changeInput = ev => {
    let field = ev.target.name;
    let value = ev.target.value;
    this.setState({ [field]: value });
  };

  onLogInUser = async () => {
    const email = this.state.email;
    const password = this.state.password;
    const user = { email, password };
    if (email && password) {
        try {
            await UserService.login(user);
            // browserHistory.push('/map');
            // history.push("/map");
            // this.history.pushState('/', 'map');
            // history.push('/map')
            // hashHistory.push('/map');
            console.log('props',this.props);
            this.props.history.push('/map');
        }
        catch(e) {
            console.error(e);
        }
    }
  };

  onCheckForm = (ev) => {
    if (ev.key === 'Enter') this.onLogInUser()
  }

  changeForm = () => {
    this.setState(prevState => ({ isHide: !prevState.isHide }));
  };

  render() {
    const hideSignup = this.state.isHide ? 'hide' : 'show-block';
    const hideLogIn = !this.state.isHide ? 'hide' : 'show-block';
    const loginOrSignupText = (this.state.isHide) ? 'register' : 'login'
    return (
      <div className='container'>
          <div className={hideLogIn}>
          <div className="inputs-wrapper">
            <input name="email" onChange={this.changeInput} value={this.state.email}
             type="text" className="form-input" placeholder=" Email"></input>
            <input name="password" onChange={this.changeInput} value={this.state.password}
             type="password" className="form-input" placeholder=" Password"></input>
             {/* <Link to={`/map`}> */}
              <button className="app-button" onClick={this.onLogInUser}>
                Login
              </button>
            {/* </Link> */}
          </div>
        </div>
        <div className={hideSignup}>
          <Signup></Signup>
        </div>
        <span className='login-or-signup' onClick={this.changeForm} 
        onKeyUp={(ev) => this.onCheckForm(ev)}>
          Click <span>here </span>
          to {loginOrSignupText}
        </span>
      </div>
    );
  }
}

export default Login;

