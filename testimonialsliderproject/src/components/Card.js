import React from "react";
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";

export default function Card(props){
    let reviews = props.reviews
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto ">
                <img 
                className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
                src={reviews.image} alt="image1"/>
                <div className="w-[140px] h-[140px] rounded-full bg-violet-700 absolute top-[-6px] z-[-10] left-[10px]"></div>
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{reviews.name}</p>
            </div>

            <div className="text-center">
                <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
            </div>
            <div className="text-violet-600 mx-auto mt-5 mb-5">
                <FaQuoteLeft/>
            </div>
            <div className="text-center text-slate-500">
                <p>{reviews.text}</p>
            </div>
            <div className="text-violet-600 mx-auto mt-5 mb-5">
                <FaQuoteRight/>
            </div>
        </div>
    )
}