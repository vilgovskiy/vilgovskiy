import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./Toggler.css";

const Toggler = (props) => {
  let symb = props.active ? <GrFormPrevious size="20px" /> : <GrFormNext size="20px"/>;

  let dynamicClass = props.active ? " Active" : "";

  return (
    <div className={"Toggler" + dynamicClass} onClick={props.onClick}>
        {symb}
    </div>
  );
};

export default Toggler;
