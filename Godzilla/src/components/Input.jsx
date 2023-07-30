import React from 'react'
import Add from "../img/img.png"
import Att from "../img/att.png"
function Input(){
  return (
    <div className='input'>
        <input type="text" placeholder='Text Something...' />
        <div className="send">
            <img src={Add} alt="" />
            <input type="file" style={{display:"none"}} id='file'/>
            <label htmlFor="file">
                <img src={Att} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}
export default Input