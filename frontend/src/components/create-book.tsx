import axios from "axios";
import { useState } from "react";
import { customToast, validateEmail } from "./functions";
import { ToastContainer } from "react-toastify";

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
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Book name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="book_name"
              type="text"
              placeholder="Book name"
              onChange={handleChange}
              value={formData.book_name}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Book author
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="book_author"
              type="text"
              placeholder="Book author"
              onChange={handleChange}
              value={formData.book_author}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Publish Year
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="publish_year"
              type="text"
              placeholder="Publish year"
              onChange={handleChange}
              value={formData.publish_year}
              required
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add book
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2024 Aman Singh. All rights reserved.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBook;
