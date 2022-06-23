import React, { useEffect, useState } from "react";
import "./formCard.css";

function FormCard({
  index,
  name,
  legend,
  options,
  inputValue,
  formIsInValid,
  onChangeHandler,
}) {
  const [cardChecked, setCardChecked] = useState(false);

  useEffect(() => {
    // if (!inputValue[index]) return;
    if (!inputValue[index]) {
      setCardChecked(false);
      return;
    }
    if (inputValue[index].value !== "") setCardChecked(true);
  }, [inputValue[index]]);

  return (
    <div
      className={`form-card ${cardChecked && "checked"} ${
        formIsInValid && "invalid-form"
      }`}
    >
      {/* <p>Optional</p> */}
      <fieldset>
        <div className="card-header">
          <legend>
            {index + ". "}
            <span className="en"> {legend.en}</span>{" "}
            <span className="mm"> {legend.mm && `(${legend.mm})`}</span>
          </legend>
        </div>
        <div className="options">
          {options.map((option, i) => (
            <div key={i} className="option-item">
              <div className="option-wrapper">
                <input
                  type={"radio"}
                  id={option + index}
                  name={name}
                  value={option}
                  checked={
                    option ===
                    (inputValue[index] ? inputValue[index].value : "")
                  }
                  onChange={(e) => onChangeHandler(e, index)}
                />
                <label htmlFor={option + index}>{option}</label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default FormCard;
