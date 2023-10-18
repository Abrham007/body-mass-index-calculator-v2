import React, { useState } from "react";
import FieldSetMetric from "./FieldSetMetric";
import FieldSetImperial from "./FieldSetImperial";

function FieldSetNum(props) {
  return props.unit === "metric" ? (
    <FieldSetMetric getBmi={props.getBmi} />
  ) : (
    <FieldSetImperial getBmi={props.getBmi} />
  );
}

export default FieldSetNum;
