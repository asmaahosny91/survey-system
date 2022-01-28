import styled, { ThemeConsumer } from 'styled-components';

export const Loginblock= styled.div`
padding:2em;
box-shadow:0 0.25em .5em rgb(0 0 0 /20%);
width:35%;
background-color:#fff;
@media(max-width:1200px)
{
 width:70%;
}
@media(max-width:768px)
{
 width:70%;
}
@media(max-width:767px)
{
 width:90%;
 padding:2em 0;
}
`;

export const Loginlogo =styled.div`
    width:100%;
    max-width:100%;
    padding:0 20px;
    margin-bottom:4em;
`
export const Logolg =styled.h2`
font-size: 22px;
color:#0091ac;  
text-align:center; 
`

export const Logospan =styled.span`
    color:#000;
`

export const Loginfrom =styled.form`
    padding:0 20px;
   

`

export const Margintop= styled.div`
margin-top:2em;
`

export const Logininput=styled.input`
  display: block;
  width: 100%;
  padding: .475rem 0.75rem;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  background-color: #f3f3f7ea;
  background-clip: padding-box;
  border: 1px solid #f3f3f7ea;
  color: #535353;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  /* transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */

  &:focus{
    /* box-shadow:0em 0.25em .5em rgb(0 0 0 /20%); */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    outline:0;
    background-color:transparent;
  }
   &::placeholder{
      font-size:12px;
       font-family: ${({theme})=>theme.colors.font};
     
   }

`

export const Buttonlogin=styled.button`
    width:100%;
    background-color:${({theme})=>theme.colors.main};  
    color:#fff;
    display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
 font-weight:600;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  

  &:focus{
      outline:0;
      border:0
  }
`

