import React, { useEffect, useRef, useState } from "react";

const NavigationItem = (props) => {
    const [position, setPosition] = useState(0);
    const anchorRef = useRef(null);

    useEffect(() => {
        if (props.name === props.activeElem){
            anchorRef.current.focus()
        }
    },[props.name, props.activeElem])

    useEffect(()=>{
        setPosition(props.position)
    }, [props.position])

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo(0,position)
        props.onClick();
    }

  
    return (
    <a href={`#${props.name}`} onClick={handleClick} ref={anchorRef}>
      {props.children}
    </a>
  );
};

export default NavigationItem;
