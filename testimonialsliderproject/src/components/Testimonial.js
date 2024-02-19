import React, { useState } from "react";
import Card from "./Card";
import { FaChevronLeft,FaChevronRight } from "react-icons/fa6";

export default function Testimonial(props){
    let reviews = props.reviews
    const  [currentindex,setcurrentindex] = useState(0)
    const leftShiftHandler = () =>{
        if(currentindex - 1 < 0){
            setcurrentindex(reviews.length-1)
        }
        else{
            setcurrentindex(currentindex - 1)
        }
    }
    const rightShiftHandler = () => {
        if(currentindex + 1 >= reviews.length){
            setcurrentindex(0)
        }
        else{
            setcurrentindex(currentindex + 1)
        }    
    }
    const randomShiftHandler = () =>{
        let index = Math.floor(Math.random() * reviews.length);
        setcurrentindex(index)
    }
    return (
        <div className="bg-white w-[85vw] md:w-[700px] slex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
            <Card reviews = {reviews[currentindex]}/>
            <div className="flex justify-center mt-5 gap-3 text-violet-500 font-bold">
                <button className="cursor-pointer hover:text-violet-700 " onClick={leftShiftHandler}>
                    <FaChevronLeft />
                </button>
                <button className="cursor-pointer hover:text-violet-700 " onClick={rightShiftHandler}>
                    <FaChevronRight />
                </button>
            </div>
            <div>
                <button className="bg-violet-500 hover:bg-violet-700 transition-all duration-200 cursor-pointer px-10 py-2 mt-5 rounded-md font-bold text-white text-lg" onClick={randomShiftHandler}>
                    Suprise Me
                </button>
            </div>
        </div>
    )
}