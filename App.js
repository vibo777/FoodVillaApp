import React from 'react';
import ReactDOM from "react-dom/client";

// Element in react 
const heading = (
    <h1 id="title" key="head">
    "Happy 74th Republic Day 2023"
    </h1> )

// A Functional Component in React 
Dosomething = () => {
    return(
        <div className='section'>
            <h2> this is pure javascript function </h2>
        </div>
    ) 
}   

 
const string = "Namaste React";

const Banner = () => {

    return(
        <div className='Parent d-flex justify-content-center'>
            <h1 className='d-none'> this is parent Div</h1>
            <div>
                <Dosomething/>
            </div>
            <div className='child'>
                {heading}
            </div>
            
        </div>
      
    )
}

const Body=()=>{

    return(
        <div className='container text-center'>
            {string}
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

 
root.render(<Banner/>)
