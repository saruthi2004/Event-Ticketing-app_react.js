import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialData = {
  firstName: "",
  PhoneNumber: "",
  email: "",
  attendee: "",
  seats: "",
  ImageURL: ""
};

const Form = ({ match, ImageURL, Seats_availabilty }) => {
  const [formData, setFormData] = useState(initialData);

  const updateFormData = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    // console.log(JSON.stringify(formData))
    alert(JSON.stringify(formData));
    setFormData(initialData);
  };

  const { firstName, PhoneNumber, email, attendee, seats } = formData;

  return (
    <>
      <div className="text-center">
        <h2> Event Name : {match.params.id}</h2>
        <h3>{Seats_availabilty}</h3>
      </div>
      <div className="product form-details">
        <div className="leftPro">
          <figure>
            <img src={ImageURL} alt="" />
          </figure>
        </div>
        <div className="rightPro">
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                value={firstName}
                onChange={e => updateFormData(e)}
                placeholder="First name"
                type="text"
                name="firstName"
                required
              />
            </div>
            <div>
              <label>Email Address:</label>

              <input
                value={email}
                onChange={e => updateFormData(e)}
                placeholder="Email address"
                type="email"
                name="email"
                required
              />
            </div>

            <div>
              <label>Phone Number:</label>

              <input
                value={PhoneNumber}
                onChange={e => updateFormData(e)}
                placeholder="Phone Number"
                type="text"
                name="PhoneNumber"
                required
              />
            </div>
            <div>
              <label>Number of seats:</label>

              <select
                onChange={e => updateFormData(e)}
                placeholder="Number of seats"
                type="text"
                name="seats"
                value={seats}
                required
              >
                <option>Select option</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div>
              <label>Name of Attendee 2</label>
              <input
                value={attendee}
                onChange={e => updateFormData(e)}
                placeholder="Name of Attendee 2"
                type="text"
                name="attendee"
                required
              />
            </div>
            <button type="submit">Submit</button>
            <Link to="/" className="btn btn-cancle">
              Cancle
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
