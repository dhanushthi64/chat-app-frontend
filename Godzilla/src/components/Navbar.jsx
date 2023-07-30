import React from 'react'

function Navbar(){
  return (
    <div className='navbar'>
        <span className="logo-ava">Godzilla</span>
        <div className="user">
            <img src="https://images.pexels.com/photos/17044199/pexels-photo-17044199/free-photo-of-kids-looking-through-a-tire-swing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <span>Dhanush</span>
            <button>logout</button>
        </div>
    </div>
  )
}
export default Navbar