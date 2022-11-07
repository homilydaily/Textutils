import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleClearClick = ()=>{
    // console.log("Clear Text was clicked" + text);
    let newText = '';
    setText(newText);
  }

  const speak = ()=>{
    // console.log("Speak was clicked" + text);
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const handleOnChange = (event)=>{
    // console.log("On Change");
    setText(event.target.value);
  }
  
  
  const[text, setText] = useState('')
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="myBox">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-success my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-warning my-3 mx-1" onClick={speak}>Speak</button>

    </div>
    <div className="container my-3">
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} time to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
