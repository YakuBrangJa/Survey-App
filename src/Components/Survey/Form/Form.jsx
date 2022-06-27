import "./form.css";
import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

// COMPONENTS
import FormCard from "./FormCard";

// CUSTOM HOOKS
import useHttps from "../../../hooks/useHttps";
import useFormDateFormat from "../../../hooks/useFormDateFormat";

const testUrl =
  "https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey/";
const url =
  "https://survey-app-b95ef-default-rtdb.firebaseio.com/thesis-survey/";

function Form({ submitID, setSubmitSuccess, setLoadingStatus }) {
  const cardContentList = useSelector((state) => state.formCardContent);

  const [inputValue, setInputValue] = React.useState({});
  const [formData, setFormData] = useState({});
  const [allChecked, setAllChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmBoxOpen, setConfirmBoxOpen] = useState(false);
  // const [submitSuccess, setSubmitSuccess] = useState(false);

  const initialInputValue = useCallback(() => {
    for (const key in cardContentList) {
      cardContentList[key].content.forEach((card) => {
        setInputValue({});
      });
    }
  }, [cardContentList]);

  useEffect(() => {
    initialInputValue();
  }, [initialInputValue]);

  const onChangeHandler = (e, index) => {
    setInputValue({
      ...inputValue,
      [index]: { name: e.target.name, value: e.target.value },
    });

    setFormData({
      ...formData,
      [index - 1]: { name: e.target.name, value: e.target.value },
    });
  };

  const { isLoading, error, sendRequest } = useHttps();
  const { date, time } = useFormDateFormat();

  const submitHandler = (e) => {
    e.preventDefault();

    // SUBMIT DISABLED
    // return;

    setSubmitted(true);
    if (!allChecked) return;

    initialInputValue();
    console.log(submitID);
    sendRequest({
      url: `${url}${submitID}.json`,
      method: "PUT",
      body: { formData: { ...formData }, date, submitID },
    });

    setSubmitSuccess(true);
  };

  useEffect(() => {
    if (!submitted) return;
    setLoadingStatus(isLoading);
    if (!isLoading && allChecked) {
      setSubmitted(false);
      setAllChecked(false);
    }
  }, [isLoading, submitted]);

  console.log(isLoading);

  const clearFormHandler = () => {
    initialInputValue();
    setSubmitted(false);
    setAllChecked(false);
    setConfirmBoxOpen(false);
  };

  const confirmBoxOpenHandler = () => setConfirmBoxOpen(true);
  const confirmBoxCloseHandler = () => setConfirmBoxOpen(false);

  useEffect(() => {
    const inputValueArr = Object.values(inputValue);
    const uncheckedCard = inputValueArr.filter((item) => item.value === "");

    if (
      uncheckedCard.length === 0 &&
      inputValueArr.length ===
        cardContentList.sectionA.content.length +
          cardContentList.sectionB.content.length +
          cardContentList.sectionC.content.length
    )
      setAllChecked(true);
  }, [inputValue]);

  const formIsInValid = submitted && !allChecked;

  return (
    <form className="form container" onSubmit={submitHandler}>
      {Object.values(cardContentList).map((section, i) => (
        <section key={i} className={"section"}>
          <h4 className="section-title">{section.title}</h4>
          <p className="en"> {section.instruction.en}</p>
          <p className="mm"> {section.instruction.mm}</p>
          <div className="content-list">
            {section.content.map((card, i) => (
              <FormCard
                key={i}
                index={card.index}
                name={card.name}
                legend={card.legend}
                options={card.options}
                inputValue={inputValue}
                formIsInValid={formIsInValid}
                onChangeHandler={onChangeHandler}
              />
            ))}
          </div>
        </section>
      ))}

      {formIsInValid && (
        <>
          <p className="form-warning">All questions must be answered</p>
          <p className="form-warning">
            Make sure all the questions are answered
          </p>
        </>
      )}
      <div className="form-control">
        <button
          type="submit"
          className={`submit ${isLoading && "submitting"}`}
          disabled={isLoading}
        >
          {!isLoading ? "SUBMIT" : "SUBMITTING..."}
        </button>
        <button
          type="button"
          className="clear-form"
          onClick={confirmBoxOpenHandler}
        >
          CLEAR FORM
        </button>
      </div>
      {confirmBoxOpen && (
        <ConfirmBox
          clearFormHandler={clearFormHandler}
          confirmBoxCloseHandler={confirmBoxCloseHandler}
        />
      )}
    </form>
  );
}

function ConfirmBox({ clearFormHandler, confirmBoxCloseHandler }) {
  return createPortal(
    <div className="confirmBox-backdrop">
      <div className="confirm-box">
        <div className="confirm-message">
          <p>Clear all answers?</p>
        </div>
        <div className="confirm-control">
          <button onClick={clearFormHandler} className="clear">
            Clear
          </button>
          <button className="cancel" onClick={confirmBoxCloseHandler}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Form;
