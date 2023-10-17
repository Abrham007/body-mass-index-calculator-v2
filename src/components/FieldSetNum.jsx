import React from "react";
import FieldSetMetric from "./FieldSetMetric";
import FieldSetImperial from "./FieldSetImperial";

function FieldSetNum(props) {
  return props.unit === "metric" ? <FieldSetMetric /> : <FieldSetImperial />;
}

export default FieldSetNum;
