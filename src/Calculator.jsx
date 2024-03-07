import React from 'react'
import { useState } from 'react';

function Calculator() {
    let[result,setResult] = useState("");
    let handleClick=(event)=>{
        setResult(result.concat(event.target.value))
    }
    let clearDisplay=()=>{
      if(result===""){
        return;
      }
        setResult("");
    }
    let calculate=()=>{
      if(result===""){
        return;
      }
        setResult(eval(result).toString());
    }
  return (
    <div className="calc-container">
      <input  type="text" value ={result} id="display" placeholder={result === "" ? "0" : ""}/>
      <input  type="button" value="8" className="button"    onClick={handleClick}/>
      <input  type="button" value="9" className="button"    onClick={handleClick}/>
      <input  type="button" value="7" className="button"    onClick={handleClick}/>
      <input  type="button" value="6" className="button"    onClick={handleClick}/>
      <input  type="button" value="5" className="button"    onClick={handleClick}/>
      <input  type="button" value="4" className="button"    onClick={handleClick}/>
      <input  type="button" value="3" className="button"    onClick={handleClick}/>
      <input  type="button" value="2" className="button"    onClick={handleClick}/>
      <input  type="button" value="1" className="button"    onClick={handleClick}/>
      <input  type="button" value="0" className="button"    onClick={handleClick}/>
      <input  type="button" value="." className="button"    onClick={handleClick}/>
      <input  type="button" value="+" className="button"    onClick={handleClick}/>
      <input  type="button" value="-" className="button"    onClick={handleClick}/>
      <input  type="button" value="*" className="button"   onClick={handleClick}/>
      <input  type="button" value="/" className="button"   onClick={handleClick}/>
      <input  type="button" value="clear" className="button"   onClick={clearDisplay}/>
      <input  type="button" value="=" className="button" onClick={calculate}/>
    </div>
  )
}

export default Calculator
