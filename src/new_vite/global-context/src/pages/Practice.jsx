import React from "react";
import { useRef } from "react";

export const Practice = () => {
  const InputRef = useRef(null);

  const OnSubmit = (e) => {
    console.log(InputRef.current.value);
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={OnSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" ref={InputRef} className="form-input" />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
