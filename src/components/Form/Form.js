import React, { useState } from "react";
import FormCheckbox from "./Form-checkbox";

import styles from "./Form.module.scss";

const Form = () => {
  const [briefSummary, setbriefSummary] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [author, setAuthor] = useState("");
  const [showData, setShowData] = useState(false);

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
    console.log([author, enteredDate, incidentType, briefSummary]);
    setShowData(true);
  };

  return (
    <section className={styles["post-incident"]}>
      <h2 className={styles.header}>Report an Incident</h2>

      <form id='template-post'>
        <label
          className={styles.label}
          htmlFor='incident-author'
        >
          Your Name:&nbsp;
        </label>
        <input
          type='text'
          id='incident-author'
          name='incident-author'
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
      <div className='displayData'>
        <ul>
          <li>{showData && <div>{author}</div>}</li>
          <li>{showData && <div>{enteredDate}</div>}</li>
          <li>{showData && <div>{incidentType}</div>}</li>
          <li>{showData && <div>{briefSummary}</div>}</li>
        </ul>
      </div>
    </section>
  );
};

export default Form;
