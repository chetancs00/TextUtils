import React, {useState} from 'react'



export default function TextForm(props) {

       const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
       const handleDnClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
       const handleOnChange=(event) =>{
        console.log("On Change running")
        setText(event.target.value)
    }


    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }


       const handlClearClick=(event) =>{
       let newText = '';
        setText(newText);
       
    }



const [text, setText] = useState('');
  return (
      <>
      <div className='container'>
   <h1>{props.heading}   </h1>
  <div className="mb-3">
   
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>

  <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to UpperCase</button>
  <button className="btn btn-primary mx-2"  onClick={handleDnClick} >Convert to LowerCase</button>
  <button className="btn btn-primary mx-2"  onClick={handlClearClick} >Clear</button>
  <button className="btn btn-primary mx-2"  onClick={handleCopy} >Copy</button>
  <button className="btn btn-primary mx-2"  onClick={handleExtraSpaces} >Remove Extra Spces</button>
  </div>
    <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008* text.split(" ").length}  Minutes read </p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>

  </>
  )
}
