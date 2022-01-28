import React, {ChangeEvent, FC, useState}  from 'react';
import styled from 'styled-components';
import Admin from '../admin/admin';
import {Headerdiv , Headernav} from './style';
import {Button, Col, Row, Container, Input , InputGroup , InputGroupText} from 'reactstrap';
import  zc from './../assets/ZC-logo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faSearch, faUser, faWrench } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

 const Header:FC = () => {

    return(
        <Headernav>
    <Container>
      
        <Row>
            <Col sm="3" className="fixheight">
                <Headerdiv >
                <img  src={zc} />
              </Headerdiv>
            </Col>

            <Col sm="6" className="fixheight">
             {/* <Input placeholder="search"/> */}
             <InputGroup>
    
        <InputGroupText>
            
            <FontAwesomeIcon icon={faSearch} color="#0091ac" />
        </InputGroupText>

    <Input  placeholder="Search">
    </Input>
</InputGroup>
            </Col>

            <Col sm="3" className="fixheight text-end alignright" >
            <FontAwesomeIcon  className="ml" icon={faWrench}  size="lg" color="#0091ac"/>
            <FontAwesomeIcon className="ml" icon={faBell}  size="lg" color="#0091ac"/>
            <FontAwesomeIcon className="ml"icon={faUser}  size="lg" color="#0091ac"/>
            
            </Col>
        </Row>
      
    </Container>
    </Headernav>
    );

}
export default Header