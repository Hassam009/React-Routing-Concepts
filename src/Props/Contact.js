import React, { useState } from 'react';

// ... (other imports)

const Contact = () => {
    const [formData, setFormData] = useState({
      username: "",
      email: "",
    });
  
    const handleInput = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setFormData((prev) => {
        return { ...prev, [name]: value };
      });
    };
  
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <form style={{ width: '50%' }}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Your Name
              </label>
              <input
                type="text"  // Assuming it's a text input for the name
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
                name="username"
                value={formData.username}
                onChange={handleInput}
              />
              <div id="nameHelp" className="form-text">
                We'll never share your name with anyone else.
              </div>
            </div>
            {/* ... (other form elements) */}
          </form>
          <div>
            <p>{`My name is ${formData.username} and My email is ${formData.email}`}</p>
          </div>
        </div>
      </>
    );
  }
  
  export default Contact;
  