import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 30px;
  background-color: #ffffff;
`

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  width: 30%;
  @media screen and (max-width: 767px) {
    width: 90%;
  }
`

export const LoginImage = styled.img`
  width: 150px;
  height: 40px;
  margin-bottom: 30px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
`

export const Label = styled.label`
  font-size: 13px;
  color: #475569;
  font-weight: 'bold';
  font-family: 'Roboto';
`

export const Input = styled.input`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  color: #475568;
  font-size: 13px;
  border: 1px solid #475569;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
  font-family: 'Roboto';
  outline: none;
`

export const ShowPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ShowPasswordInput = styled.input`
  margin-right: 5px;
  cursor: pointer;
`

export const ShowPasswordLabel = styled.label`
  font-size: 13px;
  font-weight: bold;
  font-family: 'Roboto';
  color: #181818;
`
