import {Component} from 'react'

import {
  AppContainer,
  LoginContainer,
  LoginImage,
  InputsContainer,
  Input,
  Label,
  ShowPasswordInputContainer,
  ShowPasswordInput,
  ShowPasswordLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    usernameValue: '',
    passwordValue: '',
    showPassword: false,
  }

  onChangeUsernameInput = event => {
    this.setState({usernameValue: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordValue: event.target.value})

  onChangeCheckboxInput = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  getPasswordValue = () => {
    const {showPassword, passwordValue} = this.state
    if (showPassword){
        return passwordValue
    }
    return passwordValue.length * '.'
  }

  render() {
    const {usernameValue} = this.state
    const renderPassword = this.getPasswordValue()

    return (
      <AppContainer>
        <LoginContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="login logo"
          />
          <InputsContainer>
            <Label htmlFor="usernameInput">USERNAME</Label>
            <Input
              id="usernameInput"
              type="text"
              placeholder="Username"
              value={usernameValue}
              onChange={this.onChangeUsernameInput}
            />
            <Label htmlFor="passwordInput">PASSWORD</Label>
            <Input
              id="passwordInput"
              type="password"
              placeholder="Password"
              value={renderPassword}
              onChange={this.onChangePasswordInput}
            />
            <ShowPasswordInputContainer>
              <ShowPasswordInput
                type="checkbox"
                id="showPassword"
                onChange={this.onChangeCheckboxInput}
              />
              <ShowPasswordLabel htmlFor="showPassword">
                Show Password
              </ShowPasswordLabel>
            </ShowPasswordInputContainer>
          </InputsContainer>
        </LoginContainer>
      </AppContainer>
    )
  }
}

export default Login
