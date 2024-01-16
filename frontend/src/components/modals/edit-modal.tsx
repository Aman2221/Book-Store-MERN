import React, { useState } from "react";
import { customToast, validateEmail } from "../functions";
import axios from "axios";
import CreateUpdate from "../create-update";
import { book_data } from "../../interfaces/books";

const EditModal = ({ data }: { data: book_data }) => {
  const [formData, setFormData] = useState({
    id: data._id,
    email: data.email,
    book_name: data.title,
    book_author: data.author,
    publish_year: data.publishYear,
  });

  const handleChange = (e: any): void => {
    let key = e.target.id;
    let value = e.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    if (validateEmail(formData.email)) {
      const updated_date = {
        title: formData.book_name,
        author: formData.book_author,
        publishYear: formData.publish_year,
        email: formData.email,
      };
      axios
        .post(`http://localhost:8000/books/${formData.id}`, updated_date)
        .then(() => {
          customToast("Book Updated sucssessfully");
        });
    }
  };

  return (
    <div>
      <CreateUpdate
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
      />
    </div>
  );
};

export default EditModal;
