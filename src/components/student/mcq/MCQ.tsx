// framework
import React , {useState} from 'react';
import {RadioGroup, Radio} from 'react-radio-group';
import {FormGroup } from 'react-bootstrap';
import { Input, Label,Form } from 'reactstrap';
import {Displayflex} from './../style';
// local models
import { mcq_type } from '../../../models/mcq_question';
import "./../style.css";
// define component properties
interface mcq_props {
    questions: Array<mcq_type>
};


const MCQ: React.FC<mcq_props> = ({ questions }) => {
 
    const [radiocheck , setRadioCheck] = useState<any>([]);
    // const handleradio =(event: React.ChangeEvent<HTMLInputElement>) =>{
    //     const target=event.target
    //     const name=target.name
    //     const value=target.value
    //    setRadioCheck([...radiocheck,{
    //        id:radiocheck.length,
    //        value:value
    //    }]);
     
     
    // }
   
    return (
        // TSX Template
        <div>
            {

                questions.map((q, index) => {
                    return ( <div key={index}>   
                    <label className="question-title"> {q.text} </label>
                    <br />
                
                    <form>
                        <Displayflex> 
               
                   { q.options.map((option,index)=>{}).length ? q.options.map((option,index)=>{
     return(<div key={index}><input type="radio" name="radiovalues" onChange={(event: React.ChangeEvent<HTMLInputElement> )=>{setRadioCheck([ ...radiocheck,{id:index+1 , value:event.target.value}]);console.log(radiocheck) } } value={option}  /> <Label className="radio-label" for="exampleEmail"> {option}</Label>
   
           </div>);}) : <Input className="text-answser" placeholder="Enter Your Answer" type="textarea"  /> }
           
{/* <RadioGroup onChange= {//handleradio} selectedValue={/radiocheck} ></RadioGroup> */}
                        
                          
                      </Displayflex>
                   
</form>

                 </div>
                    );
                })
            }
           
        </div>
       
    );
};

export default MCQ;
