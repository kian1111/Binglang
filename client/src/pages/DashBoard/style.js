
import styled from 'styled-components'

export const StyledDashboard = styled.div`

.divhead{
  background-color: #33D7FF ;
  text-align: center;
  border: 3px solid green;
  font-size: 40px;
}

table {
  border-collapse: collapse;
  width: 100%;
}
td {
  border: 1px solid black;
  text-align: center;
  padding: 8px;
}
.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
}

.grid-item {
  background-color: lightblue;
  border: 1px solid black;
  text-align: center;
  padding: 2px;
}
.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 150px;
    padding: 1px;
  }
  
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 5px;
  }
  
  .input {
    padding: 1px;
    margin-bottom: 2px;
    border-radius: 3px;
    border: 1px solid #ccc;
    height:40px;
    font-size:14pt;
  }
  
  button {
    background-color: blue;
    color: white;
    padding: 5px 5px;
    border-radius: 5px;
    margin-top: 2px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: darkblue;
  }
  .form-input {
  border: none;
  width : 120px;
  text-align: center;
  font-size : 40px;
  background: transparent;
  border-bottom: 0px solid #fff;
  outline: none;
}
`