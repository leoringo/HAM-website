import { useState } from "react";

export default function SuperForm() {
    //     holds the value of the input
    const [currentValue, setValue] = useState("");
    const [makan, setMakan] = useState("") // data() {}

    function changeHandler(event) {
        // console.log(event.target.value);
        setValue(event.target.value)
        // e => setValue(e.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()    //SUPAYA GAK REFRESH <<<<<<<<<<<<<<<<<<<<<<<<<<
        console.log(makan, currentValue);
        
        // body : JSON.stringify({makan, currentValue})
        
    }

    return (
        <div>
            <h2>Your name is: {currentValue ? currentValue : "Not defined"}</h2>

            {/* 
          This is a controlled input because its value is in sync 
          with the stated variable currentValue  
        */}
            <form onSubmit={submitHandler}>

                <input
                    type="text"
                    onChange={changeHandler}
                    value={currentValue}
                    placeholder="Please type your name"
                />
                <input
                    type="text"
                    onChange={ e => setMakan(e.target.value) }
                    value={makan}
                    placeholder="iseng"
                />
                
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    );
};