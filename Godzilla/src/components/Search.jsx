import React from 'react'

function Search(){
  return (
    <div className="search">
      <div className="search-form">
        <input type="text" placeholder="Find a Profile" />
      </div>
      <div className="userchat">
        <img src="https://images.pexels.com/photos/17044199/pexels-photo-17044199/free-photo-of-kids-looking-through-a-tire-swing.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userchatinfo">
          <span>Dhanush</span>
        </div>
      </div>
    </div>
  )
}
export default Search