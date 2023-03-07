import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  box-sizing:border-box;
}

  html,
  body {
    scroll-behaviour: smooth;
    height: 100%;
    width: 100%;
    font-size: 62.5%;
    line-height: 1.5;
    margin:0;
    padding:0;
    font-family: inherit;

    /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  }

  body {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  font-size: 1.6em
  }

  input{
    font-family:inherit;
  }

  button{
    border:0;
    background:transparent;
  }

  a{
    text-decoration:none;
    color: unset;
    margin:0 ;
  }

`