import styled from 'styled-components'
import { DefaultWordView } from '.'

export const StyledDefaultWordView = styled.div`
  .form-group {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-group label {
    width: 70px; /* adjust as necessary */
    margin-right: 10px;
  }
  .form-group input {
    width: 120px;
    margin-right: 10px;
  }
  .form-group p{
    margin-top: 10px;
  }
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

.label-item
{
  width: 20px;
  height: 20px;

}

  
  .input {
    padding: 1px;
    margin-bottom: 2px;
    border-radius: 3px;
    border: 1px solid #ccc; 
    height:20px;
    font-size:10pt;
    width : 120px;
    vertical-align: top;
    text-align: left;
  }
  
  button {
    background-color: blue;
    color: white;
    padding: 10px 10px;
    border-radius: 5px;
    margin-top: 5px;
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

.error{
  color: red;
  font-size: 8px;

}


.notes {
  position: relative;
  z-index: 1;
  width: 200px; /* adjust this to the desired width */
  height: 200px; /* adjust this to the desired height */
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  /* other styles for the item */
}

.notes:hover,
.notes:focus {
  z-index: 2;
  /* other styles for the item when selected or hovered over */
}

`