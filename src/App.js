// App.js
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
<div className="image-section">
<img src="logo111.png" className="image-section-img" alt="" />
</div>

 <div className="container">


<div className="form-section">
  <h1>FoodTime</h1>
  <p>Please, fill in this form to sign up</p>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      value={formData.firstName}
      onChange={handleChange}
      required
    />
    <input
      type="text"
      name="lastName"
      placeholder="Last name"
      value={formData.lastName}
      onChange={handleChange}
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={formData.confirmPassword}
      onChange={handleChange}
      required
    />
    <label className="checkbox-label">
      <input
        type="checkbox"
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
        required
      />
      I accept the Terms of use & privacy policy
    </label>
    <button type="submit">Sign Up</button>
  </form>
</div>
</div>
    </div>

   
    
    
  );
}

export default App;