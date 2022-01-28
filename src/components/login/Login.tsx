import React, {ChangeEvent, FC, useState}  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {BrowserRouter, Route, Router} from 'react-router-dom';
import {Navigate, Link , useNavigate} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {Loginblock,Loginlogo, Logolg, Logospan , Loginfrom, Margintop , Logininput , Buttonlogin} from './style';
import styled from 'styled-components';
import Admin from '../admin/admin';
import {Container} from '../../style';
import {Button} from 'reactstrap';
import  zc from './../assets/ZC-logo.png';

  const theme = {
    colors:{
      main:'#0091ac',
      font:"font-family: 'Poppins', sans-serif",
    },
    
  }


  const Login:FC = () => {

    const[email,setEmail]=useState<string>();
    const[password,setPassword]=useState<string>();
   
    const navigate = useNavigate();   //  hooks doesn't used or declared inside a function 
     const dostuff =()=>{
         navigate('/admin');
     }
   

    const handleSubmit =(event:ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
    

        const data = {
        email,password
        };
       
        console.log(data);
        dostuff();

        console.log("hii");

        // axios.post("",data).then(res=>{
        //     if(res.data.sucess === true){
        //       localStorage.setItem('token',res.data.token);
        // dostuff();
        //     }
        //     else{
              
            
        //       return (<h2> you are not logged in</h2>)
              
        //     }
        //     }).catch(err=>{
        //     console.log(err)
        //     })
        }

    

    // const handleEmail =(event:ChangeEvent<HTMLInputElement>) =>{
    //     return (event.target.value);
    // }

    // const handlePassword =(event:ChangeEvent<HTMLInputElement>) =>{
    //     return (event.target.value);
    // }

  return (
  <ThemeProvider theme={theme}>
    <Container>
    <Loginblock>

      <Loginlogo> 
        <Logolg>
          
          <img src={zc}/>
        </Logolg>
      </Loginlogo>
    
        <Loginfrom onSubmit={handleSubmit}>
          <Margintop>
            <Logininput type="email" onChange= {(event: React.ChangeEvent<HTMLInputElement> )=>{setEmail(event.target.value)}} placeholder="Enter Your Email"/>
          </Margintop>

          <Margintop>
            <Logininput type="password" onChange={(event: React.ChangeEvent<HTMLInputElement> )=>{setPassword(event.target.value)}} placeholder="Password"/>
          </Margintop>

            <Margintop>
            <Buttonlogin > Login</Buttonlogin>
            </Margintop>

            <Margintop>
           <p>Copyright ©2021 Zewail City of Science, Technology and Innovation.All Rights Reserved</p>
         </Margintop>

        

        </Loginfrom>
         
    
        


    </Loginblock>
   </Container>
   </ThemeProvider>
  
  );
}
export default Login