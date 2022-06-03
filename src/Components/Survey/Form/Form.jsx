import "./form.css";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// COMPONENTS
import FormCard from "./FormCard";

// CUSTOM HOOKS
import useHttps from "../../../hooks/useHttps";
import useFormDateFormat from "../../../hooks/useFormDateFormat";

function Form({ submitID }) {
  const cardContentList = useSelector((state) => state.formCardContent);

  const [inputValue, setInputValue] = React.useState({});
  const [formData, setFormData] = useState({});
  const [allChecked, setAllChecked] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const { sendRequest } = useHttps();
  const { date, time } = useFormDateFormat();

  const submitHandler = (e) => {
    e.preventDefault();

    setSubmitted(true);
    if (!allChecked) return;

    initialInputValue();
    console.log(submitID);
    sendRequest({
      url: `https://netflix-clone-8ede8-default-rtdb.firebaseio.com/thesis-survey/${submitID}.json`,
      method: "PUT",
      body: { formData: { ...formData }, date, submitID },
    });
    setSubmitted(false);
    setAllChecked(false);
  };

  const clearFormHandler = () => {
    initialInputValue();
    setSubmitted(false);
    setAllChecked(false);
  };

  useEffect(() => {
    const inputValueArr = Object.values(inputValue);
    const uncheckedCard = inputValueArr.filter((item) => item.value === "");

    if (uncheckedCard.length === 0 && inputValueArr.length === 11)
      setAllChecked(true);
  }, [inputValue]);

  const formIsInValid = submitted && !allChecked;
  console.log(formIsInValid, submitted, allChecked);

  return (
    <form className="form container" onSubmit={submitHandler}>
      {Object.values(cardContentList).map((section, i) => (
        <section key={i} className={"section"}>
          <h4 className="section-title">{section.title}</h4>
          <p> {section.instruction}</p>
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
        <p className="form-warning">All survey questions must be answered</p>
      )}
      <div className="form-control">
        <button type="submit" className="submit">
          SUBMIT
        </button>
        <button type="button" className="clear-form" onClick={clearFormHandler}>
          CLEAR FORM
        </button>
      </div>
    </form>
  );
}

export default Form;
