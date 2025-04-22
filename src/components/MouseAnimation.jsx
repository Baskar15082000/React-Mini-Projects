import React, { useEffect, useState } from "react";
const MouseAnimation = () => {
  const [position,setPosition] = useState({x:0,y:0})
  console.log(position)
  useEffect(()=>{
    const handleMouseMove=(e)=>{
          setPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",handleMouseMove)
    return ()=> window.removeEventListener('mousemove',handleMouseMove)
  },[])
  return (
    <div className="bg">
      <div style={{position:"absolute",left:position.x,top:position.y,transform:"translate(-50%,-50%)"}} className="loader"></div>
      <div className="name">Mouse...</div>
    </div>
  );
};

export default MouseAnimation;
