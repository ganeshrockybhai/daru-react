import Chip from "@material-ui/core/Chip";
import ChipInput from "material-ui-chip-input";
import React from "react";
import ReactDOM from "react-dom";

const chipRenderer = ({ chip, className, handleClick, handleDelete }, key) => (
  <Chip
    className={className}
    key={key}
    label={chip}
    onClick={handleClick}
    onDelete={handleDelete}
    size="small"
  />
);

const defaultValue = ["Material UI", "Chips"];

function TechTags() {
  return (
    <div>
      <div>
        <ChipInput defaultValue={defaultValue} label="Normal chips" />
      </div>
      <div>
        <ChipInput
          chipRenderer={chipRenderer}
          defaultValue={defaultValue}
          label="Small chips"
        />
      </div>
    </div>
  );
}
export default TechTags;

