import React from 'react'

function Circle() {
    return (
        <>
        <div >
           <svg id="circle" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <circle cx="75" cy="75" r="70" ></circle>
            <circle cx="75" cy="75" r="70" ></circle>
            </svg>
            <p className='cer'>
            Soft-skills
            </p> 
        </div>
        
        <div>
        <svg id="circle1" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <circle cx="75" cy="75" r="70" ></circle>
        <circle cx="75" cy="75" r="70" ></circle>
        </svg>
        <p className='cer'>
        UI / UX
        </p>  
        </div>
        
<div>
    <svg id="circle2" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <circle cx="75" cy="75" r="70" ></circle>
    <circle cx="75" cy="75" r="70" ></circle>
    </svg>
        <p className='cer'>
            php
        </p> 
</div>

<div>
<svg id="circle3" fill="none" xmlns="http://www.w3.org/2000/svg" >
<circle cx="75" cy="75" r="70" ></circle>
<circle cx="75" cy="75" r="70" ></circle>
</svg>

    <p className='cer'>
        javascript
    </p> 
</div>
        

</>
    )
}

export default Circle
