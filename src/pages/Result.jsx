import React from "react";

const Result = ({answer}) =>{

    const {result} = answer.params
    return(
        <>
        <h1>RESULT = {result}</h1>
        </>
    )
}

export default Result;