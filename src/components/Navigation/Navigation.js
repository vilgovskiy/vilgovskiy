import React, { useEffect, useRef } from "react";

import './Navigation.css'

const Navigation = (props) => {
    const focusRef = useRef(null);
    useEffect(()=>{
        focusRef.current.focus()
    },[])
    return (
    <nav className="Navigation">
          <a href="#introduction" ref={focusRef} onClick={props.refs[0]} >Introduction</a>
          <a href="#about" onClick={props.refs[1]}>About</a>
          <a href="#other" onClick={props.refs[2]}>Other</a>
    </nav>
  );
};

export default Navigation;
