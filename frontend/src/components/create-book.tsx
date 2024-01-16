import axios from "axios";
import { useState } from "react";
import { customToast, validateEmail } from "./functions";
import { ToastContainer } from "react-toastify";
import CreateUpdate from "./create-update";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    email: "",
    book_name: "",
    book_author: "",
    publish_year: "",
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
      const data = {
        title: formData.book_name,
        author: formData.book_author,
        publishYear: formData.publish_year,
        email: formData.email,
      };
      axios.post("http://localhost:8000/books", data).then(() => {
        setFormData({
          email: "",
          book_name: "",
          book_author: "",
          publish_year: "",
        });
        customToast("Book added sucssessfully");
      });
    }
  };

  return (
    <div className="login-form mt-20">
      <div className="w-full max-w-sm">
        <CreateUpdate
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Aman Singh. All rights reserved.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBook;
