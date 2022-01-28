import React from 'react';

// local models
import { cat_type } from '../../../models/cat_type';

import { Accordion } from 'react-bootstrap';
import {Sectioncard,Questioncard } from './../style';
// local components
import MCQ from './MCQ';
import { propTypes } from 'react-bootstrap/esm/Image';

// define component properties
interface qcont_props {
    cat: cat_type
};



const QuestionsCont: React.FC<qcont_props> = ({ cat }) => {

    return (
        // TSX Template
        <div>
            <Accordion className="custom-accordion">
               <Accordion.Item eventKey="0">
             <Accordion.Header>{cat.categoryname} </Accordion.Header>
             <Accordion.Body>
                  <Sectioncard>
                    <Questioncard>
             <MCQ questions={cat.questions}></MCQ>
       </Questioncard>
       </Sectioncard>
       </Accordion.Body>
       </Accordion.Item>
       </Accordion>
       
        </div>
    );
};

export default QuestionsCont;

