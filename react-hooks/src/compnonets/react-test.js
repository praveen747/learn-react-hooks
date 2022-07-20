import React from "react";
import { PropTypes } from "prop-types";
const Number = (props) => {
  //   const { num } = props;
  //   if (num > 0 && num <= 10) {
  //     console.log("Good Number", num);
  //   } else {
  //     console.log("Bad Number");
  //   }

  return (
    <div>
      <p> your number is: {props.num}</p>
    </div>
  );
};
Number.propTypes = {
  num: PropTypes.objectOf(1 - 10),
};
export default Number;
