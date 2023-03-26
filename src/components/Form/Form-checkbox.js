import React from "react";

import styles from "./Form-checkbox.module.scss";

const FormCheckbox = (props) => {
  const handleClick = () => {
    props.onChoose(props.name);
  };

  return (
    <div>
      <input
        className={styles.input}
        type='radio'
        id={"type-" + props.id}
        name='incident-type'
        onClick={handleClick}
      />
      <label
        className={styles["Label"]}
        htmlFor={props.id}
      >
        &nbsp;{props.name}
      </label>
    </div>
  );
};

export default FormCheckbox;
