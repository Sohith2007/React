import React from "react";
import { useState } from "react";
import { Form,Button } from 'bootstrap-4-react';
import { useNavigate } from "react-router-dom";


const Calculator = () =>{
    const[firstnum,setfirstnum] = useState(null);
    const handleFirstNumChange = (e) =>{
        setfirstnum(parseInt(e.target.value))
    }
    const[secondnum,setsecondnum] = useState(null);
    const handleSecondNumChange = (e) =>{
        setsecondnum(parseInt(e.target.value))
    }
    const[operator,setoperator] = useState(null);
    const handleOperatorChange = (e) =>{
        setoperator(e.target.value)
    }
    
    const navigate = useNavigate()
    const [result,setResult] = useState(null)
    const submithandler = ()=>{
        let equation = `${firstnum} ${operator} ${secondnum}`;
        setResult(eval(equation));
        navigate('./Result')
    
    }
    return(
        <>
        <Form>
            <Form.Group controlId="formbasicclaci1">
                <Form.Label>Enter a number</Form.Label>
                <Form.Control placeholder = "Enter a number" onChange = {handleFirstNumChange}/>
            </Form.Group>
            <Form.Group controlId="formbasicclaci2">
                <Form.Label>Enter another number</Form.Label>
                <Form.Control placeholder = "Enter a number" onChange = {handleSecondNumChange}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Select an operator</Form.Label>
                <Form.Control as="select" onChange = {handleOperatorChange}>
                    <option value= "+">+</option>
                    <option value= "-">-</option>
                    <option value= "*">*</option>
                    <option value= "/">/</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick = {submithandler}>Submit</Button>
        </Form>

        </>
    )
}

export default Calculator;