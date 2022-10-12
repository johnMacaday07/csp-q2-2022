import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    const input = {data: JSON.parse(data)};
    console.log(input);
    axios.post("/api/dock", input).then((res) => {
      setData("");
      setResult(JSON.stringify(res.data, null, 4));
      console.log(res);
    });
  };

  const hasResult = result ? <><h3>Result: </h3><pre> {result}</pre></> : false;
  return (
    <div className="container mt-5">
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label h3"
          >
            Input timber docking data
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            onChange={(e) => setData(e.target.value)}
            value={data}
          ></textarea>
        </div>
        <button type="submit" className="d-block mx-auto px-5 btn btn-primary">
          Process
        </button>
      </form>
      <div>{hasResult}</div>
    </div>
  );
};

export default Form;
