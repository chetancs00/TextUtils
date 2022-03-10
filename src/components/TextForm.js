import React, {useState} from 'react'



export default function TextForm(props) {

       const handleUpClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!","success")
    }
       const handleDnClick = () =>{
        console.log("UpperCase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case!","success")
    }
       const handleOnChange=(event) =>{
        console.log("On Change running")
        setText(event.target.value)
    }


    const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!","success")
    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success")

    }


       const handlClearClick=(event) =>{
       let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")

    }



const [text, setText] = useState('');
  return (
      <>
      <div className='container'  style={{color : props.mode==='dark'?'white':'black'}}>
   <h1>{props.heading}   </h1>
  <div className="mb-3">
   
    <textarea className="form-control" value={text} style={{backgorundColor : props.mode==='dark'?'grey':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>

  <button disabled={text.length ===0} className="btn btn-primary mx-2 btn-sm" onClick={handleUpClick} >Convert to UpperCase</button>
  <button disabled={text.length ===0} className="btn btn-primary mx-2 btn-sm"  onClick={handleDnClick} >Convert to LowerCase</button>
  <button disabled={text.length ===0} className="btn btn-primary btn-sm my-2 mx-2"  onClick={handlClearClick} >Clear</button>
  <button disabled={text.length ===0} className="btn btn-primary btn-sm mx-2"  onClick={handleCopy} >Copy</button>
  <button disabled={text.length ===0} className="btn btn-primary btn-sm my-2 mx-2"  onClick={handleExtraSpaces} >Remove Extra Spces</button>
  </div>
    <div className="container"  style={{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length } words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length}  Minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text : `Enter text to preview`}</p>
        </div>

  </>
  )
}
