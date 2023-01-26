import React from 'react';
import ReactDOM from "react-dom/client";

const heading = (
    <h1 id="title" key="head">
    "Happy 74th Republic Day 2023"
    </h1> )

const Banner = () => {

    return(
        <div className='Parent d-flex justify-content-center'>
            <h1 className='d-none'> this is parent Div</h1>
            <div className='child'>
                {heading}
            </div>
        </div>
      
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Banner/>)