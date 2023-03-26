import React, { useState } from "react";
import FormCheckbox from "./Form-checkbox";

import styles from "./Form.module.scss";

const Form = (props) => {
  const [briefSummary, setbriefSummary] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [author, setAuthor] = useState("");

  const briefSummaryChangeHandler = (event) => {
    setbriefSummary(event.target.value);
  };

  const incidentTypeHandler = (returnedID) => {
    setIncidentType(returnedID);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const buttonClickHandler = (event) => {
    event.preventDefault();
    if (enteredDate === "" || incidentType === "" || briefSummary === "" || author === "") {
      return;
    }
    props.onSubmitHandler(author, incidentType, enteredDate, briefSummary);
    setAuthor("");
    setEnteredDate("");
    setbriefSummary("");
  };

  return (
    <section className={styles["post-incident"]}>
      <h2 className={styles.header}>Report an Incident</h2>

      <form id='template-post'>
        <label
          className={`${styles["label"]}`}
          htmlFor='incident-author'
        >
          Your Title:&nbsp;
        </label>
        <input
          className={styles["nameLabel"]}
          type='text'
          id='incident-author'
          name='incident-author'
          value={author}
          required
          onChange={handleAuthorChange}
        />
        <br />
        <label
          className={styles.label}
          htmlFor='incident-date'
        >
          Date of Incident:&nbsp;
        </label>
        <input
          className={styles["date-input"]}
          type='date'
          id='incident-date'
          name='incident-date'
          value={enteredDate}
          required
          onChange={handleDateChange}
        />

        <p className={styles.paragraph}>Type of Incident:</p>
        <fieldset
          className={styles.fieldset}
          required
        >
          <FormCheckbox
            name='Burglary'
            id='Burglary'
            type='radio'
            onChoose={incidentTypeHandler}
          />
          <FormCheckbox
            name='Theft'
            id='Theft'
            type='radio'
            onChoose={incidentTypeHandler}
          />
          <FormCheckbox
            name='Sexual Assault'
            id='sexual-assault'
            type='radio'
            onChoose={incidentTypeHandler}
          />
          <FormCheckbox
            id='other'
            name='Other'
            type='radio'
            onChoose={incidentTypeHandler}
          />
        </fieldset>

        <label
          className={styles.label}
          htmlFor='incident-summary'
        >
          Brief Summary of Incident:
        </label>
        <textarea
          className={styles.textarea}
          id='incident-summary'
          name='incident-summary'
          value={briefSummary}
          rows='6'
          required
          onChange={briefSummaryChangeHandler}
        ></textarea>

        <button
          onClick={buttonClickHandler}
          className={styles["button-post"]}
        >
          Post
        </button>
      </form>
    </section>
  );
};

export default Form;
