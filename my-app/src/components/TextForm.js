import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter text here')

  const handleUpClick = () => {
    console.log('Uppercase was clicked'  + text);
    let newText = text.toUpperCase();
    setText("you have clicked on handleUpClick" )
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log('On change')
    setText(event.target.value);
  }
  const handleclearClick = () => {
    let newText = '';
    setText(newText);
  }



  return (
    <div className="container"> 
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary" onClick={handleclearClick}>clear text</button>
       
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  )
}
