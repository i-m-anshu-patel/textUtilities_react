import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("TextArea Cleared!", "success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handoleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces!", "success");
    }
    return (
        <>
            <div className='container'>
                <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h3>
                <div className="form-group mb-3 mt-2">
                    <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
                <button className='btn btn-primary mx-1 my-1' onClick={handoleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className='container my-3'>
                <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your text summary</h3>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{(text === '') ? 0 : text.split(" ").length} words and {text.length} characters</p>
                <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview</h3>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text}</p>
            </div>
        </>

    )
}
