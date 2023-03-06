import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  const colorClasses = {
    red: "alert-danger",
    orange: "alert-warning",
    green: "alert-success",
  };

  if (colorClasses[props.color] === undefined)
    alert(`The color ${props.color} is not in the possible list of colors`);

  return (
    <div className={`alert ${colorClasses[props.color]}`} role="alert">
      {props.text}
    </div>
  );
}
Alert.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};
