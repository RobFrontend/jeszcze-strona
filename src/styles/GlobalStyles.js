import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /* Colors */

  /* Fonts */
  --font-light-white: #fbfbfa;
  --font-medium-white: #f6f6f6;
  --font-dark-white: #f2f2f1;
  
  --font-dark-dark: #0d1717;
  --font-medium-dark: #252e2e;
  --font-light-dark: #3d4545;
  --font-verylight-dark: #565d5d;

  --color-dark-green: #333c30;
  --color-medium-green: #5c6c64;
  --color-light-green: #a6a77b;
  --color-light-slaten: #d3d3d1;
  --color-medium-slate: #9ca4ac;
  --color-dark-slate: #3c4454;
  --color-dark-brown: #4c4442;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
}

*,
*::before,
*::after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: background-color 0.5s, box-shadow 0.5s, color 0.5s, border-radius .5s, opacity 0.5s, border 0.5s

}

html{
  font-size: 62.5%;
}

@media (max-width: 48em) {
  html{
  font-size: 56.25%;
}
}


@media (max-width: 35em) {
  html{
  font-size: 52.5%;
}
}

body{
  font-family: "Lato", sans-serif;
  scroll-behavior: smooth;
  
}

a { 
  text-decoration: none;
}

ul {
  list-style: none;
}
textarea,
label,
input {
  font-size: 1.8rem;
  font-family: inherit;
  border: none;
color: var(--font-dark-dark);
}
label{
  text-transform: capitalize;
font-size: 1.6rem;
margin-right: 0.8rem;
letter-spacing: -0.5px;
}

input,
select{
  padding: 0.3rem 0.6rem;
  border-radius: var(--border-radius-md);
}

input:focus{
  outline: none;
  border: none;
  box-shadow: 0px 0px 0px 4px var(--font-verylight-dark);
}

option{
  border: none;
  outline: none;
}

section{
  padding-top: 4.8rem;
  padding-bottom: 8rem;
}

p,
h1,
h2,
h3,
h4 {
  overflow-wrap: break-word;
  hyphens: auto;
}

p, span {
  color: var(--font-dark-dark);
}

img {
  max-width: 100%;
}

.hero-h1{
  text-align: center;

  filter: drop-shadow(5px 5px 15px var(--font-dark-dark));
}

.hero-h2{
  color: var(--font-dark-white);
  letter-spacing: -3px;
  filter: drop-shadow(5px 5px 15px var(--font-dark-dark));
 text-align: center;
}
.hero-h3{
  color: var(--font-dark-white);
  letter-spacing: -1.5px;
  filter: drop-shadow(5px 5px 15px var(--font-dark-dark));
 text-align: center;
}



.p-article{
  font-family: "Lora", serif; 
  font-size: 1.8rem;
}

/*  */


.fade-in {
  opacity: 1;
}

.fade-out {
  opacity: 0;
}
/* FIREFOX */
* {
    scrollbar-width: thin;
    scrollbar-color: var(--color-hover) var(--color-body-background);;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;

  }
  *::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}

  *::-webkit-scrollbar-track {
    background: var(--color-body-background);
    border-radius: 100px;
  }

  *::-webkit-scrollbar-thumb {
    background-color:var(--color-hover);
    border-radius: 100px;
    border: 3px none var(--color-body-background);
  }
  *::-webkit-scrollbar-corner {
  background: transparent;
}

`;

export default GlobalStyles;
