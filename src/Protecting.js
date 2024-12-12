import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Protecting(props) {
  const navigate = useNavigate();
  const ChildrenData = props.element;

  useState(() => {
    let userData = localStorage.getItem("userData");
    if (!userData) {
      navigate("/Login");
    }
  });
  return <ChildrenData />;
}
export default Protecting;
