import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
    const [show,handleshow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
            handleshow(true);
            }
            else  handleshow(false);

        });
        return()=>{
        window.removeEventListener("scroll");
        };
    },[]);



  return (
    <div className={`nav  ${show && "nav_black"}`}>
        <img
        className='nav_logo'
         src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netfli_logo" />
         <img className='avatar'
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="AVATAR" />
    </div>
  )
}

export default Nav