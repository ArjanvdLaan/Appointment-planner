import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const handleInputChange = (setterFunc) => (e) => {
    setterFunc(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleInputChange(setName)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="\+316\d{8}"
          value={phone}
          onChange={handleInputChange(setPhone)}
        />
        <input
          type="email"
          placeholder="Emailadres"
          value={email}
          onChange={handleInputChange(setEmail)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
