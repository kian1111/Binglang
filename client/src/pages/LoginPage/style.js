import styled from 'styled-components'

export const StyledLoginPage = styled.div`
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 300px;
    padding: 50px;
  }
  
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  input {
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: darkblue;
  }
  `