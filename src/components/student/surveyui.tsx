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

const Surveyui: FC = () => {

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
        })
  }, [])


  return (
    <div>
      <Header />
      <Container>
        <Smpadding >
          <Accordioncontainer>
            <Accordion className="custom-accordion" defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header> section name </Accordion.Header> 
                <Accordion.Body>
                  <Sectioncard>
                    <Questioncard>
                      <label className="question-title"> TextHow do you rate the course learning experience? </label>
                      <Form>
                        <Displayflex>
                          <FormGroup>

                            <Input
                              type="radio"
                            />

                            <Label className="radio-label" for="exampleEmail">
                              Excellent
                            </Label>
                          </FormGroup>

                          <FormGroup>
                            <Input
                              type="radio"
                            />

                            <Label className="radio-label" for="exampleEmail">
                              Verygood
                            </Label>
                          </FormGroup>

                          <FormGroup>
                            <Input
                              type="radio"
                            />

                            <Label className="radio-label" for="exampleEmail">
                              Good
                            </Label>
                          </FormGroup>

                          <FormGroup>
                            <Input
                              type="radio"
                            />

                            <Label className="radio-label" for="exampleEmail">
                              Poor
                            </Label>
                          </FormGroup>

                          <FormGroup>
                            <Input
                              type="radio"
                            />
                            <Label className="radio-label" for="exampleEmail">
                              Fair
                            </Label>
                          </FormGroup>


                        </Displayflex>
                      </Form>



                    </Questioncard>

                    <br />
                    <Questioncard>
                      <label className="question-title"> TextHow do you rate the course learning experience? </label>

                      <Input
                        className="text-answser"
                        placeholder="Enter Your Answer"
                        type="textarea"

                      />

                    </Questioncard>


                  </Sectioncard>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod

                  est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Accordioncontainer>
        </Smpadding>
      </Container>


      <Footer />

    </div>
  );
}
export default Surveyui