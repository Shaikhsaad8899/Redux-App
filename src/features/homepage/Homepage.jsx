import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Homepage.css";
const Homepage = () => {
  const userss = useSelector((state) => state.forms.users);
  console.table([userss]);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // setFormData({ fname: "", lname: "" });
  //   dispatch({ type: "ADD_USER", payload: formData });
  // };

  return (
    <>
      <div className="App">
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">First Name address</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputfname1"
              aria-describedby="fnameHelp"
              placeholder="First Name"
              onInput={(e) =>
                setFormData({ ...formData, fname: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Last Name"
              onInput={(e) =>
                setFormData({ ...formData, lname: e.target.value })
              }
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label">Check me out</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div id="table">
        <table>
          <thead>
            <tr>
              <td>First Name</td>
              <td>Last Name</td>
            </tr>
          </thead>
          <tbody>
            {userss.map((item, key) => {
              return (
                <tr id={key}>
                  <td>{item.fname}</td>
                  <td>{item.lname}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Homepage;
//throttling is done here
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setTimeout(() => {
//     setFormData({ fname: "", lname: "" });
//     dispatch({ type: "ADD_USER", payload: formData });
//   }, 2000);
// };

//debouncing is done here
// let timeoutId;
// const handleSubmit = (e) => {
//   e.preventDefault();
//   setFormData({ fname: "", lname: "" });

//   clearTimeout(timeoutId);
//   timeoutId = setTimeout(() => {
//     dispatch({ type: "ADD_USER", payload: formData });
//   }, 2000);
// };
