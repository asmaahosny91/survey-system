import { createGlobalStyle } from "styled-components";
import Img from './components/assets/bk.jpg';
export const Globalstyles= createGlobalStyle`

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Roboto', sans-serif;
}

body{

    font-family: 'Roboto', sans-serif;
    background-size:cover;
    background-repeat:no-repeat;
    background: #e8e8ea;
   
   }

img{
     max-width:100%;
    }
    p{
     font-size:9px;
     text-align:center;
     color: #020202;
 }
 h1,h2,h3,h4,h5,h5,div,span,p{
    font-family: 'Roboto', sans-serif;
 }
`