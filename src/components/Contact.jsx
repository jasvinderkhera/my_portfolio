import React, { useState } from "react";

function Contact() {
  function initialState() {
    return {
      name: "",
      email: "",
      phone: "",
      gender: "",
      city: "",
      skills: {
        html: false,
        css: false,
        javascript: false,
        reactjs: false,
        jquery: false,
      },
    };
  }

  const [data, setData] = useState(initialState());

  function handleSubmit(e) {
    let json = JSON.stringify(data);
    console.log(json);
    setData(initialState());

    e.preventDefault();
  }

  function handleChange(event) {
    let key = event.target.name;

    if (event.target.type === "checkbox") {
      setData({
        ...data,
        skills: { ...data.skills, [event.target.name]: event.target.checked },
      });
    } else {
      setData({ ...data, [key]: event.target.value });
    }
  }
  return (
    <div>
      <h3 className="display-6 mb-3 pb-3 text-center">Hire Me</h3>
      <form className="form pe-4" autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-floating">
          <input
            type="text"
            className="form-control mb-3"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label for="name">Full Name</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
          <label for="email">Email</label>
        </div>
        <div className="form-floating">
          <input
            type="number"
            className="form-control mb-3"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={handleChange}
          />
          <label for="phone">Phone</label>
        </div>

        <div className="mb-3 d-flex" style={{ gap: "10px" }}>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              className="me-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
               className="me-2"
            />
            Female
          </label>
        </div>
        <div className="mb-3 d-flex" style={{ gap: "10px" }}>
          <label htmlFor="skills">Skills:</label>
          <label>
            <input
              type="checkbox"
              name="html"
              value="html"
              checked={data.skills.html}
              onChange={handleChange}
               className="me-2"
            />
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              name="css"
              value="css"
              checked={data.skills.css}
              onChange={handleChange}
               className="me-2"
            />
            CSS
          </label>

          <label>
            <input
              type="checkbox"
              name="javascript"
              value="javascript"
              checked={data.skills.javascript}
              onChange={handleChange}
               className="me-2"
            />
            Javascript
          </label>

          <label>
            <input
              type="checkbox"
              name="reactjs"
              value="reactjs"
              checked={data.skills.reactjs}
              onChange={handleChange}
               className="me-2"
            />
            ReactJS
          </label>

          <label>
            <input
              type="checkbox"
              name="jquery"
              value="jquery"
              checked={data.skills.jquery}
              onChange={handleChange}
               className="me-2"
            />
            JQuery
          </label>
        </div>

        <div className="form-floating">
          <select
            name="city"
            id="city"
            className="form-control mb-3"
            value={data.city}
            onChange={handleChange}
          >
            <option value={""}>Select City</option>
            <option value={"New Delhi"}>New Delhi </option>
            <option value={"Mumbai"}>Mumbai </option>
            <option value={"Chennai"}>Chennai </option>
            <option value={"Jaipur"}> Jaipur</option>
          </select>
          <label for="city">City</label>
        </div>
        <div>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
