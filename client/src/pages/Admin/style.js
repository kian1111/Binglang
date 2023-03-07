import styled from 'styled-components'

export const StyledAdmin = styled.div`

.divhead{
  background-color: #33D7FF ;
  text-align: center;
  border: 3px solid green;
  font-size: 40px;
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

.center {
  margin: auto;
  width: 50%;
  border: 3px solid green;
  background-color: #33D7FF;
  padding: 10px;
  
}
.table{
    text-align: center;
}


`