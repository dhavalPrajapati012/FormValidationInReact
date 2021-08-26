import React, { useState } from 'react';


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const handleChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const handleDownClick = () => {
        // console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words, {text.length} Character</p>
                <p>you can complete this Article in {0.008 * text.split(" ").length} minutes.</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
