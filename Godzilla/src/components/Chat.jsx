import React from 'react'
import Cam from '../img/cam.png'
import vid from '../img/vid.png'
import mic from '../img/mic.png'
import Messages from './Messages'
import Input from './Input'

function Chat(){
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>Dhanush</span>
        <div className="chaticons">
          <img src={Cam} alt="" />
          <img src={vid} alt="" />
          <img src={mic} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}
export default Chat