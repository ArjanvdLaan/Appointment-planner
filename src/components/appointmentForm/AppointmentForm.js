import React, {useMemo} from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const handleInputChange = (setterFunc) => (e) => {
    setterFunc(e.target.value);
  };

  const contactNames = useMemo(() => {
    return contacts.map((contact) => contact.name);
  }, [contacts]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={contact}
          onChange={handleInputChange(setContact)}
        />
        <input
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleInputChange(setDate)}
          min={getTodayString()}
        />
        <input
          type="time"
          placeholder="Time"
          value={time}
          onChange={handleInputChange(setTime)}
        />
        <ContactPicker
          name="contact"
          value={contact}
          contacts={contactNames}
          handleInputChange={(e) => setContact(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
