import React, { ChangeEvent, FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Smpadding, Sectioncard, Questioncard, Displayflex, Accordioncontainer } from './style';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Accordion } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { Container, Form, FormGroup } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import axios from 'axios';
import "./style.css";
//local model 
import { cat_type } from './../../models/cat_type';
import QuestionCont from './mcq/QuestionsCont';
const Survey: FC = () => {

  const [survey_data, set_survey_data] = useState(new Map<string, cat_type>());

  // {
  //   cat_1: []
  // }


  useEffect(() => {
    fetch('/data.json').then(response =>
      response.json()).then(
        data=>{
          let survey_state = new Map<string, cat_type>();
          data.survey.categories.forEach((cat: cat_type) => {
            survey_state.set(cat.categoryname, cat);
          });
         set_survey_data(survey_state);
         console.log(survey_data)
        })
  }, [])


  return (
    <div>
      <Header />
      <Container>
        <Smpadding >
      
          <Accordioncontainer>
           
                    {
        Array.from(survey_data.keys()).map((categoryname, index) => {
        
          return (
            <div key={index}>
               <QuestionCont cat={survey_data.get(categoryname) ?? { categoryname: 'No Categoreis', questions:[]}} />            
            </div>
          );
        })
      }
          
              
          </Accordioncontainer>

          <button className="btn">  submit</button>
       
        </Smpadding>
      </Container>


      <Footer />

    </div>
  );
}
export default Survey