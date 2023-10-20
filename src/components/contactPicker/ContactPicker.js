import React from "react";

export const ContactPicker = ({ contacts, handleInputChange, value, name }) => {
  return (
    <>
      <select onChange={handleInputChange} value={value} name={name}>
        <option value={""}>
          No Contact Selected
        </option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact}>
              {contact}
            </option>
          );
        })}
      </select>
    </>
  );
};
