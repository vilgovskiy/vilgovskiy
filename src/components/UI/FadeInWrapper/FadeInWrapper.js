import React, {useState, useRef, useEffect} from 'react'
import "./FadeInWrapper.css";

function FadeInWrapper(props) {
    const [visible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      let currentSave = domRef.current;
      observer.observe(currentSave);
      return () => observer.unobserve(currentSave);
    }, []);
    return (
      <div
        className={`fade-in ${visible ? 'visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }

  export default FadeInWrapper;