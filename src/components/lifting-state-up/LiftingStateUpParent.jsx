import { useState } from "react";

export const LiftingStateUpParent = () => {
    const [inputVal, setInputVal] = useState("");  // Manage the input state

    function handleSelectChange(e) {
        setInputVal(e.target.value);  // Update state when the input changes
    }

    return (
        <>
            <ChildA inputVal={inputVal} handleSelectChange={handleSelectChange} />
            <ChildB inputVal={inputVal} /> {/* Use the same prop name for consistency */}
        </>
    );
}

const ChildA = ({ inputVal, handleSelectChange }) => {
    return (
        <>
            <input
                type="text"
                placeholder="add your name"
                value={inputVal}
                onChange={handleSelectChange}
                className="input-for-lsu"
            />
        </>
    );
}
// now, i want to pass data to ChildA to ChildB (sibiling) :---
// so we can move  ChildA (sibiling ) state to the parent component of both siblings

const ChildB = ({ inputVal }) => {
    return (
        <>
            <h3>{inputVal}</h3> {/* Display inputVal received from the parent */}
        </>
    );
}
